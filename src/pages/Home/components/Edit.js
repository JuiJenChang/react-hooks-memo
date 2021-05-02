import { useState } from "react";
import { v4 } from "uuid";

const Edit = ({ add, submittingStatus }) => {
  const [note, setNote] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const noteChange = (e) => {
    setNote(e.target.value);
  };
  const dateChange = (e) => {
    setDate(e.target.value);
  };
  const timeChange = (e) => {
    setTime(e.target.value);
  };

  const addItem = () => {
    submittingStatus.current = true
    add((prevData) => {
      return [
        {
          id: v4(),
          note,
          date,
          time,
        },
        ...prevData,
      ];
    });
    setNote("")
    setDate("")
    setTime("")
  };
  return (
    <div>
      <h1>MEMO</h1>
      <p>Todo : </p>
      <input type="text" value={note} onChange={noteChange} />
      <p>Date: </p>
      <input type="date" value={date} onChange={dateChange} />
      <p>Time : </p>
      <input type="time" value={time} onChange={timeChange} />
      <button onClick={addItem} className="add">ADD</button>
    </div>
  );
};

export default Edit;
