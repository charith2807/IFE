"use client";

import React, { useState, useRef, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ForumIcon from "@mui/icons-material/Forum";
import SocialShareButtons from "./Share";

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

interface RecipeReviewCardProps {
  id: number;
  title: string;
  subheader: string;
  image: string;
  description: string;
  favorite: boolean;
  genre?: string;
  onLike?: (id: number, favorite: boolean) => void;
}

const RecipeReviewCard: React.FC<RecipeReviewCardProps> = ({
  id,
  title,
  subheader,
  image,
  description,
  favorite,
  genre,

  onLike,
}) => {
  const [expanded, setExpanded] = useState(false);
  const [isFavorite, setIsFavorite] = useState(favorite);
  const [showShareButtons, setShowShareButtons] = useState(false);
  const cardContainerRef = useRef<HTMLDivElement>(null);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleFavoriteClick = () => {
    setIsFavorite(!isFavorite);

    if (onLike) {
      onLike(id, isFavorite);
    }
  };

  const handleShareIconClick = () => {
    setShowShareButtons(!showShareButtons);
  };

  const handleMouseLeave = () => {
    setShowShareButtons(false);
  };

  return (
    <div
      className="relative"
      ref={cardContainerRef}
      onMouseLeave={handleMouseLeave}
    >
      <Card
        sx={{ maxWidth: 345 }}
        className={`p-4 border border-gray-300 shadow-lg rounded-xl bg-white max-w-xs mx-auto dark:bg-slate-800 dark:text-white transition ${
          showShareButtons ? "blur-sm" : ""
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <CardHeader
          action={
            <IconButton aria-label="forum" className="dark:text-white">
              <ForumIcon />
            </IconButton>
          }
          title={
            <Typography
              noWrap
              sx={{
                overflow: "hidden",
                fontWeight: "bold",
                textOverflow: "ellipsis",
                display: "-webkit-box",
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
              }}
            >
              {title}
            </Typography>
          }
          subheader={
            <Typography className="dark:text-white ">{`${subheader} - ${genre}`}</Typography>
          }
        />
        <CardMedia
          className="object-contain rounded-xl w-full hover:transform hover:scale-105 transition-transform duration-300"
          component="img"
          height="225"
          image={image}
          alt={title}
        />
        <CardActions disableSpacing>
          {onLike && (
            <IconButton
              aria-label="add to favorites"
              className="dark:text-white"
              onClick={handleFavoriteClick}
            >
              <FavoriteIcon
                style={{ color: isFavorite ? "pink" : "inherit" }}
              />
            </IconButton>
          )}
          <div className="relative">
            <IconButton
              aria-label="share"
              className="dark:text-white"
              onClick={handleShareIconClick}
            >
              <ShareIcon />
            </IconButton>
          </div>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
            className="dark:text-white"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Description:</Typography>
            <Typography paragraph>{description}</Typography>
          </CardContent>
        </Collapse>
      </Card>
      {showShareButtons && (
        <div
          ref={cardContainerRef}
          className="absolute top-0 left-0 w-full h-full flex justify-center items-center"
        >
          <SocialShareButtons url={"http://localhost:3000"} />
        </div>
      )}
    </div>
  );
};

export default RecipeReviewCard;
