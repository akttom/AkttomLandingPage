import { Component, ReactElement } from "react";
import Hero from "../components/Hero";
import Header from "../components/Header";
import Customers from "../components/Customers";
import Cases from "../components/Cases";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";
import { statics } from "../utils/statics";
import { createStyles, Styles } from "../utils/styles";
import Services from "../components/Services";

export default class App extends Component {
  render() {
    return (
      <Styles styles={styles}>
        {classes => (
          <main className={classes.main}>
            <section>
              <Header />
              <Hero />
            </section>
            <Customers />
            <Cases />
            <ContactUs />
            <Services />
            <Footer />
          </main>
        )}
      </Styles>
    );
  }
}

const styles = createStyles({
  main: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    gap: "70px",
    backgroundColor: "#F3F3F0",
  },
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
});

export interface StylesDictionary {
  [Key: string]: React.CSSProperties;
}