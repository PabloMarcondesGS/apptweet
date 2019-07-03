import React, { Component } from 'react';
import api from '../services/api';

import twitterLogo from '../twitter.svg' ;
import './Timeline.css';

export default class Timeline extends Component {
  state = {
    newTweet: '',
  };

handleNewTweet = async (e) => {
    if (e.keyCode !== 13) return;

    const content = this.state.newTweet;
    const author = localStorage.getItem("@GoTwitter:username");

    await api.post('tweets', {content, author});

    this.setState({newTweet: ''});
};

handleInputChance = (e) => {
      this.setState({newTweet: e.target.value});
};

  render() {
    return (
      <div className="timeline-wrapper">
        <img height={24} src={twitterLogo} alt="GoTwitterlogo" />
        <form>
          <textarea
            value = {this.state.newTweet}
            onChange = {this.handleInputChance}
            onKeyDown = {this.handleNewTweet}
            placeholder="O que esta acontecendo" />
          </form>
          {/* <ul></ul> */}
      </div>
    );
  }
}
