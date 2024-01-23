import styles from "./header.module.css";
import logo from "../../assets/img/Uno-Logo-menu.png";

const Header = () => {
  return (
    <header className={styles.Header}>
      <div class={styles.header_content}>

        <div class={styles.header_logo}>
          <a href="#">
            <img src={logo} alt="Logo" />
          </a>
        </div>

        <div class={styles.header_nav}>
          <nav>
            <ul class={styles.ul_menu}>
              <li>
                <a href="#">Início</a>
              </li>
              <li>
                <a href="#">Onde encontrar</a>
              </li>
              <li>
                <a href="#">Novos produtos</a>
              </li>
              <li>
                <a href="#">Créditos</a>
              </li>
            </ul>
          </nav>
        </div>

        <div class={styles.header_button}>
          <div class={styles.entrar_btn}>
            <a href="#">Entrar</a>
          </div>
          <div class={styles.registro_btn}>
            <a href="#">Cadastre-se</a>
          </div>
        </div>
        
      </div>
    </header>
  );
};

export default Header;
