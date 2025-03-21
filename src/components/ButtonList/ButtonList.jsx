import {useState} from 'react'
import styles from './ButtonList.module.css'
import Button from '../Button';

function ButtonList({onPrevImage, onNextImage, onRandomImage, onShuffle}) {
    return (
        <>
            <div className={styles.buttonList}>
                <Button type="left" onClick={onPrevImage}/>
                <Button type="random" onClick={onRandomImage}/>
                <Button type="shuffle" onClick={onShuffle}/>
                <Button type="right" onClick={onNextImage}/>
            </div>
        </>
    )
}

export default ButtonList;