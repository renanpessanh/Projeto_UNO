import styles from "./hero.module.css";
import Uno from "../../assets/img/caixa_hero.png";

const Hero = () => {
  return (
    <hero className={styles.Hero}>
      <div class={styles.hero_wrapper}>
        <div class={styles.hero_container}>
          <div class={styles.hero_content}>
            <div class={styles.hero_text}>
              <h2 class={styles.hero_title}>UNO® minimalista,</h2>
              <span class={styles.hero_span}>
                representa uma excelente opção de presente para colecionadores!
              </span>
              <p class={styles.hero_subtitle}>
                Esta edição especial do UNO®, o jogo de cartas adorado por
                todos, tem um visual totalmente exclusivo.
              </p>
            </div>

            <div class={styles.hero_button}>
              <div class={styles.saiba_btn}>
                <a href="#">Saiba mais</a>
              </div>
              <div class={styles.encontrar_btn}>
                <a href="#">Onde encontrar</a>
              </div>
            </div>
          </div>

          <div class={styles.hero_img}>
            <a href="#">
              <img src={Uno} alt="Uno®" />
            </a>
          </div>
        </div>
      </div>
    </hero>
  );
};

export default Hero;
