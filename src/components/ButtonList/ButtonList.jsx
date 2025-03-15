import { useState } from 'react'
import styles from './ButtonList.module.css'
import Button from '../Button';

function ButtonList() {
    return (
        <>
            <div className={styles.buttonList}>
                <Button type="left" />
                <Button type="left" />
                <Button type="left" />
                <Button type="left" />
            </div>
        </>
    )
}

export default ButtonList;