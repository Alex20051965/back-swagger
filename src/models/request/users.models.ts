import { Types } from 'mongoose';
// import { AcademicDegree, AcademicTitles, ScienceForDegree } from '../common/profile.models';

export interface IProfileByIdRequest {
  profileId: Types.ObjectId;
}

export interface IFindProfilesWithFiltersRequest {
  full_name_low?: RegExp;
  work?: RegExp;
  edu?: RegExp;
  edu_ind?: RegExp,
  // academic_degree?: AcademicDegree;
  // academic_title?: AcademicTitles;
  // scien_for_degree?: ScienceForDegree;
}
export interface IFastifyUser {
  user: {
    id: string;
    is_support?: boolean;
    is_admin?: boolean;
  }
}
