import React from 'react'

import css from './card.module.css'

export default function Card({ children }) {

  const cardClasses = `card ${css.cardExtra}`

  return (
    <div className={cardClasses}>
      {children}
    </div>
  )
}
