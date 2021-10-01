import React, { useState, useEffect } from "react";
import axios from "axios";
import SingleContent from "../../components/SingleContent/SingleContent";
import CustomPagination from "../../components/Pagination/CustomPagination";
import Genre from "../../components/Genre/Genre";
import useGenres from "../../components/hooks/useGenres";

const Movies = () => {
  
  const [latest, setLatest] = useState([]);
  const [page, setPage] = useState(1);
  const [genre, setGenre] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState([]);
  const genreForUrl = useGenres(selectedGenre);
  const [numberOfPages, setNumberOfPages] = useState();

  const fetchLatest = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&page=${page}&timezone=America%2FNew_York&include_null_first_air_dates=false&with_watch_monetization_types=free&with_genres=${genreForUrl}&include_adult=false`
    );

    setLatest(data.results);
    setNumberOfPages(data.total_pages);
  };

  useEffect(() => {
    window.scroll(0, 0);
    fetchLatest();
    // eslint-disable-next-line
  }, [page, genreForUrl]);

  return (
    <div>
      <Genre
        type="tv"
        page={page}
        genre={genre}
        selectedGenre={selectedGenre}
        setSelectedGenre={setSelectedGenre}
        setGenre={setGenre}
        setPage={setPage}
      />
      <div className="trending">
        {latest &&
          latest.map((item) => (
            <SingleContent
              key={item.id}
              id={item.id}
              title={item.title || item.name}
              poster={item.poster_path}
              vote={item.vote_average}
              date={item.first_air_date || item.release_date}
            />
          ))}
      </div>
      {numberOfPages > 1 && (
        <CustomPagination setPage={setPage} numberOfPages={numberOfPages} />
      )}{" "}
    </div>
  );
};

export default Movies;
