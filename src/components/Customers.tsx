import { Component } from "react";
import ibope from "../assets/images/ibope.svg";
import sbp from "../assets/images/sbp.png";
import levycam from "../assets/images/levycam.png";
import thespecialist from "../assets/images/thespecialist.png";

export default class Customers extends Component {
  render() {
    return (
      <section>
        <div style={styles.container}>
          <div style={{ ...styles.column, gap: "36px" }}>
            {/* <h1 style={styles.customersTitle}>Clientes</h1> */}
            <div style={styles.divider} />
            <div style={styles.customers}>
              <img style={styles.customer} src={ibope} alt="ibope" />
              <img style={styles.customer} src={sbp} alt="sbp" />
              <img style={styles.customer} src={levycam} alt="levycam" />
              <img style={styles.customer} src={thespecialist} alt="thespecialist" />
            </div>
            <div style={styles.divider} />
          </div>
        </div>
      </section>
    )
  }
}

const styles: StylesDictionary = {
  container: {
    margin: "0 auto",
    maxWidth: "1280px",
  },
  column: {
    display: "flex",
    flexDirection: "column",
  },
  row: {
    display: "flex",
    flexDirection: "row",
  },
  customersTitle: {
    textAlign: "center",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: "36px",
    lineHeight: "72px",
    textTransform: "uppercase",
    margin: 0,
    flex: 0,
  },
  divider: {
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    height: "1px",
    alignSelf: "stretch"
  },
  customers: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between"
  },
  customer: {
    width: "198px"
  }
}

export interface StylesDictionary {
  [Key: string]: React.CSSProperties;
}