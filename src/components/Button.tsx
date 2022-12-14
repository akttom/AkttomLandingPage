import { concatenateClasses } from "../utils/concatenateClasses";
import { statics } from "../utils/statics";
import { createStyles, Styles } from "../utils/styles";

type ButtonProps = {
  children?: any,
  large?: boolean,
  black?: boolean,
  white?: boolean,
}

export default function Button(props: ButtonProps) {
  return (
    <Styles styles={styles}>
      {classes => (
        <button
          className={
            concatenateClasses([
              classes.buttonContainer,
              (props.large ? classes.large : ""),
              (props.black ? classes.black : ""),
              (props.white ? classes.white : ""),
            ])
          }>
          {props.children}
        </button>
      )}
    </Styles >
  )
}


const styles = createStyles({
  buttonContainer: {
    backgroundColor: "#77E7F7",
    border: "none",
    borderRadius: statics.size(0.5),
    color: "black",
    fontFamily: 'Poppins',
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: statics.size(2),
    lineHeight: statics.size(3),
    padding: "0 10px",
    cursor: "pointer",
    '&:hover': {
      backgroundColor: "#6BD0DE"
    },
    '&:active': {
      backgroundColor: "#5FB9C7"
    },
  },
  large: {
    height: statics.size(6),
    padding: "0 47.5px",
  },
  black: {
    backgroundColor: "black",
    color: "white",
    '&:hover': {
      backgroundColor: "#191919"
    },
    '&:active': {
      backgroundColor: "#333333"
    },
  },
  white: {
    backgroundColor: "white",
    color: "black",
    '&:hover': {
      backgroundColor: "#E5E5E5"
    },
    '&:active': {
      backgroundColor: "#CCCCCC"
    },
  }
});

export interface StylesDictionary {
  [Key: string]: React.CSSProperties;
}