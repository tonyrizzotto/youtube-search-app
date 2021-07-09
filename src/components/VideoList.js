import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos }) => {
  //a list that renders out a VideoItem card for each search result.
  const renderedList = videos.map((video) => {
    console.log(video.snippet);
    return <VideoItem video={video} />;
  });
  return <div className="ui relaxed divided list">{renderedList}</div>;
};

export default VideoList;
