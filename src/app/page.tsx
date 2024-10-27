import styles from "./page.module.css";
import HeaderPage from "@/components/header/HeaderPage";
import LinkPages from "@/components/links/LinkPages";


const Home = () => {
  return (
    <div className={styles.page}>

      <div className={styles.header}>
        <HeaderPage />
      </div>

      <div className={styles.links}>
        <LinkPages />
      </div>


      <footer>
        <p>©️ Mohamed Mahmoud AbdElmaqsod Sakr</p>
      </footer>
    </div>
  )
}

export default Home;