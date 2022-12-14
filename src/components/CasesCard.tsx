type CasesCardProps = {
  title?: string,
  description?: string,
  src: any,
}

export default function Cases(props: CasesCardProps) {
  return (
    <div style={{ ...styles.column, justifyContent: "center" }}>
      <div style={{ ...styles.column, ...styles.casesContent }}>
        <img src={props.src} alt="image" />
        <h1 style={styles.casesCardTitle}>{props.title}</h1>
        <p style={styles.casesCardParagraph}>{props.description}</p>
      </div>
    </div>
  )
}

const styles: StylesDictionary = {
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
    gap: "36px",
    flexBasis: "58%",
  },
  casesCardTitle: {
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: "36px",
    lineHeight: "45px",
    margin: 0,
    flex: 0,
  },
  casesCardParagraph: {
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "18px",
    lineHeight: "27px",
    textAlign: "center",
    margin: 0,
    flex: 0,
  }
}

export interface StylesDictionary {
  [Key: string]: React.CSSProperties;
}