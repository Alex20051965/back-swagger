import { ConflictException, ForbiddenException, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import { Model, Types } from 'mongoose';
import { AuthConfig } from '../../configs/auth.config';
import { IRefreshRequest, ISignInRequest, ISignUpRequest } from '../../models/request/authorization.requests';
import { IPayloadResponse, ITokensResponse } from '../../models/responses/authorization.response';
import { User, UserDocument } from '../../schemas/users.schema';

@Injectable()
export class AuthorizationService {

  private readonly usersModel: Model<UserDocument>;
  private readonly authConfig: AuthConfig;

  constructor(
  @InjectModel(User.name) usersModel: Model<UserDocument>,
    authConfig: AuthConfig,

  ) {
    this.usersModel = usersModel;
    this.authConfig = authConfig;
  }

  async signUp(body: ISignUpRequest): Promise<UserDocument> {
    const { name, email, password } = body;
    const checkUnique = await this.usersModel.count({ email });

    if (checkUnique) {
      throw new ConflictException('Uniqie email required');
    }

    const hash = await bcrypt.hash(password, 10);
    const _id = new Types.ObjectId();
    const tokens = this.makeTokens({ _id });
    const user = await this.usersModel.create({ _id, email, name, password: hash, ...tokens });
    return user;
  }

  async signIn(body: ISignInRequest): Promise<UserDocument> {
    const userName = await this.usersModel.findOne({ name: body.name });
    if (!userName) {
      throw new UnauthorizedException('Incorrect name');
    }

    const user = await this.usersModel.findOne({ email: body.email });
    if (!user) {
      throw new UnauthorizedException('Incorrect email');
    }

    const check = await bcrypt.compare(body.password, user.password);
    if (!check) {
      throw new UnauthorizedException('Incorrect password');
    }

    const tokens = this.makeTokens({ _id: user._id });
    const updatedUser = await this.usersModel.findOneAndUpdate({ _id: user._id }, { ...tokens }, { new: true });
    return updatedUser;
  }

  async refresh(body: IRefreshRequest): Promise<UserDocument> {
    const payload = this.deocdeToken(body.refreshToken, false);
    const userExist = await this.usersModel.count({ _id: payload._id, refreshToken: body.refreshToken });
    if (!userExist) {
      throw new ForbiddenException('Invalid input');
    }

    const user = await this.usersModel.findOneAndUpdate({ _id: payload._id }, { ...this.makeTokens({ _id: payload._id }) }, { new: true });
    return user;
  }

  public makeTokens(data: object = {}): ITokensResponse {
    const accessToken: string = jwt.sign(data, this.authConfig.accessSecret, {
      expiresIn: this.authConfig.accessExpire,
    });
    const refreshToken: string = jwt.sign(data, this.authConfig.refreshSecret, {
      expiresIn: this.authConfig.refreshExpire,
    });

    return {
      accessToken,
      refreshToken,
    };
  }

  deocdeToken(token: string, access = true): IPayloadResponse {
    const payload = jwt.verify(token, access ? this.authConfig.accessSecret : this.authConfig.refreshSecret) as IPayloadResponse;

    if (!payload) {
      throw new ForbiddenException('Invalid token');
    }

    return payload;
  }

  async getUser(query: Partial<User & { _id: string }>): Promise<number> {
    const user = await this.usersModel.count(query);
    if (!user) {
      throw new NotFoundException('User was not found');
    }
    return user;
  }

}
