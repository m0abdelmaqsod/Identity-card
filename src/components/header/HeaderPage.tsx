import Image from 'next/image';
import styles from './styles/header.module.css'
import imageLogo from '../../images/logo--7.png'


const HeaderPage = () => {
  return (
    <div className={styles.HeaderPage}>

      <div className={styles.divHeader}>

        <div className={styles.divDataHeader}>
          <h3>Sakr</h3>
          <p>Home Designs</p>
        </div>


        <div className={styles.divImg}>
          <Image src={imageLogo} alt="" />
        </div>
      </div>


    </div>
  )
}

export default HeaderPage