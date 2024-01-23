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
              <a href="#">
                <p class={styles.modelos_more}>
                  Ver todos
                  <arrow>
                    <img src={arrow} alt="seta" />
                  </arrow>
                </p>
              </a>
            </div>
          </div>
        </div>
        <div class={styles.modelos_button}>
          <div class={styles.modelos_img}>
            <a href="#">
              <img src={Uno_minimalista} alt="Uno Minimalista" />
            </a>
            <a href="#">
              <img src={Uno_flip} alt="Uno Flip" />
            </a>
            <a href="#">
              <img src={Uno_default} alt="Uno Default" />
            </a>
            <a href="#">
              <img src={Uno_dos} alt="Uno Dos" />
            </a>
          </div>
        </div>
      </div>
    </modelos>
  );
};

export default Modelos;
