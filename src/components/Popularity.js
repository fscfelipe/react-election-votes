import React from 'react'

import css from './popularity.module.css'

const STARS = {
  empty: '☆',
  full: '★'
};

const MAX_STARS = 10;

export default function Popularity({ value }) {

  const fullStars = STARS.full.repeat(value);
  const emptyStars = STARS.empty.repeat(MAX_STARS - value);

  return (
    <div className={css.popularity}>
      {fullStars}{emptyStars}
    </div >
  )
}
