import styles from "./frutos.module.css";
import Shield from "../../assets/img/frutos_shield.svg";
import Archive from "../../assets/img/frutos_archive.svg";
import Criativo from "../../assets/img/frutos_criativo.svg";
import Raciocinio from "../../assets/img/frutos_raciocinio.svg";

const Frutos = () => {
  return (
    <frutos className={styles.Frutos}>
      <div class={styles.frutos_wrapper}>
        <div class={styles.frutos_container}>
          <div class={styles.frutos_content}>
            <div class={styles.frutos_text}>
              <h2 class={styles.frutos_title}>Benefícios de joga uno</h2>

              <p class={styles.frutos_subtitle}>
                Saiba mais sobres os benefícios de joga uno com seus amigos e
                família
              </p>
            </div>
            <div class={styles.frutos_img}>
              <div class={styles.frutos_shield}>
                <img src={Shield} alt=""></img>
                <div class={styles.shield_text}>
                  <p>Divirta-se com segurança.</p>
                </div>
              </div>

              <div class={styles.frutos_archive}>
                <img src={Archive} alt=""></img>
                <div class={styles.archive_text}>
                  <p>Pensamentos fora da caixinha.</p>
                </div>
              </div>

              <div class={styles.frutos_criativo}>
                <img src={Criativo} alt=""></img>
                <div class={styles.criativo_text}>
                  <p>Ativa o seu lado criativo.</p>
                </div>
              </div>

              <div class={styles.frutos_raciocinio}>
                <img src={Raciocinio} alt=""></img>
                <div class={styles.raciocinio_text}>
                  <p>Estimula o raciocínio rápido</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </frutos>
  );
};

export default Frutos;