"use client";

import React from "react";
import { useState } from "react";
import TimeRing from "../components/TimeRing";
import {
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  SelectChangeEvent,
  Checkbox,
  ListItemText,
} from "@mui/material";

const content_data = [
  { id: 1, label: "Movie A", value: 10 },
  { id: 2, label: "Song B", value: 20 },
  { id: 3, label: "Movie C", value: 30 },
  { id: 4, label: "Playlist D", value: 15 },
  { id: 5, label: "TV Show E", value: 25 },
  { id: 6, label: "Album F", value: 10 },
  { id: 7, label: "Movie G", value: 20 },
  { id: 8, label: "TV Show H", value: 30 },
];

const flight_data = [
  { id: 1, label: "FLIGHT EK1234", value: 120 },
  { id: 2, label: "FLIGHT EK5678", value: 150 },
  { id: 3, label: "FLIGHT EK9101", value: 90 },
  { id: 4, label: "FLIGHT EK1121", value: 180 },
  { id: 5, label: "FLIGHT EK3141", value: 210 },
];

const Planner = () => {
  const [selectedContent, setSelectedContent] = useState<number[]>([]);
  const [selectedFlight, setSelectedFlight] = useState("");

  const handleContentChange = (
    event: SelectChangeEvent<typeof selectedContent>
  ) => {
    const {
      target: { value },
    } = event;

    setSelectedContent(value as number[]);
  };

  const handleFlightChange = (event: SelectChangeEvent) => {
    setSelectedFlight(event.target.value);
  };
  return (
    <div className='flex flex-col justify-center space-around m-4'>
      <div className='flex justify-center space-around'>
        <FormControl className='w-1/4 m-6 '>
          <InputLabel id='content-label' className='text-black dark:text-white'>
            Select Content
          </InputLabel>
          <Select
            labelId='content-label'
            multiple
            value={selectedContent}
            label='Select Content'
            sx={{
              borderColor: "white",
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "currentColor",
              },
            }}
            onChange={handleContentChange}
            renderValue={(selected) => selected.join(", ")}
            className='text-black dark:text-white'
          >
            {content_data.map((item) => (
              <MenuItem key={item.id} value={item.id}>
                <Checkbox checked={selectedContent.indexOf(item.id) > -1} />
                <ListItemText primary={item.label} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl className='w-1/4 m-6'>
          <InputLabel id='data2-label' className='text-black dark:text-white'>
            Select Flight
          </InputLabel>
          <Select
            labelId='data2-label'
            value={selectedFlight}
            label='Select Flight'
            onChange={handleFlightChange}
            sx={{
              borderColor: "white",
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "currentColor",
              },
            }}
            className='text-black dark:text-white'
          >
            {flight_data.map((item, index) => (
              <MenuItem key={index} value={item.id}>
                {item.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
      <TimeRing
        selectedContent={selectedContent}
        selectedFlight={selectedFlight}
      />
    </div>
  );
};

export default Planner;
