import styles from "./modelos.module.css";
import Uno_minimalista from "../../assets/img/uno-minimalista.png";
import Uno_flip from "../../assets/img/uno-flip.png";
import Uno_default from "../../assets/img/uno-default.png";
import Uno_dos from "../../assets/img/uno-dos.png";
import arrow from "../../assets/img/arrow-modelos.svg";

const Modelos = () => {
  return (
    <modelos className={styles.Modelos}>
      <div class={styles.modelos_wrapper}>
        <div class={styles.modelos_container}>
          <div class={styles.modelos_content}>
            <div class={styles.modelos_text}>
              <h2 class={styles.modelos_title}>Nossos novos modelos</h2>
              <div class={styles.modelos_more}>
                <a class={styles.modelos_p} href="#">
                  <p>Ver todos </p>
                  <arrow>
                    <img src={arrow} alt="seta" />
                  </arrow>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class={styles.modelos_button}>
          <div class={styles.modelos_img}>
            <a href="#">
              <div class={styles.uno_min}>
                <div class={styles.uno_min_img}>
                  <img src={Uno_minimalista} alt="Uno Minimalista" />
                </div>

                <div class={styles.uno_min_text}>
                  <p>UNO® minimalista</p>
                  <p2>R$ 80</p2>
                </div>

                <div class={styles.uno_min_text2}>
                  <p3>Acaba em 01.34.45</p3>
                </div>
              </div>
            </a>

            <a href="#">
              <div class={styles.uno_roxo}>
                <div class={styles.uno_roxo_img}>
                  <img src={Uno_flip} alt="Uno Flip" />
                </div>

                <div class={styles.uno_roxo_text}>
                  <p>UNO® minimalista</p>
                  <p2>R$ 80</p2>
                </div>

                <div class={styles.uno_roxo_text2}>
                  <p3>Acaba em 01.34.45</p3>
                </div>
              </div>
            </a>

            <a href="#">
              <div class={styles.uno_red}>
                <div class={styles.uno_red_img}>
                  <img src={Uno_default} alt="Uno Default" />
                </div>

                <div class={styles.uno_red_text}>
                  <p>UNO® minimalista</p>
                  <p2>R$ 80</p2>
                </div>

                <div class={styles.uno_red_text2}>
                  <p3>Acaba em 01.34.45</p3>
                </div>
              </div>
            </a>

            <a href="#">
              <div class={styles.uno_azul}>
                <div class={styles.uno_azul_img}>
                  <img src={Uno_dos} alt="Uno Dos" />
                </div>

                <div class={styles.uno_azul_text}>
                  <p>UNO® minimalista</p>
                  <p2>R$ 80</p2>
                </div>

                <div class={styles.uno_azul_text2}>
                  <p3>Acaba em 01.34.45</p3>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </modelos>
  );
};

export default Modelos;
