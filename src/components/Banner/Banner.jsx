import React, { useState, useEffect } from "react";
import axios from "../../utils/axios";
import requests from "../../utils/requests";
import bannerStyle from "./banner.module.css";

const Banner = () => {
  const [movie, setMovie] = useState({});

  useEffect(() => {
    (async () => {
      try {
        const request = await axios.get(requests.fetchNetflixOriginals);

        setMovie(
          request.data.results[
            Math.floor(Math.random() * request.data.results.length)
          ]
        );
      } catch (error) {
        console.error("Error:", error);
      }
    })();
  }, []);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <div
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url('https://image.tmdb.org/t/p/original${movie?.backdrop_path}')`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className={bannerStyle["banner__contents"]}>
        <h1 className={bannerStyle["banner__title"]}>
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className={bannerStyle["banner__buttons"]}>
          <button
            className={`${bannerStyle["banner__button"]} ${bannerStyle["play"]}`}
          >
            Play
          </button>
          <button className={`${bannerStyle["banner__button"]} `}>
            My List
          </button>
        </div>
        <h1 className={bannerStyle["banner__description"]}>
          {truncate(movie?.overview, 150)}
        </h1>
      </div>
      <div className={bannerStyle["banner__fadeBottom"]} />
    </div>
  );
};

export default Banner;
