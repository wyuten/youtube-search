import { useState } from 'react'
import VideosFilter from '@/widgets/videos-filter/VideosFilter.jsx'
import VideosFilterOpener from '@/features/videos-filter-opener/VideosFilterOpener.jsx'
import VideosGrid from '@/widgets/videos-grid/VideosGrid.jsx'

export default function App() {
  const [isFilterVisible, setIsFilterVisible] = useState(false)

  const onFilterOpenerClick = () => {
    setIsFilterVisible(!isFilterVisible)
  }

  return (
    <div className="flex flex-col sm:flex-row">
      <VideosFilterOpener checked={isFilterVisible} onClick={onFilterOpenerClick} />
      {isFilterVisible && <VideosFilter />}
      <VideosGrid />
    </div>
  )
}
