import PropTypes from 'prop-types';

VideoCard.propTypes = {
  video: PropTypes.object
};

export default function VideoCard({video}) {
  return (
    <li className="rounded-xl overflow-hidden border border-solid border-slate-300">
      <a
        href={'https://www.youtube.com/watch?v=' + video.id.videoId}
        target="_blank"
        rel="noreferrer"
      >
        <img
          className="w-full"
          src={video.snippet.thumbnails.medium.url}
          width={video.snippet.thumbnails.medium.width}
          height={video.snippet.thumbnails.medium.height}
          alt=""
        />
        <p>{ video.snippet.title }</p>
      </a>
    </li>
  )
}
