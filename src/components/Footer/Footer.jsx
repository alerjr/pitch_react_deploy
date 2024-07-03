import React from 'react'
import style from './Footer.module.css'

const Footer = () => {
  return (
    <div className={style.rodape}>
    <ul>
        <li>
            <strong>Address</strong>
            <li>
                Xxx x, nº xx, xxxxx, xxxxxxx - xx, xxxxx-xxx
                    <li>
                        <strong>Contact</strong>
                            <li>
                                (xx) x xxxx-xxxx
                            </li>
                    </li>
            </li>
        </li>
        
        <li>
            <div className={style.logoImg} />
        </li>
    </ul>
</div>
  )
}

export default Footer