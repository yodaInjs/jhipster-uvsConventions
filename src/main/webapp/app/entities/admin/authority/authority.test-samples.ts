import { IAuthority, NewAuthority } from './authority.model';

export const sampleWithRequiredData: IAuthority = {
  name: '6ab59f00-8032-4eb4-931c-0e7fe2186ea7',
};

export const sampleWithPartialData: IAuthority = {
  name: '6f1bf73b-8019-4e1f-b2cf-d847cf130d9a',
};

export const sampleWithFullData: IAuthority = {
  name: '8ddf9c5c-4191-4fea-be87-6efa4a9d92ef',
};

export const sampleWithNewData: NewAuthority = {
  name: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
