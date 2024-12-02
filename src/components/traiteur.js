import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import React, { useState } from "react";
//import { updateMessage } from "../redux/store";

const Traiteur = () => {
  const [newMessage, setNewMessage] = useState("");

  const dispatch = useDispatch();

  const submitMessageToStore = (e) => {
    e.preventDefault();

    //dispatch(updateMessage(newMessage));
    dispatch({ type: "CHANGE_MESSAGE", payload: newMessage });
    setNewMessage("");
  };

  const writeMessage = (e) => {
    setNewMessage(e.target.value);
  };

  const message = useSelector((state) => state.message);
  return (
    <div>
      Page boucherie
      <p>OH MON DIEU, ICI AUSSI IL ME SUIT....</p>
      <p style={styles.blueMsg}>{message}</p>
      <hr />
      Changer le message du store :<br />
      <form onSubmit={submitMessageToStore}>
        <input
          required
          type="text"
          value={newMessage}
          onChange={writeMessage}
          placeholder="Saisir un nouveau message pour le store"
        />
        <br />
        <input type="submit" value="Changer le store" />
      </form>
    </div>
  );
};
const styles = {
  blueMsg: {
    color: "blue",
  },
};
export default Traiteur;
