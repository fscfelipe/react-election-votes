import React from 'react'

import css from './header.module.css'

export default function Header({ title }) {
  return (
    <div>
      <h1 className={css.title}>{title}</h1>
    </div>
  )
}
