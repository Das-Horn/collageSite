/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */
import {Header} from 'components/Header';
import {ContentFrame} from 'components/ContentFrame';
import { Fragment } from 'react';
import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

export default function HomePage() {
  return (
    <div>
      <Header />
      <ContentFrame />
    </div>
    );
}
