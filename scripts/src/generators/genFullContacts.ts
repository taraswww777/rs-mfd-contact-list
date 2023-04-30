import {genArray} from './genArray';
import {genContact} from './genContact';
import {genPhotoImage} from './genPhotoImage';

export const genFullContacts = async (count: number = 50) => {
  const promises = genArray(genContact, count)
    .map(async (contact) => {
      return {
        ...contact,
        photo: await genPhotoImage()
      }
    });
  return await Promise.allSettled(promises);
}


