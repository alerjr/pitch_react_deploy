import React from 'react'
import style from './Home.module.css'
import Review from '../../components/Review/Review'
import NewsIndividual from '../../components/NewsIndividual/NewsIndividual'

const Home = () => {
  return (
    <div className={style.home}>
        <header />

        <main>
            <Review />
        </main>

        <aside>
            <NewsIndividual />
            <NewsIndividual />
            <NewsIndividual />    
        </aside>
    </div>
  )
}

export default Home