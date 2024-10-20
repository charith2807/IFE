"use client";

import * as React from "react";
import { useEffect, useState } from "react";
import Stack from "@mui/material/Stack";
import { PieChart } from "@mui/x-charts/PieChart";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
} from "@mui/material";
import { colorVariants } from "@nextui-org/react";

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

export default function TimeRing({ selectedContent, selectedFlight }) {
  const [error, setError] = useState("");

  const selContent = selectedContent
    ? content_data.filter((item) => selectedContent.includes(item.id))
    : [];
  const selFlight = selectedFlight
    ? flight_data.find((item) => item.id === Number(selectedFlight))
    : null;
  const selFlightAr = selFlight
    ? [{ label: selFlight.label, value: selFlight.value }]
    : [];

  const totalContentMins = selContent.reduce(
    (acc, item) => acc + item.value,
    0
  );
  const flightValue = selFlight?.value || 10000;
  const proportion = totalContentMins / flightValue;
  const end = proportion * 360;

  const hasValidData = selContent.length > 0 && selFlight;
  const canAddItem = end <= 360;

  useEffect(() => {
    if (!canAddItem) {
      setError(
        "LIMIT REACHED: Cannot add more items, please remove an item and try again."
      );
    } else {
      setError("");
    }
  }, [end, selectedContent, selectedFlight]);

  const series = [
    {
      innerRadius: 0,
      outerRadius: 80,
      id: "series-1",
      data: selContent,
      startAngle: 0,
      endAngle: end,
    },
    {
      innerRadius: 100,
      outerRadius: 120,
      id: "series-2",
      data: selFlightAr,
    },
  ];

  return (
    <Stack
      className='flex justify-center'
      direction={{ xs: "column", md: "row" }}
      spacing={{ xs: 0, md: 4 }}
      sx={{ width: "100%" }}
    >
      {hasValidData && !error ? (
        <div className='w-3/4 flex justify-center align-center space-around'>
          <PieChart
            series={series}
            height={300}
            margin={0}
            slotProps={{
              legend: { hidden: false, labelStyle: { fill: "currentColor" } },
            }}
          />
          <TableContainer
            className='w-1/3 m-8 dark:bg-slate-800'
            component={Paper}
          >
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell className='dark:text-white'>Label</TableCell>
                  <TableCell className='dark:text-white'>Value</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {selContent.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell className='dark:text-white'>
                      {item.label}
                    </TableCell>
                    <TableCell className='dark:text-white'>
                      {item.value}
                    </TableCell>
                  </TableRow>
                ))}
                <TableRow>
                  <TableCell className='dark:text-white'>
                    <strong>Total</strong>
                  </TableCell>
                  <TableCell className='dark:text-white'>
                    <strong>{totalContentMins}</strong>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      ) : (
        <div className='font-bold'>
          {error ? (
            <div style={{ color: "red" }}>{error}</div>
          ) : (
            "Please Select Flight and Content!"
          )}
        </div>
      )}
    </Stack>
  );
}
