"use client";

import React, { useEffect } from "react";
import styles from "./page.module.css";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const Login = () => {
  const { status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "authenticated") {
      router.push("/dashboard");
    }
  }, [status, router]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = e.target[0].value;
    const password = e.target[1].value;

    await signIn("credentials", {
      email,
      password,
      redirect: false,
    });
  };

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Email"
          required
          className={styles.input}
        />
        <input
          type="password"
          placeholder="Password"
          required
          className={styles.input}
        />

        <button className={styles.button}>Login</button>
      </form>

      <button className={styles.googlebutton} onClick={() => signIn("google")}>
        Login with Google
      </button>
    </div>
  );
};

export default Login;
