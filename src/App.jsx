// import { useState } from 'react'
import VideosFilter from '@/widgets/videos-filter/VideosFilter.jsx'
import VideosGrid from '@/widgets/videos-grid/VideosGrid.jsx'

export default function App() {
  return (
    <div className="flex flex-col sm:flex-row">
      <VideosFilter />
      <VideosGrid />
    </div>
  )
}
