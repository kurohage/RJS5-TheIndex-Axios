import React from "react";

function BookRow(props) {
  const book = props.book;
  const authorList = book.authors.map(author => (
    <div key={author.id}>{author.name}</div>
  ));
  console.log("Author list: ", authorList);

  return (
    <tr>
      <td>{book.title}</td>
      <td>{authorList}</td>
      <td>
        <button className="btn" style={{ backgroundColor: book.color }} />
      </td>
    </tr>
  );
}

export default BookRow;
