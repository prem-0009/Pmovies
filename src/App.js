import { BrowserRouter, Switch, Route } from "react-router-dom";

import "./App.css";
import Header from "./components/Header/Header";
import SimpleBottomNavigation from "./components/Footer/Footer";
import Trending from "./Pages/Trending/Trending";
import Movies from "./Pages/Movies/Movies";
import Shows from "./Pages/Shows/Shows";
import Search from "./Pages/Search/Search";
import { Container } from "@mui/material";
// import { Switch } from '@mui/material';

function App() {
  return (
    <BrowserRouter>
        <Header />
      <div className="App">
        <Container>
          <Switch>
            <Route exact path="/" component={Trending} />
            <Route exact path="/movies" component={Movies} />
            <Route exact path="/shows" component={Shows} />
            <Route exact path="/search" component={Search} />
          </Switch>
        </Container>
    </div>
        <SimpleBottomNavigation />
      </BrowserRouter>
  );
}

export default App;
