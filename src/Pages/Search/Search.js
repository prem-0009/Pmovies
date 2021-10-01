import React, { useState, useEffect } from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import "./search.css";
import { Button, Tabs, Tab } from "@mui/material";
import SingleContent from "../../components/SingleContent/SingleContent";
import CustomPagination from "../../components/Pagination/CustomPagination";

export default function Search() {
  const [searchWord, setSearchWord] = useState("");

  const [type, setType] = useState(0);
  const [searched, setSearched] = useState([]);
  const [page, setPage] = useState(1);
  const [numberOfPages, setNumberOfPages] = useState()

  const fetchSearching = async () => {
    try {
      const { data } = await axios.get(
        ` https://api.themoviedb.org/3/search/${type}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1&include_adult=false&query=${searchWord}&page=${page}`
      );
      setSearched(data.results);
      setNumberOfPages(data.total_pages)
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = (event, newValue) => {
    console.log(newValue);

    setType(newValue);
    setPage(1);
    // console.log(type);
  };
  // console.log(page);

  const onChangeSearchText = (searchText) => {
    setSearchWord(searchText);
  };

  useEffect(() => {
    fetchSearching();
    // console.log(type);
    // console.log(searchWord);
    // console.log(searched);
    // console.log(page);
  }, [type, page, searchWord]);

  return (
    <>
      <div className="search-pg">
        <TextField
          id="filled-basic"
          label="search.."
          variant="filled"
          sx={{ margin: "0px 0px", width: "70%", flex: "1" }}
          onChange={(e) => onChangeSearchText(e.target.value)}
        />
        {/* <Button
          variant="contained"
          // sx={{ marginLeft: 10 }}
        >
          <SearchIcon
            sx={{
              //  border: "2px solid green",
              margin: "2px",
              //  padding:'10px'
            }}
            fontSize="large"
          />
        </Button> */}
      </div>
      <div>
        <Tabs
          value={type}
          onChange={(e, value) => handleChange(e, value)}
          aria-label="basic tabs example"
          centered
        >
          <Tab label="Movies" value="movie" />
          <Tab label="Tv-Shows" value="tv" />
        </Tabs>
      </div>

      <div className="trending">
        {searched &&
          searched.map((item) => (
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
      )}
    </>
  );
}
