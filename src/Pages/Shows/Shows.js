import React, { useState, useEffect } from "react";
import axios from "axios";
import SingleContent from "../../components/SingleContent/SingleContent";
import CustomPagination from "../../components/Pagination/CustomPagination";

import "./shows.css";

const Shows = () => {
  const [trending, setTrending] = useState([]);
  const [page, setPage] = useState(1);


  const fetchTrending = async () => {
    const { data } = await axios.get(
      ` https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&page=${page}&timezone=America%2FNew_York&include_null_first_air_dates=false&with_watch_monetization_types=free`    );

    console.log(data);
    setTrending(data.results);
  };

  //   console.log(trending);

  useEffect(() => {
    fetchTrending();
  }, [page]);

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
      <CustomPagination setPage={setPage} />

    </div>
  );
};

export default Shows;
