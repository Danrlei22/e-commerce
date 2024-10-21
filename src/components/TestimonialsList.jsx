import Styles from './TestimonialsList.module.css'


function TestimonialsList() {
    return (
        <div className={Styles.pageInnerContent}>
            <div className={Styles.testimonials}>
                <div className={Styles.testimonial}>
                    <p>"</p>
                    <p>
                        O melhor website ecommerce responsivo e moderno, vou já partilhar o vídeo com maior número de pessoas e amigos que eu conseguir.
                    </p>
                    <p className={Styles.rate}>&#9733;&#9733;&#9733;&#9733;&#9733;</p>
                    <p>Vanessa Cruz</p>
                </div>

                <div className={Styles.testimonial}>
                    <p>"</p>
                    <p>
                        O melhor website ecommerce responsivo e moderno, vou já partilhar o vídeo com maior número de pessoas e amigos que eu conseguir.
                    </p>
                    <p className={Styles.rate}>&#9733;&#9733;&#9733;&#9733;&#9733;</p>
                    <p>Lais vallecar</p>
                </div>

                <div className={Styles.testimonial}>
                    <p>"</p>
                    <p>
                        O melhor website ecommerce responsivo e moderno, vou já partilhar o vídeo com maior número de pessoas e amigos que eu conseguir.
                    </p>
                    <p className={Styles.rate}>&#9733;&#9733;&#9733;&#9733;&#9733;</p>
                    <p>Mariana Silva</p>
                </div>

            </div>

        </div>
    )
}

export default TestimonialsList