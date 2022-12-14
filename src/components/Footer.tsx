import { Component } from "react";
import { statics } from "../utils/statics";
import Button from "./Button";
import logo from '../assets/images/logoWhite.svg';
import footerBackground from '../assets/images/footerBackground.png';

export default class Customers extends Component {
  render() {
    return (
      <footer>
        <div style={styles.container}>
          <div style={styles.footerBox}>
            <span>Glorioso no passado,</span>
            <span style={{ marginBottom: statics.size(3) }}>Tech no futuro.</span>
            <Button large white>Entre em contato</Button>
          </div>
        </div>
        <div style={{ ...styles.footerBackground }}>
          <div style={{ ...styles.column, ...styles.container }}>
            <div style={{ ...styles.row, ...styles.footer }}>
              <div style={{ ...styles.column, ...styles.footerFirstColumn }}>
                <img style={styles.logo} src={logo} alt="Logo" />
                <p style={styles.footerFirstColumnParagraph}>
                  Clientes para nós da AKTTOM são mais que clientes.
                  São parceiros e nossa maior referência de qualidade e eficiência
                </p>
              </div>
              <div style={{ flex: 1 }} />
            </div>
            <div style={styles.divider} />
            <div style={styles.copyright}>
              © Copyright {new Date().getFullYear()}. Todos os direitos reservados.
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

const styles: StylesDictionary = {
  container: {
    margin: "0 auto",
    maxWidth: "1280px",
    padding: statics.size(1),
  },
  column: {
    display: "flex",
    flexDirection: "column",
  },
  row: {
    display: "flex",
    flexDirection: "row",
  },
  footerBackground: {
    backgroundColor: "#17255A",
    paddingTop: statics.size(14),
    // paddingBottom: statics.size(4),
    minHeight: statics.size(20),
  },
  footerBox: {
    backgroundColor: "#2A50D3",
    backgroundImage: `url(${footerBackground})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    color: "white",
    minHeight: statics.size(30),
    borderRadius: statics.size(1),
    marginBottom: statics.size(-10),
    zIndex: 10,
    position: "relative",
    padding: statics.size(2) + " " + statics.size(10),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: "36px",
    lineHeight: "72px",
    boxShadow: "0px 5px 35px rgba(0, 0, 0, 0.35)"
  },
  footer: {
    flex: 1,
  },
  footerFirstColumn: {
    flexBasis: statics.column(3),
  },
  logo: {
    width: "70%"
  },
  footerFirstColumnParagraph: {
    fontSize: statics.size(1.5),
    color: "rgba(255, 255, 255, 0.7)",
    lineHeight: 1.5
  },
  divider: {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    height: "1px",
    alignSelf: "stretch"
  },
  copyright: {
    color: "white",
    margin: statics.size(1.5),
    textAlign: "center"
  }
}

export interface StylesDictionary {
  [Key: string]: React.CSSProperties;
}