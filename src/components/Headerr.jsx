import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Styles from './Headerr.module.css'

import { Link } from 'react-router-dom'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

import headerImage from '../assets/header-image.png'

function Headerr() {
    return (
        <header>
            <div className={Styles.innerContent}>
                <div className={Styles.lefSide}>
                    <h2>Dê um novo estulo ao seu trabalho!</h2>
                    <p>
                        Sucesso nem sempre tem haver com grandeza. Tem haver com consistência. Trabalho duro consistente supera o sucesso. A grandeza virá.
                    </p>
                    <Link
                        to='/products' className={Styles.seeMoreBtn}>
                        <span>Ver produtos</span>
                        <FontAwesomeIcon icon={faChevronRight} />
                    </Link>
                </div>
                <div className={Styles.righSide}>
                    <img src={headerImage} alt="Products" />
                </div>
            </div>
        </header>
    )
}

export default Headerr