import React, { useState, useEffect } from "react"
import ColourPicker from "./Components/ColourPicker"
import Button from "./Components/Button"
import Palette from "./Components/Palette"

const Main = () => {
    const [displayPicker, setDisplayPicker] = useState(false)
    const [rgb, setRGB] = useState({ r: 0, g: 0, b: 0 })
    const [hex, setHex] = useState("#000000")
    const [update, setUpdate] = useState("")
    const [colors, updateColors] = useState(
        JSON.parse(localStorage.getItem("key")) || []
    )

    const Add = (hex, rgb) => {
        const newColor = {
            hex: hex.toUpperCase(),
            label: "Label",
            hover: false,
            rgb: rgb.r + " / " + rgb.g + " / " + rgb.b
        }
        let newColors = [...colors, newColor];
        updateColors(newColors);
    };

    const updateLabel = (hex, label) => {
        updateColors(colors.map(c => (c.hex === hex ? { ...c, label } : c)));
    };

    const updateHover = (hex, hover) => {
        updateColors(colors.map(c => (c.hex === hex ? { ...c, hover } : c)));
    };
    const updateColor = (prev, hex, rgb) => {
        updateColors(colors.map(c => (c.hex === prev ? { ...c, hex, rgb: rgb.r + " / " + rgb.g + " / " + rgb.b } : c)));
    };

    const Delete = hex => {
        updateColors(colors.filter(c => c.hex !== hex));
    };

    const handleClick = () => {
        setDisplayPicker(!displayPicker)
    };

    const handleClose = () => {
        setDisplayPicker(false)
        if (update !== "") {
            updateColor(update, hex, rgb)
            setUpdate("")
        }
        else {
            Add(hex, rgb)
        }
    }

    const handleReject = () => {
        setDisplayPicker(false)
    }

    const handleChange = color => {
        setHex(color.hex)
        setRGB(color.rgb)
    };

    useEffect(() => {
        localStorage.setItem("key", JSON.stringify(colors));
    }, [colors]);

    return (
        <React.Fragment>
            <Palette
                colors={colors}
                setUpdate={setUpdate}
                Delete={Delete}
                Add={Add}
                setDisplayPicker={setDisplayPicker}
                updateColors={updateColors}
                updateColor={updateColor}
                updateHover={updateHover}
                updateLabel={updateLabel}
                setHex={setHex}
            />

            <Button
                handleClick={handleClick}
            />

            <ColourPicker
                hex={hex}
                displayPicker={displayPicker}
                handleChange={handleChange}
                handleReject={handleReject}
                handleClose={handleClose}
            />
        </React.Fragment>
    );
}

export default Main;