// import React from "react";
import headshot from "../../assets/2026 photo.jpg"
import styles from "./styles.module.scss"

const Funfacts = () => {

    return (
        <div className={styles.moreContainer}>
            <img className={styles.headshot} src={headshot} alt="headshot" />

            <p>
                I went to the University of Illinois Urbana-Champaign, where I majored in Computer Science.
                <br></br>
                <br></br>
                Right now, I'm based in Chicago, where I dance with a team called <span className={styles.teamName}>named.</span> that my friends and I started in 2026.
                I also like filming and editing videos, and I have a YouTube channel where I post some of my work.
                <ul>
                    <li>Check out <a className={styles.youtubeLink} target="_blank" rel="noreferrer" href="https://www.youtube.com/@sirui_na">my YouTube channel</a>!</li>
                    <ul>
                        <li>My <a className={styles.youtubeLink} target="_blank" href="https://youtu.be/Fppb9e0nZTs?si=UDANf5BTgwp-JDqi">most recent video</a>!</li>
                    </ul>
                    
                </ul>
                <ul>
                    <li>Check out a <a className={styles.youtubeLink} target="_blank" rel="noreferrer" href="https://youtu.be/21B92-dPuVU?si=gny58wtZmHC6c6TS">named. performance</a> :p</li>
                </ul>
            </p>
        </div>
    )
}

export default Funfacts;