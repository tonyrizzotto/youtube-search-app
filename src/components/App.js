import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends React.Component {
  //initialize empty state on an array for videos
  state = { videos: [], selectedVideo: null };
  //call back to the Search Bar

  componentDidMount() {
    this.onTermSubmit('minnie mouse');
  }
  onTermSubmit = async (term) => {
    const response = await youtube.get('/search', {
      params: {
        q: term,
      },
    });

    this.setState({
      videos: response.data.items,
      // takes the first video on search and uses it as a default video
      selectedVideo: response.data.items[0],
    });
  };

  // create a callback function that runs when a video is selected
  onVideoSelect = (video) => {
    //set the state of 'selectedVideo' to whatever is clicked on the screen
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onTermSubmit={this.onTermSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList
                onVideoSelect={this.onVideoSelect}
                videos={this.state.videos}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
