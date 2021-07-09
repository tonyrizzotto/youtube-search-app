import React from 'react';

const VideoDetail = ({ video }) => {
  // need to include a check for if videos aren't rendered or selected. Otherwise there will be an error of 'Cannot read property 'snippet' of null.
  if (!video) {
    return <div>loading...</div>;
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  return (
    <div>
      {/* Create an iFrame for the selected video */}
      <div className="ui embed">
        <iframe src={videoSrc} />
      </div>
      <div className="ui segment">
        <h4 className="ui header">{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
