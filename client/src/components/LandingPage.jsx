import React from "react";
import { Link } from "react-router-dom";
import styles from "../estilos/LandingPage.module.css";

export default function () {
    return (
        <div className={styles.landing}>
            <div className={styles.title}>
            <h1>Welcome</h1>
            <Link to="/home">
                <button>Get in</button>
            </Link>
            </div> 
        </div>
    )
}
