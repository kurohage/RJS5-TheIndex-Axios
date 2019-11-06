import React from "react";

function BookRow(props) {
  const book = props.book;
  const author = props.author;
  /*
  let author = props.author.map(
    auth => `${auth.first_name} ${auth.last_name},`
  );
  */

  return (
    <tr>
      <td>{book.title}</td>
      <td>{author}</td>
      <td>
        <button className="btn" style={{ backgroundColor: book.color }} />
      </td>
    </tr>
  );
}

export default BookRow;
