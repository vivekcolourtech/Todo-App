 import { useState } from "react";

function BookEdit() {
  const [title, setTitle] = useState('');

  const handleChange = (event) => {
     setTitle(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("New title",title)
  }

  return(
   <form className="book-edit">
      <label>Title</label>
      <input className="input" onChange={handleChange}/>
      <button className=" button is-primary">
       Save
      </button>
   </form>
  )
}

export default BookEdit;
