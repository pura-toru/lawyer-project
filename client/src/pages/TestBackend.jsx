/* Ini gw lagi belajar makanny make books coba ntar lu sesuain
 * Cara run backend(Make sure lu run di bash):
 * 1) cd ke folder server.
 * 2) . .venv/bin/activate
 * 3) flask run --debug 
 * Kalo bingung liat https://flask.palletsprojects.com/en/stable/installation/
 */
import React, { useState, useEffect } from 'react';

// Implement async - https://www.bezkoder.com/react-fetch-example/
const TestBackend = () => {
  const bookApi = 'http://localhost:5000/api/books';

  const [books,setBooks] = useState([]);
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  useEffect(() => {
    fetch(bookApi)
      .then((res) => res.json())
      .then((data) => setBooks(data))
      .catch(err => console.log(err));
  }, []);

// Ini buat post, Habis lu klik submit harus refresh baru nongol(Kalo bisa lu implemen async biar nongol). Btw g ke store ke api jadi kalo servernya ke restart yang lu udah submit ilang. 
  const addBook = () => {
    fetch(bookApi, {
      method: 'post',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: books.length + 1,
        title,
        author
      }) ,
    })
      .then((res) => {
        alert(res.data.message);
        setBooks([...books, { id: books.length + 1, title, author }]);
        setTitle('');
        setAuthor('');
      })
      .catch(err => console.log(err));
  }

  return(
    <div>
      <div>
        {books.map((book) => {
          return(
            <div>
              <p>{book.title}</p>
              <p>{book.author}</p>
            </div>
          );
        })} 
      </div>
      <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
      <input type="text" placeholder="Author" value={author} onChange={(e) => setAuthor(e.target.value)} />
      <button onClick={addBook}>Add Book</button>
    </div>
  )
}

export default TestBackend;
