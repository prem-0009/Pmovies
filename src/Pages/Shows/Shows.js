import React, { useState, useEffect } from "react";
import axios from "axios";
import SingleContent from "../../components/SingleContent/SingleContent";
import "./shows.css";

const Shows = () => {
  const [trending, setTrending] = useState([]);

  const fetchTrending = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/tv/latest?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`    );

    console.log(data);
    setTrending(data.results);
  };

  //   console.log(trending);

  useEffect(() => {
    fetchTrending();
  }, []);

  return (
    <div>
      <span className="title">shows</span>
      <div className="trending">
        {trending &&
          trending.map((item) => (
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
    </div>
  );
};

export default Shows;
