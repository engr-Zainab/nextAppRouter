import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>@2025 lamamia. All Rights reserved</div>
      <div className={styles.social}>
        <Image
          src="/1.png"
          className={styles.icon}
          alt="Lama Dev Facebook"
          height={15}
          width={15}
        />
        <Image
          src="/2.png"
          className={styles.icon}
          alt="Lama Dev Instagram"
          height={15}
          width={15}
        />
        <Image
          src="/3.png"
          className={styles.icon}
          alt="Lama Dev Twitter"
          height={15}
          width={15}
        />
        <Image
          src="/4.png"
          className={styles.icon}
          alt="Lama Dev Youtube"
          height={15}
          width={15}
        />
      </div>
    </div>
  );
};

export default Footer;
