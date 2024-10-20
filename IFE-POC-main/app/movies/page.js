"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { Navigation, Pagination } from "swiper/modules";
import SwiperCore from "swiper";
import PageSection from "../components/PageSection";

SwiperCore.use([Navigation, Pagination]);

const apiToken =
  "df1ae999e4c307f2aff45deab517c5d8eaf0f34612168899630f57deacb8aca5e40157c53fe07ba2721f61ef0b670a06b46a570adf221dea2abde2250c07c8050ff45c27883aed6cd3366dcfd689f4ff54a4be5029216f6536ae90e489951c2e35764365517d648ab967ae82920cc5e1a2e7ade1aef035e7c786194a558a21ce";

const dummyMovies = [
  {
    id: 1,
    title: "Phoenix",
    year: "Sep, 2024",
    description: "Action thriller - super hero genre",
    cover: {
      url: "/images/movie_posters/Movie_poster_for_a_film_titled_'Phoenix__From_the_.png",
    },
    genre: "thriller",
    popularity: 0,
    favorite: false,
  },
  {
    id: 2,
    title: "Galactic Wars",
    year: "June, 2025",
    description: "Sci-fi adventure across the universe",
    cover: {
      url: "/images/movie_posters/Movie_poster_for_a_film_titled_'Galactic_Wars'._It.png",
    },
    genre: "thriller",
    popularity: 0,
    favorite: false,
  },
  {
    id: 3,
    title: "Mystic Lands",
    year: "Mar, 2023",
    description: "Fantasy journey in enchanted lands",
    cover: {
      url: "/images/movie_posters/Movie_poster_for_a_film_titled_'Mystic_Lands'._It_.png",
    },
    genre: "horror",
    popularity: 0,
    favorite: false,
  },
  {
    id: 4,
    title: "Cyber City",
    year: "Dec, 2022",
    description: "Futuristic city under siege",
    cover: {
      url: "/images/movie_posters/Movie_poster_for_a_film_titled_'Cyber_City'._It_sh.png",
    },
    genre: "horror",
    popularity: 0,
    favorite: false,
  },
  {
    id: 5,
    title: "Lost in the Wild",
    year: "Oct, 2021",
    description: "Survival story in the wild",
    cover: {
      url: "/images/movie_posters/Movie_poster_for_a_film_titled_'Lost_in_the_Wild'.png",
    },
    genre: "thriller",
    popularity: 0,
    favorite: false,
  },
  {
    id: 6,
    title: "Ancient Secrets",
    year: "Jan, 2020",
    description: "Uncovering mysteries of the past",
    cover: {
      url: "/images/movie_posters/Movie_poster_for_a_film_titled_'Ancient_Secrets'._.png",
    },
    genre: "thriller",
    popularity: 0,
    favorite: true,
  },
  {
    id: 7,
    title: "Racing Legends",
    year: "Aug, 2019",
    description: "Thrilling car racing action",
    cover: {
      url: "/images/movie_posters/Movie_poster_for_a_film_titled_'Racing_Legends'._I.png",
    },
    genre: "thriller",
    popularity: 0,
    favorite: false,
  },
  {
    id: 8,
    title: "Haunted Mansion",
    year: "Nov, 2018",
    description: "Horror story in a haunted house",
    cover: {
      url: "/images/movie_posters/Movie_poster_for_a_film_titled_'Haunted_Mansion'._.png",
    },
    genre: "horror",
    popularity: 0,
    favorite: true,
  },
  {
    id: 9,
    title: "Ocean's Depth",
    year: "July, 2017",
    description: "Underwater adventure",
    cover: {
      url: "/images/movie_posters/Movie_poster_for_a_film_titled_'Ocean's_Depth'._It.png",
    },
    genre: "horror",
    popularity: 0,
    favorite: false,
  },
  {
    id: 10,
    title: "Desert Escape",
    year: "May, 2016",
    description: "Escaping the desert's dangers",
    cover: {
      url: "/images/movie_posters/Movie_poster_for_a_film_titled_'Desert_Escape'._It.png",
    },
    genre: "horror",
    popularity: 0,
    favorite: true,
  },
];

