import React, { useState } from "react";
import "./EditModal.css";

const EditModal = (props) => {
  //   console.log(props);
  let [item, setItem] = useState(props.editTodo);

  function handleEditInput(e) {
    // console.log(e.target.value);
    let newObj = { ...item };
    newObj.task = e.target.value;
    setItem(newObj);
  }

  function handleSave() {
    // console.log(item);
    props.handleSaveTask(item);
  }
  return (
    <div className="main-modal">
      <div className="inner-modal">
        <h2>Change</h2>
        <input
          onChange={handleEditInput}
          type="text"
          value={item.task}
          className="inp-edit"
        />
        <button onClick={handleSave}>Save</button>
        <button onClick={props.handleCloseModal}>Close</button>
      </div>
    </div>
  );
};

export default EditModal;
