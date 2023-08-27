// style
import style from "./EventList.module.css";

function Eventlist({ events, handleDelete }) {
  return (
    <div>
      {events.length === 0 && <h3>Not Contetn yet :(</h3>}
      {events.map((event) => {
        return (
          <div className={style["card-list"]} key={event.id}>
            <h2>{event.title}</h2>
            <p>
              {event.location} - {event.date}
            </p>
            <button onClick={() => handleDelete(event.id)}>Delete</button>
          </div>
        );
      })}
    </div>
  );
}

export default Eventlist;
