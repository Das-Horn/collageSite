/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */
import { Header } from 'components/Header';
import { ContentFrame } from 'components/ContentFrame';
import { PicTile } from 'components/PicTile';
import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

export default function HomePage() {
  const imageList = JSON.parse(sessionStorage.getItem('images'));
  const settings = JSON.parse(localStorage.getItem('settings'));
  const map = [];
  for (let i = 0; i < imageList.images.length; i++) {
    map.push(
      <div
        key={toString(Math.floor(Math.random() * 8000000))}
        className="column"
      >
        {imageList.images[i].map(url => (
          <PicTile src={url} />
        ))}
      </div>,
    );
  }
  console.log(map);
  return (
    <div>
      <Header />
      <ContentFrame>
        {map}
      </ContentFrame>
    </div>
  );
}
