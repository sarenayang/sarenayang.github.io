import styles from "./styles.module.scss"
import github from "../../assets/github.svg"
import linkedin from "../../assets/linkedin.svg"
import email from "../../assets/email.svg"

const About = () => {
    return (
        <div className={styles.aboutContainer}>
            <h1>Hi, I'm Sarena!</h1>
            <p className={styles.aboutText}>
                I'm currently a junior at the University of Illinois at Urbana-Champaign 
                studying Computer Science. I'm interested in full-stack development,
                though I'm also 
                interested in data science and machine learning. 
                <br></br>Feel free to reach
                out to me!
            </p>

            <div className={styles.aboutContact}>

                <a href="https://www.github.com/sarenayang" target="_blank">
                    <img 
                        className={styles.aboutImage} 
                        src={github} 
                        alt="github" />
                </a>

                <a href="https://www.linkedin.com/in/sarena-yang-61770721a/" target="_blank">
                    <img 
                        className={styles.aboutImage} 
                        src={linkedin} 
                        alt="linkedin" />
                </a>

                <a href="mailto: sarenay2@illinois.edu">
                    <img 
                        className={styles.aboutImage} 
                        src={email} 
                        alt="email" />
                </a>
            </div>

        </div>
    );
}

export default About;