import React from "react"
import reactCSS from "reactcss"

const Button = props => {

    const styles = reactCSS({
        default: {
            button: {
                padding: "1.5rem",
                height: "1.5rem",
                width: "5rem",
                backgroundColor: "lightgrey",
                display: "inline-block",
                cursor: "pointer",
                float: "left",
                margin: "1.5rem 3rem 1.5rem 3rem",
            },
        }
    })

    return (
        <div style={styles.button} onClick={props.handleClick}>
            <img src="https://img.icons8.com/android/24/000000/plus.png" alt="+" />
        </div>
    )

}

export default Button