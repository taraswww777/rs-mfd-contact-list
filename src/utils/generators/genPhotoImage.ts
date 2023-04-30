import axios from 'axios';
import {REACT_APP_API_NINJAS_TOKEN} from 'src/constants/env';

const API_IMAGES = 'https://api.api-ninjas.com/v1/randomimage';


export const genPhotoImage = async (): Promise<string> => {
  const {data: image} = await axios<string>({
    url: API_IMAGES,
    method: 'GET', params: {category: 'nature'},
    headers: {'X-Api-Key': REACT_APP_API_NINJAS_TOKEN, 'Accept': 'image/jpg'},
  });
  return image;
}
