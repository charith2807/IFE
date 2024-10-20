"use client";

import React, { useEffect, useState } from "react";
import PageSection from "../components/PageSection";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import SwiperCore from "swiper";

SwiperCore.use([Navigation, Pagination]);

interface AudioCardProps {
  id: number;
  title: string;
  artist: string;
  genre: string;
  cover: { url: string };
  popularity: number;
  favorite: boolean;
}

const dummyTracks = [
  {
    id: 1,
    title: "Chilled Summer",
    artist: "Various Artists",
    genre: "Lo-fi",
    cover: { url: "/images/audio_posters/chilled_summer.png" },
    popularity: 0,
    favorite: false,
  },
  {
    id: 2,
    title: "Night Vibes",
    artist: "DJ Smooth",
    genre: "Lo-fi",
    cover: { url: "/images/audio_posters/night_vibes.png" },
    popularity: 0,
    favorite: false,
  },
  {
    id: 3,
    title: "Ocean Waves",
    artist: "Relaxation Sounds",
    genre: "Lo-fi",
    cover: { url: "/images/audio_posters/ocean_waves.png" },
    popularity: 0,
    favorite: false,
  },
  {
    id: 4,
    title: "Urban Beats",
    artist: "City Groove",
    genre: "Lo-fi",
    cover: { url: "/images/audio_posters/urban_beats.png" },
    popularity: 0,
    favorite: false,
  },
  {
    id: 5,
    title: "Mystic Rain",
    artist: "Nature Harmony",
    genre: "Lo-fi",
    cover: { url: "/images/audio_posters/mystic_rain.png" },
    popularity: 0,
    favorite: false,
  },
  {
    id: 6,
    title: "Sunset Chill",
    artist: "DJ Relax",
    genre: "Lo-fi",
    cover: { url: "/images/audio_posters/sunset_chill.png" },
    popularity: 0,
    favorite: false,
  },
  {
    id: 7,
    title: "Classical Moods",
    artist: "Symphony Orchestra",
    genre: "Lo-fi",
    cover: { url: "/images/audio_posters/classical_moods.png" },
    popularity: 0,
    favorite: false,
  },
];

const Audio = () => {
  const [audio, setAudio] = useState<AudioCardProps[]>([]);

  useEffect(() => {
    const fetchAudio = () => {
      const popular = dummyTracks.sort((a, b) => b.popularity - a.popularity);
      setAudio(popular);
    };
    fetchAudio();
  }, []);

  const handleLike = (audioId: number, favorite: boolean) => {
    const popularityChange = favorite ? -1 : 1;

    const updatePopularity = (audios: AudioCardProps[]) =>
      audios.map((audio) =>
        audio.id === audioId
          ? { ...audio, popularity: audio.popularity + popularityChange }
          : audio
      );

    setAudio((prevAudios) => updatePopularity(prevAudios));
  };

  return (
    <div className='container mx-auto px-4'>
      <PageSection
        title='Popular Audio'
        items={audio}
        handleLike={handleLike}
      />
    </div>
  );
};

export default Audio;
