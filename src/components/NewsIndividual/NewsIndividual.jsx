import style from './NewsIndividual.module.css'

const NewsIndividual = () => {
  return (
    <div className={style.news}>

      <div className={style.newsContainer}>
        <div className={style.newsThumb}></div>
        <h3 className={style.newsTitle}>Title</h3>
      </div>
    </div>
  )
}

export default NewsIndividual