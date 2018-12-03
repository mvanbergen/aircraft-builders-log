import { Image } from '../model/image';
import {Project} from '../model/project';

export const PROJECTS: Project[] = [
  {
    id: 1,
    builderId: 1,
    name: 'Christen Eagle II Build',
    description: 'A great build and my favorite.',
    keyImage: 2,
    status: 'Active',
    city: 'Lake Zurich',
    state: 'IL',
    workshop: 'Garage',
    dateStarted: new Date('2018-12-22'),
    dateEnded: null,
    dateCreatedStamp: new Date('2018-12-22'),
    dateUpdatedStamp: new Date('2018-12-22')
  },
  {
  id: 2,
  builderId: 1,
  name: 'Belite Chipper',
  description: 'Will be a fun STOL.',
  keyImage: 3,
  status: 'Active',
  city: 'Lake Zurich',
  state: 'IL',
  workshop: 'Garage',
  dateStarted: new Date('2018-12-22'),
  dateEnded: null,
  dateCreatedStamp: new Date('2018-12-22'),
  dateUpdatedStamp: new Date('2018-12-22')
},
];
