import React from "react"
import reactCSS from "reactcss"
import Span from "./Span"
import Input from "./Input";

const Palette = props => {
    const styles = reactCSS({
        default: {
            color: {
                float: "left",
                margin: "0.5rem"
            },
            label: {
                fontSize: "0.80rem"
            },
        }
    });
    return (
        <React.Fragment>
            {
                props.colors.map(color => (
                    <div key={color.hex} style={styles.color}>
                        <Input
                            color={color}
                            updateLabel={props.updateLabel}
                        />
                        <br />
                        <Span
                            color={color}
                            updateHover={props.updateHover}
                            Delete={props.Delete}
                            setUpdate={props.setUpdate}
                            setHex={props.setHex}
                            setDisplayPicker={props.setDisplayPicker}
                        />
                        <br />
                        <label style={styles.label}>{color.hex}</label>
                        <br />
                        <label style={styles.label}>{color.rgb}</label>
                        <br />
                        <label style={styles.label} >cmyk</label>
                    </div>
                ))
            }
        </React.Fragment>
    )
}

export default Palette