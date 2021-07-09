import React from 'react';
import './VideoItem.css';

// The onVideoSelect prop is passed down from the App component, then to VideoList, and then to VideoItem
const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <div
      // when the div is clicked, we need to call the onVideoSelect callback and pass it the video object that was selected.
      onClick={() => {
        onVideoSelect(video);
      }}
      className="video-item item"
    >
      <img className="ui image" src={video.snippet.thumbnails.medium.url} />
      <div className="content">
        <div className="header">{video.snippet.title}</div>
        {/* <div className="description">{video.snippet.description}</div> */}
      </div>
    </div>
  );
};

export default VideoItem;
