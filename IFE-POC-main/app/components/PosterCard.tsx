"use client";

import React, { useState } from "react";
import { Typography, Button, Box, IconButton } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { styled } from "@mui/material/styles";
import { Image } from "@nextui-org/react";
import { useTheme } from "next-themes";
import Link from "next/link";

const SlideContent = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-around",
  padding: "26px",
  maxWidth: "1048px",
  margin: "auto",
}));

const VideoContainer = styled("div")({
  padding: "26px",
  position: "relative",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  "& video": {
    width: "100%",
    borderRadius: "10px",
  },
});

const PlayButton = styled(IconButton)({
  position: "absolute",
  color: "white",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  "&:hover": {
    backgroundColor: "rgba(0, 0, 0, 0.7)",
  },
  zIndex: 1,
  width: "64px",
  height: "64px",
  fontSize: "48px",
});

export interface PosterCardProps {
  id: number;
  title: string;
  subheader: string;
  image: string;
  description: string;
  poster: string;
}

const PosterCard: React.FC<PosterCardProps> = ({
  id,
  title,
  subheader,
  image,
  description,
  poster,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [playing, setPlaying] = useState<number | null>(null);

  const handleReadMore = () => {
    // setIsExpanded(!isExpanded);
  };

  const handlePlay = (id: number) => {
    setPlaying(id);
    const video = document.getElementById(`video-${id}`) as HTMLVideoElement;
    if (video) {
      video.play();
    }
  };

  const { theme } = useTheme();

  return (
    <SlideContent className='border border-gray-300 shadow-md rounded-xl bg-white dark:bg-slate-800'>
      <VideoContainer className='flex-col'>
        <div className='flex flex-row sm:hidden'>
          <Typography
            className='content-center text-s sm:hidden mr-2 mb-2'
            fontWeight='bold'
          >
            {title}
          </Typography>
          <Link href='/details/movies/1'>
            <Button
              variant='contained'
              className='mb-2 text-s p-1 text-transform: capitalize'
              onClick={handleReadMore}
            >
              {isExpanded ? "Show Less" : "Read More"}
            </Button>
          </Link>
        </div>
        <video id={`video-${id}`} controls={playing === id}>
          <source src={poster} type='video/mp4' />
        </video>
        {playing !== id && (
          <PlayButton onClick={() => handlePlay(id)}>
            <PlayArrowIcon fontSize='large' />
          </PlayButton>
        )}
      </VideoContainer>
      <Box
        className='hidden sm:block'
        sx={{
          alignItems: "center",
        }}
      >
        <Image
          src={image}
          height='225'
          width='190'
          radius='md'
          shadow='md'
          alt='Poster'
        />
        <Box sx={{ mt: 2, textAlign: "center" }}>
          <Typography variant='h5' component='h3' fontWeight='bold'>
            {title}
          </Typography>
          <Typography
            variant='subtitle1'
            color='textSecondary'
            className='dark:text-white'
          >
            {subheader}
          </Typography>
          <Link href='/details/movies/1'>
            <Button variant='contained' sx={{ mt: 1 }} onClick={handleReadMore}>
              {isExpanded ? "Show Less" : "Read More"}
            </Button>
          </Link>
          {isExpanded && (
            <Typography variant='body1' sx={{ mt: 2 }}>
              {description}
            </Typography>
          )}
        </Box>
      </Box>
    </SlideContent>
  );
};

export default PosterCard;
