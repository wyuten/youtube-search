import { useState, useEffect } from 'react'
import { getVideos } from '@/entities/video/videos-api.js'

import VideoCard from '@/widgets/video-card/VideoCard.jsx'

export default function VideosGrid() {
  const [videos, setVideos] = useState([])

  useEffect(() => {
    async function fetchData() {
      setVideos(await getVideos())
    }

    fetchData()
  }, [])

  return (
    <>
      <p className="text-3xl font-bold underline">videos</p>
      <ul className="grid gap-4 xs:grid-cols-2 md:grid-cols-3">
        {
          videos.map((video, index) => (
            <VideoCard key={index} video={video} />
          ))
        }
      </ul>
    </>
  )
}
