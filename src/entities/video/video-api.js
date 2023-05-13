import videosData from './video-data.js'
// import RequestClient from '@/shared/request-client/RequestClient.js';

// const requestClient = new RequestClient({
//   baseURL: 'https://www.googleapis.com/youtube/v3'
// })

export async function getVideos() {
  // const response = await requestClient.get(`/search?key=${import.meta.env.VITE_YOUTUBE_KEY}&channelId=UC-GLi4onmBTmM-H23LV2hOw&part=snippet&publishedBefore=2017-01-01T00:00:00Z`)
  // return response.items
  return videosData
}
