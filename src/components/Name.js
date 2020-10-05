import React from 'react'

import css from './name.module.css'

export default function Name({ children }) {
  return (
    <div>
      <span className={css.name}>{children}</span>
    </div>
  )
}
