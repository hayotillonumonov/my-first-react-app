import './App.css';
import { useState } from 'react';

function App() {
  const [name, setName] = useState('Hayotillo')
  const [showcontent, setShowContent] = useState(true)
  const [events, setEvents] = useState([
    {title: "akhror's birthday party", id: 1},
    {title: "doniyor's live stream", id: 2},
    {title: "match: manchester united vs barcelona", id: 3}
  ])

  const handleClick = ()=>{
    setName('Doniyor')
  }

  //Delete items

  const handleDelete = (id)=>{
    setEvents((prev)=>{
      return prev.filter((event)=>{
        return event.id !== id
      })
    })
  }


  // Show and Hide content

  // const showHideContent = ()=>{
  //   setShowContent(false)
    
  // }

  return (
    <div className="App">
     <h1>My name is: {name}</h1>
     <button onClick={handleClick}>Change name</button>
     <hr/>
     <hr/>
     {showcontent && <button onClick={() => setShowContent(false)}>Hide Content</button>}
     {!showcontent && <button onClick={() => setShowContent(true)}>Show Content</button>}

     {showcontent && <div>
      {events.length === 0 && <h3>Not Contetn yet :(</h3>}
      {
        events.map((event) => {
          return (
            <div key={event.id}>
              <h2>{event.title}</h2>
              <button onClick={()=>handleDelete(event.id)}>Delete</button>
            </div>
          )
         })
      }
      </div>
      }
    </div>
  );
}

export default App;
