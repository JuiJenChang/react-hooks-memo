import Item from "./Item";

const List = ({ listData, deleteDate, submittingStatus }) => {
  return (
    <div className="list">
      {listData.map((item) => {
        const { id, note, date, time } = item;
        return (
          <Item
            key={id}
            id={id}
            note={note}
            date={date}
            time={time}
            deleteDate={deleteDate}
            submittingStatus={submittingStatus}
          />
        );
      })}
    </div>
  );
};

export default List;
