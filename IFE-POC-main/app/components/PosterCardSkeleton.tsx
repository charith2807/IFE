"use client";

import React from "react";
import { styled } from "@mui/material";

const Skeleton = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-around",
  padding: "26px",
  maxWidth: "1048px",
  height: "512px",
  margin: "auto",
}));

const VideoSkeleton = styled("div")({
  position: "relative",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
});

const PosterCardSkeleton = () => {
  return (
    <Skeleton className='border border-gray-300 shadow-lg rounded-xl bg-white dark:bg-slate-800 dark:text-white animate-pulse'>
      <VideoSkeleton className='h-5/6 ml-8 mr-8 bg-gray-200 rounded-xl'></VideoSkeleton>
      <div className='w-64 flex-shrink-0 ml-4 mr-4 flex flex-col justify-center items-center'>
        <div className='h-64 bg-gray-200 rounded w-full'></div>
        <div className='h-8 bg-gray-200 rounded mt-2 w-full'></div>
        <div className='h-6 bg-gray-200 rounded w-3/4 mt-2'></div>
        <div className='h-12 bg-blue-500 rounded mt-4 w-2/3'></div>
      </div>
    </Skeleton>
  );
};

export default PosterCardSkeleton;
