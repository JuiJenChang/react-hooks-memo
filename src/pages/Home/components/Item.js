const Item = ({ id, note, date, time, deleteDate, submittingStatus }) => {
  const deleteItem = () => {
    submittingStatus.current = true
    deleteDate((prevData) => {
      return prevData.filter((item) => item.id !== id);
    });
  };

  return (
    <div className="item">
      <div>
        <p>{note}</p>
        <p>{`${date} ${time}`}</p>
      </div>
      <button onClick={deleteItem} className="remove">REMOVE</button>
    </div>
  );
};

export default Item;
