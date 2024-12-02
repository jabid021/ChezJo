import { useSelector } from "react-redux";

const Boucherie = () => {
  const message = useSelector((state) => state.message);
  return (
    <div>
      Page boucherie
      <p>Ce message me suit partout depuis le store....</p>
      <p style={styles.redMsg}>{message}</p>
    </div>
  );
};
const styles = {
  redMsg: {
    color: "red",
  },
};
export default Boucherie;
