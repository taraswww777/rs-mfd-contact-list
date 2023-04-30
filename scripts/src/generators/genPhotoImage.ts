import axios from 'axios';
import dotenv from 'dotenv';
import path from 'path';

const DOT_ENV = dotenv.config({
  path: path.join(__dirname, `../../../.env`)
}).parsed;

const REACT_APP_API_NINJAS_TOKEN = DOT_ENV?.REACT_APP_API_NINJAS_TOKEN || ''


const API_IMAGES_BASE = 'https://api.api-ninjas.com/v1';
const API_IMAGES = '/randomimage';

const axiosInstance = axios.create({
  baseURL: API_IMAGES_BASE,
  headers: {'X-Api-Key': REACT_APP_API_NINJAS_TOKEN},
  timeout: 10000,
});

export const genPhotoImage = async (): Promise<string> => {
  const {data: image} = await axiosInstance.get<string>(API_IMAGES);
  return `data:image/jpeg;base64,${image}`;
}
