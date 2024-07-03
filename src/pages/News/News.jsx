import style from './News.module.css'

const News = () => {
  return (
    <div className={style.news}>

      <section className={style.newsContainer}>
        <div className={style.newsThumb}></div>
        <h1>Title</h1>
        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, deleniti quis. Culpa quis dolorem, praesentium, maxime veritatis quaerat distinctio exercitationem quibusdam nobis sequi suscipit excepturi quisquam saepe autem mollitia commodi.</span>
      </section>

      <section className={style.newsContainer}>
        <div className={style.newsThumb}></div>
        <h1>Title</h1>
        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, deleniti quis. Culpa quis dolorem, praesentium, maxime veritatis quaerat distinctio exercitationem quibusdam nobis sequi suscipit excepturi quisquam saepe autem mollitia commodi.</span>
      </section>
    </div>
  )
}

export default News