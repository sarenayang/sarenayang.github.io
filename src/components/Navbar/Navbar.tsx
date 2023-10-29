import styles from "./styles.module.scss";
import { useState, useEffect } from 'react';
import Resume from "../../assets/Sarena Yang Resume.pdf";
// import React from "react";

const Navbar = () => {


    const [show, setShow] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);

    const controlNavbar = () => {
        if (typeof window !== 'undefined') { 
            if (window.scrollY > lastScrollY) { // if scroll down hide the navbar
                setShow(true); 
            } else { // if scroll up show the navbar
                setShow(false);  
            }

        // remember current page location to use in the next move
        setLastScrollY(window.scrollY); 
        }
    };

    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', controlNavbar);

            // cleanup function
            return () => {
                window.removeEventListener('scroll', controlNavbar);
            };
        }
    }, [lastScrollY]);
    return (
            <nav className={`${styles.active} ${show && styles.hidden}`}>

                <a href="/">Home</a>
                <a href={Resume}>Resume</a>
                {/* <a href="/">Projects</a> */}
            </nav>
            
    )
}

export default Navbar;