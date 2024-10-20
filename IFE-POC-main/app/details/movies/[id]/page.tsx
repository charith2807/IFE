"use client";

import React from "react";
import { useParams } from "next/navigation";
import {
  Container,
  Typography,
  Box,
  Button,
  Card,
  CardMedia,
} from "@mui/material";
import { Tab, Tabs } from "@mui/material";

const Details = () => {
  const [tabValue, setTabValue] = React.useState(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  return (
    <Container maxWidth='lg' sx={{ mt: 4 }}>
      <Box sx={{ display: "flex", justifyContent: "center", mb: 4 }}>
        <CardMedia
          component='img'
          image="/images/movie_posters/Movie_poster_for_a_film_titled_'Desert_Escape'._It.png"
          alt='Movie Header'
          sx={{ width: "100%", maxHeight: 450 }}
        />
      </Box>

      <Box sx={{ display: "flex", mb: 4 }}>
        <Card
          sx={{ minWidth: 200, maxWidth: 300, mr: 4 }}
          className='border rounded-xl'
        >
          <CardMedia
            component='img'
            image="/images/movie_posters/Movie_poster_for_a_film_titled_'Desert_Escape'._It.png"
            alt='Movie Poster'
          />
        </Card>

        <Box>
          <Typography variant='h4' gutterBottom>
            DESERT ESCAPE
          </Typography>
          <Typography variant='h6' gutterBottom>
            Adventure, Mystery | 104 min. | 2024
          </Typography>
          <div
            style={{ display: "inline-block" }}
            className='text-lg p-2 bg-green-600 font-semibold rounded-xl'
          >
            PG
          </div>
          <br />
          <Button
            variant='contained'
            color='primary'
            sx={{ mt: 2 }}
            className='text-lg'
          >
            Watch trailer
          </Button>
        </Box>
      </Box>

      <Box>
        <Tabs
          value={tabValue}
          onChange={handleTabChange}
          aria-label='details tabs'
        >
          <Tab
            label='Synopsis'
            className='text-xl font-semibold text-black dark:text-white'
          />
          <Tab
            label='Details'
            className='text-xl font-semibold text-black dark:text-white'
          />
        </Tabs>
        <Box sx={{ mt: 2, mb: 4 }}>
          {tabValue === 0 && (
            <Typography className='text-lg'>
              In the heart of the unforgiving Sahara Desert, ex-special forces
              soldier Jack Harper (portrayed by a rugged action star) finds
              himself on a mission of survival. Tasked with rescuing a group of
              kidnapped scientists, Harper must navigate treacherous dunes,
              ancient ruins, and deadly sandstorms. The journey begins when a
              powerful corporation discovers a hidden oasis rumored to possess a
              mineral that can revolutionize technology. When their team of
              scientists, led by the brilliant Dr. Emma Hayes (played by a
              leading actress known for her strong performances), is captured by
              a ruthless desert warlord, Harper is called upon for a daring
              rescue. Armed with limited resources and his unparalleled combat
              skills, Harper sets out on a high-stakes race against time. Along
              the way, he encounters Layla (a skilled desert guide with a
              mysterious past), who becomes an unexpected ally. Together, they
              unravel secrets buried deep within the sands, face off against
              mercenaries, and outsmart the warlord&apos;s formidable forces. As
              Harper and Layla get closer to their goal, they uncover a
              conspiracy that threatens not only the scientists but the entire
              region. With trust being their most precious commodity, they must
              navigate double-crosses and hidden agendas to bring the scientists
              back safely. In a climactic showdown amidst the shifting sands,
              Harper must confront his past, fight for justice, and make the
              ultimate sacrifice to ensure the safety of those he has sworn to
              protect. &quot;Desert Escape&quot; is a heart-pounding adventure
              that will leave audiences on the edge of their seats, showcasing
              the relentless human spirit and the quest for redemption in the
              harshest of environments.
            </Typography>
          )}
          {tabValue === 1 && (
            <Typography className='text-lg'>Additional Details</Typography>
          )}
        </Box>
      </Box>
    </Container>
  );
};

export default Details;
