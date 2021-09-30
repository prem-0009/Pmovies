import  React, {useEffect} from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';

import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';
import TvIcon from '@mui/icons-material/Tv';
import SearchIcon from '@mui/icons-material/Search';
import {useHistory} from 'react-router-dom';

import './footer.css'//not working don't know why??????????

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);
  const history = useHistory();

  useEffect(() => {
      return value === 0 ? history.push('/'):
      value === 1 ? history.push('/movies') :
      value === 2 ? history.push('/shows') :
      value === 3 ? history.push('/search') : 'null'
  }, [value, history])

  return (
    <Box sx={{ width: '100%',  }} 
    
    >
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        sx={{ width: '100%', backgroundColor:'black', bottom:0, position:'fixed' }}
        
      >
        <BottomNavigationAction  sx={{color:'white'}} label="Trending" icon={<TrendingUpIcon />} />
        <BottomNavigationAction  sx={{color:'white'}} label="Movies" icon={<LocalMoviesIcon />} />
        <BottomNavigationAction  sx={{color:'white'}} label="TvShows" icon={<TvIcon />} />
        <BottomNavigationAction  sx={{color:'white'}} label="Search" icon={<SearchIcon />} />
      </BottomNavigation>
    </Box>
  );
}
