import {Post} from '../model/post';

export const POSTS: Post[] = [
  {
    id: 1,
    projectId: 1,
    tags: 'upper wings,ribs',
    builders: 'matt,claire',
    title: 'post title',
    description: 'post description',
    hoursWorked: 1.5,
    helpers: ['Janet', 'Claire'],
    keyImage: 1,
    dateCreatedStamp: new Date('2018-01-24'),
    dateUpdatedStamp: new Date('2018-01-24'),
    dateOfWork: new Date('2018-01-24'),
    images: null
  },
  {
    id: 2,
    projectId: 1,
    tags: 'fuselage',
    builders: 'matt',
    title: 'Working on the landing gear',
    description: 'landing gear attachment',
    hoursWorked: 3.75,
    helpers: ['Janet', 'Claire'],
    keyImage: 1,
    dateCreatedStamp: new Date('2018-01-24'),
    dateUpdatedStamp: new Date('2018-01-24'),
    dateOfWork: new Date('2018-01-24'),
    images: null
  },
  {
    id: 3,
    projectId: 1,
    tags: 'engine',
    builders: 'claire',
    title: 'Mounting the engine',
    description: 'hanging the engine on the firewall',
    hoursWorked: 5.75,
    helpers: ['Janet', 'Claire'],
    keyImage: 1,
    dateCreatedStamp: new Date('2018-01-24'),
    dateUpdatedStamp: new Date('2018-01-24'),
    dateOfWork: new Date('2018-01-24'),
    images: null
  }
];
