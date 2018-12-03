import {Builder} from '../model/builder';
import { Image } from '../model/image';

export const BUILDER: Builder[] = [
  {
    id: 1,
    firstName: 'Matt',
    lastName: 'Van Bergen',
    about: 'I am a passionate aviator',
    city: 'Lake Zurich',
    state: 'IL',
    zipcode: '60047',
    phone: '847-561-0520',
    email: 'mvanbergen@gmail.com',
    twitter: 'mvanbergen',
    facebook: 'mattvanbergen',
    instagram: 'mvanbergen',
    image: new Image(),
    dateCreatedStamp: new Date('2018-12-22'),
    dateUpdatedStamp: new Date('2018-12-22')
  },
];


