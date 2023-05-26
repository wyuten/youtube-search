import videosData from './video-data.js'
// import RequestClient from '@/shared/request-client/RequestClient.js';

// const requestClient = new RequestClient({
//   // baseURL: 'https://www.googleapis.com/youtube/v3',
//   baseURL: 'https://f6cc44da-9bdc-4483-950d-1350ed2c8d22.mock.pstmn.io/search',
// })

export async function getVideos() {
  // const response = await requestClient.get(
  //   '/search',
  //   {
  //     params: {
  //       key: import.meta.env.VITE_DISCLOSED_YOUTUBE_KEY,
  //       channelId: 'UC-GLi4onmBTmM-H23LV2hOw',
  //       part: 'snippet',
  //       publishedBefore: '2017-01-01T00:00:00Z'
  //     }
  //   }
  // )
  // return response.items
  return videosData
}
