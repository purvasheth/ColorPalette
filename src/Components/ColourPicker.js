import React from "react";
import { PhotoshopPicker } from "react-color";
import reactCSS from "reactcss";

const ColourPicker = (props) => {
  const styles = reactCSS({
    default: {
      popover: {
        position: "sticky",
        float: "right",
      },
    },
  });
  return (
    <React.Fragment>
      {props.displayPicker && (
        <div style={styles.popover}>
          <PhotoshopPicker
            color={props.hex}
            onChangeComplete={props.handleChange}
            onAccept={props.handleClose}
            onCancel={props.handleReject}
          />
        </div>
      )}
    </React.Fragment>
  );
};
export default ColourPicker;
