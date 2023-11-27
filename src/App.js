import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Movie from "./components/Movie/Movie.jsx";
import { movies } from "./movieDummy";
import { tvs } from "./tvDummy.js";
import Header from "./components/Movie/Header.jsx"
import Tv from "./pages/TV.jsx"
import Celebrity from "./pages/Celebrity.jsx"
import NotFound from "./pages/NotFound.jsx"
import Home from "./pages/Home.jsx"
import MovieDetail from "./pages/MovieDetail.jsx";
import TvDetail from "./pages/TvDetail.jsx"
import LoginPage from "./pages/LoginPage.jsx";

function App () {
  return (
    <div className="root-wrap">
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path="/tv-program" 
          element={
            <div className="app-container">
            {
            tvs.results.map((item) => {
              return (
                <Tv
                title ={item.title}
                poster_path={item.poster_path}
                vote_average={item.vote_average}
                overview={item.overview}
                />
              )})
            }
            </div>}/>
          <Route path="/celeb" element={<Celebrity/>}/>
          <Route path="/*" element={<NotFound/>}/>
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/movie"
          element={
            <div className="app-container">
                  {
                  movies.results.map((item) => {
                    return (
                      <Movie
                      title ={item.title}
                      poster_path={item.poster_path}
                      vote_average={item.vote_average}
                      overview={item.overview}
                      />
                    )})
                  }
            </div>}/>
            <Route path={`/movie/:title`} element={<MovieDetail/>}/>
            <Route path={`/tv-program/:title`} element={<TvDetail/>}/>
        </Routes>
    </BrowserRouter>
    </div>
  )
}
export default App;
