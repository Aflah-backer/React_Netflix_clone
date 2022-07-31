import React from "react";
import NavBav from "./componenets/NavBar/NavBar";
import { action, ComedyMovies, Documentaries, HorrorMovies, originals, RomanceMovies } from './urls'
import "./App.css";
import Banner from "./componenets/Banner/Banner";
import RowPost from "./componenets/RowPost/RowPost";


function App() {
  return (
    <div className="App">
      <NavBav />
      <Banner />
      <RowPost url={originals} title='Netflix Orginals'/>
      <RowPost url={action} title='Action' isSmall/>
      <RowPost url={ComedyMovies} title='ComedyMovies' isSmall/>
      <RowPost url={HorrorMovies} title='HorrorMovies' isSmall/>  
      <RowPost url={RomanceMovies} title='RomanceMovies' isSmall/>     
      <RowPost url={Documentaries} title='Documentaries' isSmall/>     
    </div>
  );
}

export default App;
