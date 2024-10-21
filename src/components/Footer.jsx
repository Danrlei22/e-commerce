import Styles from './Footer.module.css';

import { Link } from 'react-router-dom'

import image1 from '../assets/app-store.png';
import image2 from '../assets/play-store.png';

import classNames from 'classnames';

function Footer() {

    return (
        <footer>
            <div className={classNames(Styles.pageInnerContent, Styles.content)}>
                <div className={Styles.downloadOptions}>
                    <p>Baixe a nossa aplicação</p>
                    <p>Baixe nossa aplicação para Androide iOS</p>
                    <div>
                        <img src={image1} alt="Apple Store download" />
                        <img src={image2} alt="Play Store download" />
                    </div>
                </div>

                <div className={Styles.logoFooter}>
                    <h3 className={Styles.logo}>
                        GRE<span>STORE</span>
                    </h3>
                    <p>
                        Nosso objetivo é ajudar você a alcançar seus objetivos comerciais.
                    </p>
                </div>

                <div className={Styles.links}>
                    <h3>Links úteis</h3>
                    <ul>
                        <li>
                            <Link to="/">Cupons</Link>
                        </li>
                        <li>
                            <Link to="/">Blog posts</Link>
                        </li>
                        <li>
                            <Link to="/">Políticas</Link>
                        </li>
                        <li>
                            <Link to="/">Torne-se um Afiliado</Link>
                        </li>
                    </ul>
                </div>
            </div>

            <div className={Styles.pageInnerContent}>
                <hr />

                <p className={Styles.copyright}>
                    Copyright 2024 - Danrlei Vieira - Todos os direitos reservados
                </p>
            </div>
        </footer>
    )
}

export default Footer