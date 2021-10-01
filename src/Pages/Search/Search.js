import React, {useState} from "react";
import axios from 'axios';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';








export default function Search() {

  const [searchWord, setSearchWord] = useState('')
  
  
  const fetchSearching = async ()=>{
    const {data} = await axios.get(` https://api.themoviedb.org/3/search/company?api_key=123123123123123&query=${searchWord}&page=1`)
  }


  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      
      <TextField id="filled-basic" label="search.." variant="filled" />
      <SearchIcon/>
      
      
      
    </Box>
  );
}

