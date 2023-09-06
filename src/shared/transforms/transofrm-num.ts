import { TransformFnParams } from 'class-transformer';

export const TramsformNum = (p: TransformFnParams): number | null => (+p?.value ? +p.value : null);
