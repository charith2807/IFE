"use client";

import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCoverflow } from "swiper/modules";
import SwiperCore from "swiper";
import PosterCard from "./PosterCard";
import { PosterCardProps } from "./PosterCard";
import PosterCardSkeleton from "./PosterCardSkeleton";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

SwiperCore.use([Navigation, Pagination, EffectCoverflow]);

const dummyPosterData: PosterCardProps[] = [
  {
    id: 1,
    title: "Phoenix",
    subheader: "Sep, 2024",
    description: "Action thriller - super hero genre",
    image:
      "/images/movie_posters/Movie_poster_for_a_film_titled_'Phoenix__From_the_.png",
    poster: "/videos/video1.mp4",
  },

  {
    id: 2,
    title: "Galactic Wars",
    subheader: "June, 2025",
    description: "Sci-fi adventure across the universe",
    image:
      "/images/movie_posters/Movie_poster_for_a_film_titled_'Galactic_Wars'._It.png",
    poster: "/videos/video2.mp4",
  },
  {
    id: 3,
    title: "Mystic Lands",
    subheader: "Mar, 2023",
    description: "Fantasy journey in enchanted lands",
    image:
      "/images/movie_posters/Movie_poster_for_a_film_titled_'Mystic_Lands'._It_.png",
    poster: "/videos/video3.mp4",
  },
];

const PosterCardSwiper = () => {
  const [trending, setTrending] = useState<PosterCardProps[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("Fetching Data...");
    setTrending(dummyPosterData);
    setLoading(false);
  }, []);

  if (loading) {
    console.log("loading....");
    return <PosterCardSkeleton />;
  }

  return (
    <Swiper
      effect='coverflow'
      coverflowEffect={{
        rotate: 90,
        stretch: 0,
        depth: 100,
        modifier: 1,
      }}
      spaceBetween={30}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
    >
      {trending.length > 0 ? (
        trending.map((movie) => (
          <SwiperSlide key={movie.id}>
            <PosterCard
              id={movie.id}
              title={movie.title}
              subheader={movie.subheader}
              image={movie.image}
              poster={movie.poster}
              description={movie.description}
            />
          </SwiperSlide>
        ))
      ) : (
        <p>No movies found.</p>
      )}
    </Swiper>
  );
};

export default PosterCardSwiper;
