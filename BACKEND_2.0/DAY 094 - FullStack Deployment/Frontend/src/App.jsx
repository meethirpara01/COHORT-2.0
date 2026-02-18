import { useState } from "react"
import axios from "axios";

const App = () => {

  axios.get('http://localhost:3000/api/notes')
  .then((res) => {
    // console.log(res);
    setNotes(res.data.notes);
  });

  const [notes, setNotes] = useState([
    {
      title:"test title",
      description: "test description"
    },
    {
      title:"test title",
      description: "test description"
    },
    {
      title:"test title",
      description: "test description"
    },
    {
      title:"test title",
      description: "test description"
    }
  ])
  return (
    <>
    <form>
      <input type="text" />
      <input type="text" />
      <button>Create note</button>
    </form>
    <div className="notes">
      {
        notes.map((note) => {
          return <div className="note">
            <h1>{note.title}</h1>
            <p>{note.description}</p>
          </div>
        })
      }
    </div>
    </>
  )
}

export default App;