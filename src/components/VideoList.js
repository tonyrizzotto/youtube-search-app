import React from 'react';
import VideoItem from './VideoItem';

// you can select certain props through destructuring.
const VideoList = ({ videos, onVideoSelect }) => {
  //a list that renders out a VideoItem card for each search result.
  const renderedList = videos.map((video) => {
    return <VideoItem onVideoSelect={onVideoSelect} video={video} />;
  });
  return <div className="ui relaxed divided list">{renderedList}</div>;
};

export default VideoList;
