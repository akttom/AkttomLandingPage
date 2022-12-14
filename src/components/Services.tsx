import { Component } from "react";
import serviceIllustration1 from "../assets/images/serviceIllustration1.png";
import serviceIllustration2 from "../assets/images/serviceIllustration2.png";
import { Styles, createStyles } from "../utils/styles";
import { concatenateClasses } from "../utils/concatenateClasses";
import { statics } from "../utils/statics";
import Button from "./Button";

export default class Customers extends Component {
  render() {
    return (
      <Styles styles={styles}>
        {classes => (
          <section>
            <div className={classes.container}>
              <div className={classes.column} style={{ gap: "36px" }}>
                {/* <h1 className={classes.customersTitle}>Clientes</h1> */}
                <div className={concatenateClasses([classes.column, classes.services])}>

                  <div className={concatenateClasses([classes.row, classes.service])}>
                    <div className={classes.serviceIllustration}>
                      <img src={serviceIllustration1} alt="service illustration 1" />
                    </div>
                    <div className={concatenateClasses([classes.column, classes.serviceDescription])}>
                      <h1 className={classes.serviceDescriptionTitle}>
                        Desenvolvimento de Sistemas
                      </h1>
                      <p className={classes.serviceDescriptionParagraph}>
                        Temos larga experiência de desenvolvimento de sistemas, sendo empresa Microsoft Partner e contando com profissionais certificados em variadas tecnologias.
                      </p>
                      <Button large>Saiba mais</Button>
                    </div>
                  </div>

                  <div className={concatenateClasses([classes.row, classes.service, classes.reverse])}>
                    <div className={classes.serviceIllustration}>
                      <img src={serviceIllustration2} alt="service illustration 2" />
                    </div>
                    <div className={concatenateClasses([classes.column, classes.serviceDescription])}>
                      <h1 className={classes.serviceDescriptionTitle}>
                        Gestão de Projetos
                      </h1>
                      <p className={classes.serviceDescriptionParagraph}>
                        Possuímos profissionais experientes em gestão de projetos, certificados pelo PMI (Project Management Institute) e com participação em projetos diversos, nacional e internacionalmente.
                      </p>
                      <Button large>Saiba mais</Button>
                    </div>
                  </div>

                  <div className={concatenateClasses([classes.row, classes.service])}>
                    <div className={classes.serviceIllustration}>
                      <img src={serviceIllustration1} alt="service illustration 1" />
                    </div>
                    <div className={concatenateClasses([classes.column, classes.serviceDescription])}>
                      <h1 className={classes.serviceDescriptionTitle}>
                        Consultoria de Processos
                      </h1>
                      <p className={classes.serviceDescriptionParagraph}>
                        Conte com a nossa expertise para revisão de processos, implementação de políticas de qualidade e indicadores, entre outros.
                      </p>
                      <Button large>Saiba mais</Button>
                    </div>
                  </div>

                  <div className={concatenateClasses([classes.row, classes.service, classes.reverse])}>
                    <div className={classes.serviceIllustration}>
                      <img src={serviceIllustration2} alt="service illustration 2" />
                    </div>
                    <div className={concatenateClasses([classes.column, classes.serviceDescription])}>
                      <h1 className={classes.serviceDescriptionTitle}>
                        Alocação de Recursos
                      </h1>
                      <p className={classes.serviceDescriptionParagraph}>
                        Fale com a gente que temos as soluções para você. Recrutamos, alocamos e gerenciamos profissionais de acordo com a sua necessidade.
                      </p>
                      <Button large>Saiba mais</Button>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </section>
        )}
      </Styles>
    )
  }
}

const styles = createStyles({
  container: {
    margin: "0 auto",
    maxWidth: "1280px",
    padding: "0 " + statics.size(1),
  },
  column: {
    display: "flex",
    flexDirection: "column",
  },
  row: {
    display: "flex",
    flexDirection: "row",
  },
  services: {
    gap: statics.size(10),
  },
  service: {
    gap: statics.size(10),
  },
  serviceIllustration: {
    flex: 1,
  },
  serviceDescription: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start",
    gap: statics.size(2)
  },
  serviceDescriptionTitle: {
    fontFamily: 'Poppins',
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: "48px",
    lineHeight: "72px",
    margin: 0,
  },
  serviceDescriptionParagraph: {
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "24px",
    lineHeight: "36px",
    color: "rgba(0, 0, 0, 0.7)",
    margin: 0,
  },
  reverse: {
    flexDirection: "row-reverse"
  },
  '@media (max-width: 1280px)': {
    service: {
      flexDirection: "column",
    },
    serviceDescription: {
      marginTop: statics.size(-7),
    }
  },
});

export interface StylesDictionary {
  [Key: string]: React.CSSProperties;
}