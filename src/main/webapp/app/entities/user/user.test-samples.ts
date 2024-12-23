import { IUser } from './user.model';

export const sampleWithRequiredData: IUser = {
  id: 2113,
  login: '5@eX\\dKnb',
};

export const sampleWithPartialData: IUser = {
  id: 21593,
  login: 'Pju2Y1@ktI-1\\ik\\4JV-QQU\\0BVt\\5Oxb',
};

export const sampleWithFullData: IUser = {
  id: 8952,
  login: '9EG8Ah',
};
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
