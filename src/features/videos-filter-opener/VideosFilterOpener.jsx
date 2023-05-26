import PropTypes from 'prop-types';
import './VideosFilterOpener.css'

VideosFilterOpener.propTypes = {
  checked: PropTypes.bool,
  onClick: PropTypes.func
}

export default function VideosFilterOpener({checked, onClick}) {
  return (
    <button 
      className={`
        ${checked && 'videos-filter-opener--active'}
        videos-filter-opener
        absolute top-0 left-0
        flex items-center justify-center
        w-14 h-14 p-0
        rounded-none rounded-ee-xl bg-slate-200
      `}
      onClick={onClick}
    >
      <span
        className={`
          videos-filter-opener__icon
          leading-none text-2xl
        `}
      >
        🪮
      </span>
    </button>
  )
}
