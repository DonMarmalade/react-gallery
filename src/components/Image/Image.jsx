import styles from './Image.module.css'

function Image({image, onClick}) {
    let CSSSelectedStyle = image.isSelected && styles.selected

    return (
        <>
            <img
                className={`${styles.image} ${CSSSelectedStyle}`}
                key={image.key}
                alt={image.title}
                src={image.url}
                onClick={onClick}
            />
        </>
    )
}

export default Image