  import './App.css';
  import { useState, Fragment } from 'react';
  import Title from './components/title';

function App() {
  const [showcontent, setShowContent] = useState(true)
  const [events, setEvents] = useState([
    {title: "akhror's birthday party", id: 1},
    {title: "doniyor's live stream", id: 2},
    {title: "match: manchester united vs barcelona", id: 3}
  ])

  
  //Delete items

  const handleDelete = (id)=>{
    setEvents((prev)=>{
      return prev.filter((event)=>{
        return event.id !== id
      })
    })
  }

  return (
    <div className="App">
      <Title title="Hayotillo's Kingdim Events" subtitle="All events will be here"/>
      <br/>
      <Title title="Islombek's Kingdim Events" subtitle="All events will be here"/>
      <br/>
     {showcontent && <button onClick={() => setShowContent(false)}>Hide Content</button>}
     {!showcontent && <button onClick={() => setShowContent(true)}>Show Content</button>}

     {showcontent && <div>
      {events.length === 0 && <h3>Not Contetn yet :(</h3>}
      {
        events.map((event) => {
          return (
            <Fragment key={event.id}>
              <h2>{event.title}</h2>
              <button onClick={()=>handleDelete(event.id)}>Delete</button>
            </Fragment>
          )
         })
      }
      </div>
      }
    </div>
  );
}

export default App;
