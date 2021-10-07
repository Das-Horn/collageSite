import React from 'react';
import { Container } from './Container';

export function ContentFrame(props) {
  return <Container className="row">{props.children}</Container>;
}