const Movies = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [horrorMovies, setHorrorMovies] = useState([]);
  const [thrillerMovies, setThrillerMovies] = useState([]);

  useEffect(() => {
    //Do not remove
    // const fetchPopularMovies = async () => {
    //   try {
    //     const res = await axios.get(
    //       "http://127.0.0.1:1337/api/movies?sort=Popularity:desc&populate=cover",
    //       {
    //         headers: {
    //           Authorization: `Bearer ${apiToken}`,
    //         },
    //       }
    //     );

    //     const moviesData = res.data.data.map((item) => ({
    //       id: item.id,
    //       ...item.attributes,
    //       cover: item.attributes.cover
    //         ? item.attributes.cover.data.attributes
    //         : null,
    //       genre: item.attributes.Genre,
    //     }));

    //     setPopularMovies(moviesData);
    //   } catch (error) {
    //     console.error("Error fetching popular movies:", error);
    //   }
    // };

    // const fetchHorrorMovies = async () => {
    //   try {
    //     const res = await axios.get(
    //       "http://127.0.0.1:1337/api/movies?filters[Genre][$eq]=horror&populate=cover",
    //       {
    //         headers: {
    //           Authorization: `Bearer ${apiToken}`,
    //         },
    //       }
    //     );

    //     const moviesData = res.data.data.map((item) => ({
    //       id: item.id,
    //       ...item.attributes,
    //       cover: item.attributes.cover
    //         ? item.attributes.cover.data.attributes
    //         : null,
    //       genre: item.attributes.Genre,
    //     }));

    //     setHorrorMovies(moviesData);
    //   } catch (error) {
    //     console.error("Error fetching horror movies:", error);
    //   }
    // };

    // const fetchThrillerMovies = async () => {
    //   try {
    //     const res = await axios.get(
    //       "http://127.0.0.1:1337/api/movies?filters[Genre][$eq]=thriller&populate=cover",
    //       {
    //         headers: {
    //           Authorization: `Bearer ${apiToken}`,
    //         },
    //       }
    //     );

    //     const moviesData = res.data.data.map((item) => ({
    //       id: item.id,
    //       ...item.attributes,
    //       cover: item.attributes.cover
    //         ? item.attributes.cover.data.attributes
    //         : null,
    //       genre: item.attributes.Genre,
    //     }));

    //     setThrillerMovies(moviesData);
    //   } catch (error) {
    //     console.error("Error fetching thriller movies:", error);
    //   }
    // };

    // fetchPopularMovies();
    // fetchHorrorMovies();
    // fetchThrillerMovies();

    const fetchMovies = () => {
      const popular = dummyMovies.sort((a, b) => b.popularity - a.popularity);
      const horror = dummyMovies.filter((movie) => movie.genre === "horror");
      const thriller = dummyMovies.filter(
        (movie) => movie.genre === "thriller"
      );

      setPopularMovies(popular);
      setHorrorMovies(horror);
      setThrillerMovies(thriller);
    };

    fetchMovies();
  }, []);
  //do not remove
  // const handleLike = async (movieId) => {
  //   try {
  //     await axios.post(
  //       `http://127.0.0.1:1337/api/movies/${movieId}/increment-popularity`,
  //       {
  //         headers: {
  //           Authorization: `Bearer ${apiToken}`,
  //         },
  //       }
  //     );
  //   } catch (error) {
  //     console.error("Error incrementing popularity:", error);
  //   }
  // };

  const handleLike = (movieId, favorite) => {
    const popularityChange = favorite ? -1 : 1;

    const updatePopularity = (movies) =>
      movies.map((movie) =>
        movie.id === movieId
          ? { ...movie, popularity: movie.popularity + popularityChange }
          : movie
      );

    setPopularMovies((prevMovies) => updatePopularity(prevMovies));
    setHorrorMovies((prevMovies) => updatePopularity(prevMovies));
    setThrillerMovies((prevMovies) => updatePopularity(prevMovies));
  };

  return (
    <div className='container mx-auto px-4'>
      <PageSection
        title='Popular Movies'
        items={popularMovies}
        handleLike={handleLike}
      />
      <PageSection
        title='Horror Movies'
        items={horrorMovies}
        handleLike={handleLike}
      />
      <PageSection
        title='Thriller Movies'
        items={thrillerMovies}
        handleLike={handleLike}
      />
    </div>
  );
};

export default Movies;
