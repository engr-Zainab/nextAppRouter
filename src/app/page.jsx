import Image from "next/image";
import styles from "./page.module.css";
import Button from "../components/Button/Button";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>
          Better design for your digital products.
        </h1>
        <p className={styles.desc}>
          Turning your Idea into Reality. We gring together the teams from the
          global tech Industry.
        </p>
        <Button url="/portfolio" text="See Our Works" />
      </div>
      <div className={styles.item}>
        <Image
          src="/hero.png"
          className={styles.img}
          alt="hero img"
          height={500}
          width={500}
        />
      </div>
    </div>
  );
}
