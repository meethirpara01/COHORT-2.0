import { useState } from "react";

const App = () => {

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Submited");
    console.log(firstName);
    // console.log(firstName);
    
    let oldUsers = [...allUsers];
    oldUsers.push(firstName);
    setallUsers(oldUsers);
    console.log(oldUsers);

    setFirstName("");
  }

  const [firstName, setFirstName] = useState("");

  const [allUsers, setallUsers] = useState([]);
  return (
    <div>
      <form onSubmit={(e) => {
        submitHandler(e);
      }}>
        <input required type="text" value={firstName} onChange={(e) => {setFirstName(e.target.value)}} placeholder='Enter Name' />
        <button>Submit</button>
      </form>

      {allUsers.map((elem, idx) => {
        return <h3 key={idx}>{elem}</h3>
      })}
    </div>
  )
}

export default App