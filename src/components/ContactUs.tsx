import { Component } from "react";
import "./ContactUs.css";
import Grid1 from "../assets/images/grid_1.png";
import Grid2 from "../assets/images/grid_2.png";
import Grid3 from "../assets/images/grid_3.png";
import Grid4 from "../assets/images/grid_4.png";
import Grid5 from "../assets/images/grid_5.png";
import Grid6 from "../assets/images/grid_6.png";
import Grid7 from "../assets/images/grid_7.png";
import Button from "./Button";
import { statics } from "../utils/statics";

export default class Customers extends Component {
  render() {
    return (
      <section>
        <div style={styles.container}>

          <div className="grid-container">
            <div className="topLeft">
              <img src={Grid1} alt="grid 1" />
            </div>
            <div className="topMiddleLeft">
              <img src={Grid2} alt="grid 2" />
            </div>
            <div className="topCenter">
              <img src={Grid3} alt="grid 3" />
            </div>
            <div className="topRight">
              <img src={Grid4} alt="grid 4" />
            </div>
            <div className="middle">
              <div className="whatsappTitle">
                <div>
                  tire suas dúvidas pelo <strong>whatsapp</strong>
                </div>
                <Button black large>Enviar mensagem</Button>
              </div>
              <img src={Grid7} alt="grid 7" style={{ alignSelf: "flex-end" }} />
            </div>
            <div className="bottomLeft">
              <img src={Grid5} alt="grid 5" />
            </div>
            <div className="bottomRight">
              <img src={Grid6} alt="grid 6" />
            </div>
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
    padding: statics.size(1),
  },
  column: {
    display: "flex",
    flexDirection: "column",
  },
  row: {
    display: "flex",
    flexDirection: "row",
  }
}

export interface StylesDictionary {
  [Key: string]: React.CSSProperties;
}