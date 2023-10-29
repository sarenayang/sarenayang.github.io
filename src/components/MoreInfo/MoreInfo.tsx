// import React from "react";
import headshot from "../../assets/headshot.jpg"
import styles from "./styles.module.scss"

const Funfacts = () => {

    return (
        <div className={styles.moreContainer}>
            <img className={styles.headshot} src={headshot} alt="headshot" />

            <p>
                I'm on the web team for HackIllinois, UIUC's student-run hackathon, as well as the infrastructure committee for Woman in Computer Science (WCS).
                <br></br><br></br>
                In my freetime, I enjoy playing the guitar, writing stories,
                and dancing.
                I also film/edit videos for my dance team Truth and Beauty, and UIUC's Asian American Association (AAA).
                <ul>
                    <li>Check out some of my team's <a target="_blank" href="https://www.youtube.com/@TNBdance/videos">dance covers</a></li>
                    <ul>
                        <li>I filmed <a target="_blank" href="https://youtu.be/Cimxjr3snuA?si=DAjoh8GYpZpzoheE">this cover</a></li>
                        <li>And edited <a target="_blank" href="https://youtu.be/8oVC3hLpB4M?si=GPwS3R4pprO51Hnm">this one!</a></li>
                    </ul>
                    
                </ul>
            </p>
        </div>
    )
}

export default Funfacts;