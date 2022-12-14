import { Component } from "react";
import logo from '../assets/images/logo.svg';

export default class App extends Component {
  render() {
    return (
      <header style={styles.header}>
        <img style={styles.logo} src={logo} alt="Logo" />
      </header>
    );
  }
}

const styles: StylesDictionary = {
  header: {
    height: "120px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: "290px",
  }
}

export interface StylesDictionary {
  [Key: string]: React.CSSProperties;
}