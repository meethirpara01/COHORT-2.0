import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

const App = () => {

  const [notes, setNotes] = useState([]);

  function fetchNotes() {
    axios.get("http://localhost:3000/api/notes")
      .then(res => {
        setNotes(res.data.notes);
      })
  }

  useEffect(() => {
    fetchNotes();
  }, []);

  function handelSubmit(e) {
    e.preventDefault();
    // console.log(e.target.elements);

    const { title, description } = e.target.elements;
    console.log(title.value, description.value);

    axios.post("http://localhost:3000/api/notes", {
      title: title.value,
      description: description.value
    })
      .then((res) => {
        console.log(res.data);
        fetchNotes();
      })

    title.value = "";
    description.value = "";
  }

  function handelDelete(noteId) {
    axios.delete(`http://localhost:3000/api/notes/${noteId}`)
      .then((res) => {
        console.log(res.data);
        fetchNotes();
      })
  }

  function handelUpdate(noteId) {
    const description = prompt("Enter Description");
    axios.patch(`http://localhost:3000/api/notes/${noteId}`, {
      description: description
    })
      .then((res) => {
        console.log(res.data);
        fetchNotes();
      })
  }

  return (
    <>
      <form className="note-create-form" onSubmit={handelSubmit}>
        <input name="title" type="text" placeholder="Enetr Note" />
        <input name="description" type="text" placeholder="Enter Description" />
        <button>Create note</button>
      </form>

      <div className="notes">
        {
          notes.map((note, idx) => {
            return <div key={idx} className="note">
              <h1>{note.title}</h1>
              <p>{note.description}</p>
              <button onClick={() => { handelUpdate(note._id) }}>Update</button>
              <button onClick={() => { handelDelete(note._id) }}>Delete</button>
            </div>
          })
        }
      </div>
    </>
  )
}

export default App;