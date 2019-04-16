import React, { Component } from 'react';
import "./App.css";
import Lottie from 'react-lottie';
import data_list from './data'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { isStopped: false, isPaused: false };
}
defaultOptions = (index) => {
    return {
        loop: true,
        autoplay: true,
        animationData: data_list[index],
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        },
    };
};
  render() {
      const { isStopped, isPaused } = this.state;
      return (
          <div className="lottie-box">
              {data_list.map((item, index) => {
                  return (
                          <Lottie key={index}
                              options={this.defaultOptions(index)}
                              height={400}
                              width={400}
                              isStopped={isStopped}
                              isPaused={isPaused}
                          />
                  );
              })}
          </div>
      );
  }
}

export default App;

