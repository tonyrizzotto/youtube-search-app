import axios from 'axios';

const KEY = 'AIzaSyBgSOic7Uklzrb8qBYR3ZqumcuIIlP89vU';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY,
  },
});
