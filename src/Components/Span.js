import React from "react"
import reactCSS from "reactcss"

const Span = props => {

    const styles = reactCSS({
        default: {
            delete: {
                background: "url('https://img.icons8.com/material/24/000000/delete-forever--v1.png')",
                backgroundColor: "lightgrey",
                width: "1.75rem",
                height: "1.75rem",
            },
            update: {
                background: "url('https://img.icons8.com/android/24/000000/plus.png')",
                backgroundColor: "lightgrey",
                width: "1.75rem",
                height: "1.75rem",
            }
        }
    });

    return (
        <span
            style={{
                height: "4rem",
                width: "9rem",
                backgroundColor: `${props.color.hex}`,
                display: "inline-block"
            }}
            onMouseEnter={() => props.updateHover(props.color.hex, true)}
            onMouseLeave={() => props.updateHover(props.color.hex, false)}
        >
            {props.color.hover === true && (
                <div style={{
                    padding: "1rem"
                }}>
                    <button
                        style={styles.delete}
                        onClick={() => props.Delete(props.color.hex)}
                    />{" "}
                    <button
                        style={styles.update}
                        onClick={() => {
                            props.setUpdate(props.color.hex)
                            props.setHex(props.color.hex)
                            props.setDisplayPicker(true)
                        }}
                    />
                </div>
            )}
        </span>
    )
}

export default Span