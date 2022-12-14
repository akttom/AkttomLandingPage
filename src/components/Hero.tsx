import { Component } from "react";
import heroBackground from '../assets/images/heroBackground.png';
import { concatenateClasses } from "../utils/concatenateClasses";
import { statics } from "../utils/statics";
import { createStyles, Styles } from "../utils/styles";
import Button from "./Button";

export default class App extends Component {
  render() {
    return (
      <Styles styles={styles}>
        {classes => (
          <section className={classes.hero}>
            {/* <img className={classes.heroBackground} src={heroBackground} alt="Logo" /> */}
            <div className={concatenateClasses([classes.container, classes.row])} style={{ height: "100%" }}>
              <div className={concatenateClasses([classes.column, classes.heroContent])}>
                <h1 className={classes.heroContentTitle}>O seu crescimento<br />é o nosso objetivo</h1>
                <p className={classes.heroContentParagraph}>Além de sistemas próprios de grande sucesso no mercado que atuam, oferecemos também desenvolvimento de sistemas, gestão de projetos, consultoria em processos e muito mais.</p>
                <Button large>Conte-nos sobre sua ideia</Button>
              </div>
            </div>
          </section>
        )}
      </Styles>
    );
  }
}

const styles = createStyles({
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
  hero: {
    height: "calc(100vh - 120px)",
    backgroundColor: "black",
    backgroundImage: `url(${heroBackground})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
  },
  heroContent: {
    height: "100%",
    color: "white",
    alignItems: "flex-start",
    justifyContent: "center",
    gap: "36px",
    flexBasis: statics.column(5),
    minHeight: "503px",
    flexShrink: 0,
  },
  '@media (max-width: 1280px)': {
    hero: {
      backgroundImage: "unset",
    },
    heroContent: {
      flexBasis: statics.column(6),
    }
  },
  '@media (max-width: 1100px)': {
    hero: {
      backgroundImage: "unset",
    },
    heroContent: {
      flexBasis: statics.column(8),
    }
  },
  '@media (max-width: 800px)': {
    heroContent: {
      flexBasis: statics.column(10),
    }
  },
  '@media (max-width: 650px)': {
    heroContent: {
      flexBasis: statics.column(12),
    }
  },
  heroContentTitle: {
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: "48px",
    lineHeight: "72px",
    textTransform: "uppercase",
    margin: 0,
    flex: 0,
  },
  heroContentParagraph: {
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "18px",
    lineHeight: "27px",
    color: "rgba(255, 255, 255, 0.8)",
    margin: 0,
    flex: 0,
  }
});

export interface StylesDictionary {
  [Key: string]: React.CSSProperties;
}