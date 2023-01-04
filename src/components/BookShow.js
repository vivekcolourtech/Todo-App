import { useState } from "react";
import BookEdit from "./BookEdit";



function BookShow({ book, onDelete}) {
     const [showEdit, setShowEdit]=useState(false)

    const handleClick = (event) => {
      onDelete(book.id);
    };
    const handleEditClick = () => {
        setShowEdit(!showEdit)
    };
    
    let content = <h3>{book.title}</h3>;
     if (showEdit){
       content = <BookEdit/>;
     } 

  return (
  <div className="book-show">
     <div>{content}</div>
  <div className="actions">
    <button className="edit"   onClick={handleEditClick}>Edit</button>
    <button className="delect" onClick={handleClick}>
      Delect
    </button>
  </div>
  </div>
  );
}


export default BookShow;
