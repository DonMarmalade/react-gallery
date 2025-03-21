import styles from './MainImage.module.css'
import audios from '../../data/audios.json'
import {useState} from "react";

function MainImage({selectedImage}) {
    const[sound, setSound] = useState(audios[0])

    function playSound() {
        const randomAudioIndex = Math.floor(Math.random() * audios.length)
        setSound(audios[randomAudioIndex])

        // Dacă și vei să auzi multe sunete stranii..
        // new Audio(sound.url).play();
    }

    return (
        <div className={styles.container} onClick={playSound}>
            <img
                className={`${styles.image}`}
                key={selectedImage.key}
                alt={selectedImage.title}
                src={selectedImage.url}
            />
        </div>
    )
}

export default MainImage