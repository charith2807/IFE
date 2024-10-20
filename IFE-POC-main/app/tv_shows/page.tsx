"use client";

import React, { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import SwiperCore from "swiper";
import PageSection from "../components/PageSection";

SwiperCore.use([Navigation, Pagination]);

interface TVCardProps {
  id: number;
  title: string;
  year: string;
  description: string;
  cover: {
    url: string;
  };
  genre: string;
  popularity: number;
  favorite: boolean;
}

const dummyTVShows = [
  {
    id: 1,
    title: "Suits",
    year: "2011-2019",
    description: "Legal drama about a talented college dropout",
    cover: { url: "/images/tv_posters/suits.png" },
    genre: "Legal Drama",
    popularity: 0,
    favorite: false,
  },
  {
    id: 2,
    title: "Umbrella Academy",
    year: "2019-present",
    description: "Superhero siblings reunite to solve their father's mystery",
    cover: { url: "/images/tv_posters/umbrella_academy.png" },
    genre: "Superhero",
    popularity: 0,
    favorite: false,
  },
  {
    id: 3,
    title: "Seinfeld",
    year: "1989-1998",
    description: "Comedy series about nothing, focusing on everyday life",
    cover: { url: "/images/tv_posters/seinfeld.png" },
    genre: "Comedy",
    popularity: 0,
    favorite: false,
  },
  {
    id: 4,
    title: "Friends",
    year: "1994-2004",
    description: "Sitcom following the lives of six friends in New York City",
    cover: { url: "/images/tv_posters/friends.png" },
    genre: "Sitcom",
    popularity: 0,
    favorite: false,
  },
  {
    id: 5,
    title: "Family Guy",
    year: "1999-present",
    description:
      "Animated sitcom about the Griffins and their quirky adventures",
    cover: { url: "/images/tv_posters/family_guy.png" },
    genre: "Animated",
    popularity: 0,
    favorite: false,
  },
  {
    id: 6,
    title: "Haikyuu",
    year: "2014-2020",
    description:
      "Anime about high school volleyball players striving for greatness",
    cover: { url: "/images/tv_posters/haikyu.png" },
    genre: "Sports Anime",
    popularity: 0,
    favorite: true,
  },
  {
    id: 7,
    title: "Parks and Recreation",
    year: "2009-2015",
    description:
      "Comedy series following the employees of the Parks Department in Pawnee, Indiana",
    cover: { url: "/images/tv_posters/parks_and_rec.png" },
    genre: "Comedy",
    popularity: 0,
    favorite: false,
  },
];

const TVShows = () => {
  const [popularShows, setShows] = useState<TVCardProps[]>([]);

  useEffect(() => {
    const fetchTVShows = () => {
      const popular = dummyTVShows.sort((a, b) => b.popularity - a.popularity);
      setShows(popular);
    };
    fetchTVShows();
  }, []);

  const handleLike = (showId: number, favorite: boolean) => {
    const popularityChange = favorite ? -1 : 1;

    const updatePopularity = (shows: TVCardProps[]) =>
      shows.map((show) =>
        show.id === showId
          ? { ...show, popularity: show.popularity + popularityChange }
          : show
      );

    setShows((prevShows) => updatePopularity(prevShows));
  };

  return (
    <div className='container mx-auto px-4'>
      <PageSection
        title='Popular TV Shows'
        items={popularShows}
        handleLike={handleLike}
      />
    </div>
  );
};

export default TVShows;
