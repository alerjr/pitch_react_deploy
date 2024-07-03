import React from 'react'
import style from './Reviews.module.css'

const Reviews = () => {
  return (
    <div className={style.review}>
        <section className={style.reviewSection}>
            <div className={style.reviewImg}></div>
            <h1>Title</h1>
            <h2>0.0</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus animi dolore temporibus quibusdam iusto odio, inventore esse saepe. Labore neque rem inventore harum quibusdam dolore officia nam perspiciatis. Nisi, natus?</p>
        </section>

        <section className={style.reviewSection}>
            <div className={style.reviewImg}></div>
            <h1>Title</h1>
            <h2>0.0</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus animi dolore temporibus quibusdam iusto odio, inventore esse saepe. Labore neque rem inventore harum quibusdam dolore officia nam perspiciatis. Nisi, natus?</p>
        </section>

        <section className={style.reviewSection}>
            <div className={style.reviewImg}></div>
            <h1>Title</h1>
            <h2>0.0</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus animi dolore temporibus quibusdam iusto odio, inventore esse saepe. Labore neque rem inventore harum quibusdam dolore officia nam perspiciatis. Nisi, natus?</p>
        </section>
    </div>
  )
}

export default Reviews