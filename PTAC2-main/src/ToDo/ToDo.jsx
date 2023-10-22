import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";

export default function ToDo() {
  const [userName, setUserName] = useState("");
  const [artists, setArtists] = useState([]);
  const [artistName, setArtistName] = useState("");

  useEffect(() => {
    localStorage.setItem("artistsList", JSON.stringify(artists));
  }, [artists]);

  const addUserName = (e) => {
    e.preventDefault();
    if (userName.trim() !== "") {
      setUserName(userName);
      setUserName("");
    }
  };

  const addArtist = (e) => {
    e.preventDefault();
    if (artistName.trim() !== "") {
      setArtists([...artists, artistName]);
      setArtistName("");
    }
  };

  const removeArtist = (index) => {
    const updatedArtists = [...artists];
    updatedArtists.splice(index, 1);
    setArtists(updatedArtists);
  };

  return (
    <div className="container">
      <Link to="/">Home</Link>

      <h4>Adicione o seu nome de usuário</h4>
      <form className="form" onSubmit={addUserName}>
        <input
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <button>Adicionar Nome de Usuário</button>
      </form>
      {userName && (
        <div className="userName">
          <p>Nome de Usuário: {userName}</p>
        </div>
      )}

      <h3>Liste aqui os seus artistas favoritos</h3>
      <form onSubmit={addArtist}>
        <input
          type="text"
          value={artistName}
          onChange={(e) => setArtistName(e.target.value)}
        />
        <button>Adicionar Artista</button>
      </form>
      <ul>
        {artists.map((artist, index) => (
          <li key={index}>
            {artist}
            <button onClick={() => removeArtist(index)}>Remover</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
