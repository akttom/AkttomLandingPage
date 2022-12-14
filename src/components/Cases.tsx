import { Component } from "react";
import CasesCard from "./CasesCard";
import li_logo from "../assets/images/li_logo.svg";
import sgv_logo from "../assets/images/sgv_logo.svg";
import { statics } from "../utils/statics";

export default class Cases extends Component {
  render() {
    return (
      <section>
        <div style={{ ...styles.container, ...styles.row, justifyContent: "center" }}>
          <div style={{ ...styles.column, ...styles.casesContent }}>
            <h1 style={styles.casesTitle}>Cases de sucesso</h1>
            <p style={styles.casesParagraph}>Projetos memoráveis que fazem parte da brilhante tragetória de uma software house focada em utilizar as melhores e mais modernas tecnologias sem abrir mão da solidez e consistência.</p>
          </div>
        </div>
        <div style={{ ...styles.container, ...styles.row, justifyContent: "space-between", marginTop: "84px" }}>
          <div style={{ flexBasis: "33.33%" }}>
            <CasesCard
              src={li_logo}
              title="Laudo&Imagem"
              description="Desenvolvimento de sistemas sempre foi nosso foco e nossa paixão. Isso desde quando iniciamos, e com pouco tempo de vida, conseguimos nosso primeiro campeão de vendas e sucesso de mercado, o sistema Laudo Imagem." />
          </div>
          <div style={{ flexBasis: "33.33%" }}>
            <CasesCard
              src={sgv_logo}
              title="Sistema SVG"
              description="Sistema de gestão de vendas desenvolvido para um de nossos clientes, o SGV é mais um caso de sucesso da nossa equipe de desenvolvimento de sistemas. O sistema possui variados módulos, voltados ao conceito de gestão de vendas." />
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
  },
  casesContent: {
    height: "100%",
    color: "black",
    alignItems: "center",
    justifyContent: "center",
    gap: statics.size(3),
    flexBasis: "58%",
  },
  casesTitle: {
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: statics.size(4),
    lineHeight: statics.size(6),
    textTransform: "uppercase",
    margin: 0,
    flex: 0,
  },
  casesParagraph: {
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: statics.size(1.5),
    lineHeight: "27px",
    color: "rgba(0, 0, 0, 0.8)",
    margin: 0,
    textAlign: "center",
    flex: 0,
  }
}

export interface StylesDictionary {
  [Key: string]: React.CSSProperties;
}