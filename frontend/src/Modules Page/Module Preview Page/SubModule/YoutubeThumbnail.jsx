import React from 'react';
import playButton from '../../../image-assets/playButton.png'

const YouTubeThumbnail = ({ videoId, videoUrl }) => {
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`;

  return (
    <div className="yt-thumbnail">
      <a href={videoUrl} target="_blank" rel="noopener noreferrer">
        <img src={thumbnailUrl} alt="YouTube Video Thumbnail" />
        <img src={playButton} className="play-button"/>
      </a>
    </div>
  );
};

export default YouTubeThumbnail;
