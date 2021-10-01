import React, { useEffect } from "react";
import axios from "axios";
import { Chip } from "@mui/material";

const Genre = ({
  selectedGenre,
  setSelectedGenre,
  genre,
  setGenre,
  type,
  setPage,
}) => {
  
  const fetchGenres = async () => {
    const { data } = await axios.get(
      ` https://api.themoviedb.org/3/genre/${type}/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    );
    setGenre(data.genres);
  };

  const handleDelete = (e) => {
    setSelectedGenre(selectedGenre.filter((item) => item.id !== e.id));
    setGenre([e, ...genre]);
    setPage(1);
  };

  const handleAdd = (e) => {
    setSelectedGenre([e, ...selectedGenre]);
    setGenre(genre.filter((item) => item.id !== e.id));
    setPage(1);
  };

  useEffect(() => {
    fetchGenres();
  }, []);

  return (
    <div>
      {selectedGenre.map((item) => (
        <Chip
          color="secondary"
          key={item.id}
          label={item.name}
          onDelete={() => handleDelete(item)}
        />
      ))}

      {genre.map((item) => (
        <Chip
          label={item.name}
          color="primary"
          sx={{ margin: "2px" }}
          clickable
          key={item.id}
          onClick={() => handleAdd(item)}
        />
      ))}
    </div>
  );
};

export default Genre;
