import Styles from './ExclusiveSection.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

import image from '../assets/exclusive.png'

import React from 'react'

function ExclusiveSection() {
    return (
        <div className={Styles.exclusiveSection}>
            <div className={Styles.pageInnerContent}>
                <div className={Styles.content}>
                    <div className={Styles.leftSide}>
                        <h2>Smart band 4</h2>
                        <p>
                            O Smart Band 4 traz um design moderno e elegante para o seu dia-a-dia.
                            Suporta todos os tipos de aparelhos.
                            Perfeitos para operar em qualquer lugar.
                        </p>
                        <Link to="/products" className={Styles.seeMoreBtn}>
                            <span>Ver Agora</span>
                            <FontAwesomeIcon icon={faChevronRight} />
                        </Link>
                    </div>
                    <div className={Styles.rightSide}>
                        <img src={image} alt="Smart Band 4" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ExclusiveSection