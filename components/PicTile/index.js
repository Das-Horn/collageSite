import React from 'react';
import { Frame } from './Frame';

export class PicTile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: props.src,
    };
  }

  render() {
    return (
      <Frame>
        <img className="tileImg" src={this.state.url} />
      </Frame>
    );
  }
}
