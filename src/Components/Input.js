import React from "react"
import reactCSS from "reactcss"

const Input = props => {

    const styles = reactCSS({
        default: {
            input: {
                textAlign: "center",
                border: "transparent",
                color: "black",
                fontSize: "1rem"
            }
        }
    })

    return (
        <input
            value={props.color.label}
            style={styles.input}
            onChange={e => props.updateLabel(props.color.hex, e.target.value)}
        />
    )
}

export default Input