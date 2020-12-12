import React from 'react';
import { css, jsx } from './slide/node_modules/@emotion/core';

const Slide = ({ content }) => (
  <img src = {'${ content }'}
    css={css`
      height: 100;
      width: 100%;
      display: flex;
    `}
  />
)

export default Slide;