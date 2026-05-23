function FeedCard(props) {
  return (
    <div style={styles.wrapper}>
      <div style={styles.card}>
        <img src={props.Image} alt="" style={styles.image} />
        <span style={styles.caption}>{props.Caption}</span>
      </div>
    </div>
  );
}

const styles = {
  wrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    padding: "0 16px",
    boxSizing: "border-box",
  },
  card: {
    background: "#fff",
    border: "0.5px solid rgba(0,0,0,0.1)",
    borderRadius: 12,
    overflow: "hidden",
    width: "100%",
    maxWidth: 390,
  },
  image: {
    width: "100%",
    aspectRatio: "4/3",
    objectFit: "cover",
    display: "block",
  },
  caption: {
    display: "block",
    padding: "12px 14px 14px",
    fontSize: 14,
    lineHeight: 1.55,
    color: "#111",
  },
};

export default FeedCard;