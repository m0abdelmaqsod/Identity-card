import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter, FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa6";
import { CiLocationOn } from "react-icons/ci";
import styles from './styles/linkPages.module.css';
import Link from "next/link";


const LinkPages = () => {
    return (
        <div className={styles.linkPages}>

            {/* =========  Facebook  ========= */}
            <div className={styles.divLink}>
                <div className={styles.divLinkIcon}>
                    <div className={styles.icon}>
                        <FaFacebookF />
                    </div>

                    <p>Facebook</p>
                </div>

                <div className={styles.namePages}>
                    <Link href="https://www.facebook.com/moabdelmaqsod/?notif_id=1729472823349928&notif_t=page_user_activity&ref=notif">Sakr-Home Designs</Link>

                </div>
            </div>



            {/* =========  Instagram  ========= */}
            <div className={styles.divLink}>
                <div className={styles.divLinkIcon}>
                    <div className={styles.icon}>
                        <FaInstagram />
                    </div>

                    <p>Instagram</p>
                </div>

                <div className={styles.namePages}>
                    <Link href="">Sakr-Home Designs</Link>
                </div>
            </div>



            {/* =========  Tiktok  ========= */}
            <div className={styles.divLink}>
                <div className={styles.divLinkIcon}>
                    <div className={styles.icon}>
                        <FaTiktok />
                    </div>

                    <p>Tiktok</p>
                </div>

                <div className={styles.namePages}>
                    <Link href="">Sakr-Home Designs</Link>
                </div>
            </div>



            {/* =========  Twitter  ========= */}
            <div className={styles.divLink}>
                <div className={styles.divLinkIcon}>
                    <div className={styles.icon}>
                        <FaXTwitter />
                    </div>

                    <p>Twitter</p>
                </div>

                <div className={styles.namePages}>
                    <Link href="">Sakr-Home Designs</Link>
                </div>
            </div>



            {/* =========  Whatsapp  ========= */}
            <div className={styles.divLink}>
                <div className={styles.divLinkIcon}>
                    <div className={styles.icon}>
                        <FaWhatsapp />
                    </div>

                    <p>Whatsapp</p>
                </div>

                <div className={styles.namePages}>
                    <Link href="tel: 01220528581">01220528581</Link>

                    <Link href="tel: 01220528581">01220528581</Link>
                </div>
            </div>


            {/* =========  Location  ========= */}
            <div className={styles.divLink}>
                <div className={styles.divLinkIcon}>
                    <div className={styles.icon}>
                        <CiLocationOn />
                    </div>

                    <p>Location</p>
                </div>

                <div className={styles.namePages}>
                    <Link href="https://maps.app.goo.gl/BuGYqED4nACmuo7y9">Egypt, Mansoura, Badawi</Link>
                </div>
            </div>






        </div>
    )
}

export default LinkPages