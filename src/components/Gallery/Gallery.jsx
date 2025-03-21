import {useState} from 'react'
import styles from './Gallery.module.css'
import images from '../../data/images.json'
import Image from "../Image/index.js";
import ButtonList from "../ButtonList/index.js";
import MainImage from "../MainImage/index.js";


const firstImage = images.map((image, index) => {
    return {...image, isSelected: index === 0}
})

function Gallery() {
    const[images, setImages] = useState(firstImage)
    const[isSelected, setIsSelected] = useState(images[0])

    function handleOnClick(id) {
        const newImages = images.map(image => {
            if (image.id === id) {
                setIsSelected(image)
                return {...image, isSelected: true}
            } else {
                return {...image, isSelected: false}
            }
        })
        setImages(newImages)
    }

    function prevImage() {
        const currentIndex = images.findIndex(image => image.isSelected)
        const prevIndex = (currentIndex - 1 + images.length) % images.length
        handleOnClick(images[prevIndex].id)
    }

    function randomImage() {
        const randomIndex = Math.floor(Math.random() * images.length)
        handleOnClick(images[randomIndex].id)
    }

    function shuffleImage() {
        const shuffledImages = [...images].sort(() => Math.random() - 0.5)
        setImages(shuffledImages)
    }

    function nextImage() {
        const currentIndex = images.findIndex(image => image.isSelected)
        const prevIndex = (currentIndex + 1) % images.length
        handleOnClick(images[prevIndex].id)
    }

    return (
        <>
            <MainImage selectedImage={isSelected}/>
            <ButtonList
                onPrevImage={prevImage}
                onRandomImage={randomImage}
                onShuffle={shuffleImage}
                onNextImage={nextImage}
            />

            <div className={styles.gallery} key={0}>
                {
                    images.map(image =>
                        <Image key={image.id} image={image} onClick={() => handleOnClick(image.id)}/>
                    )
                }
            </div>
        </>
    )
}

export default Gallery