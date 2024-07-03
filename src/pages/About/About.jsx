import React from 'react'
import style from './About.module.css'

const About = () => {
  return (
    <section className={style.about}>
      <div className={style.carrossel} />
      <h1>About us</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus cumque recusandae reprehenderit, vero minus, velit culpa doloremque doloribus fugit a repudiandae quia illum corporis impedit earum iste pariatur? Dolor, asperiores!</p>
      <div className={style.carrossel} />
    </section>
  )
}

export default About