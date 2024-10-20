import React from "react";
import RecipeReviewCard from "./Card";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import SwiperCore from "swiper";
import SwiperSkeleton from "./SwiperSkeleton";

SwiperCore.use([Navigation, Pagination]);

const PageSection = ({ title, items, handleLike }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (title && items && handleLike) {
      setLoading(false);
    }
  }, []);

  if (loading) {
    return <SwiperSkeleton count={5} />;
  }

  return (
    <div>
      <h1 className='text-3xl font-bold my-8'>{title}</h1>
      <Swiper
        className='mb-4'
        spaceBetween={30}
        slidesPerView={1}
        navigation
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
          1280: { slidesPerView: 5 },
        }}
      >
        {items.length > 0 ? (
          items.map((item) => (
            <SwiperSlide key={item.id}>
              {/* <RecipeReviewCard
                id={item.id}
                title={item.title}
                subheader={item.year}
                image={
                  item.cover?.url.startsWith("http")
                    ? item.cover.url
                    : `http://127.0.0.1:1337${item.cover.url}`
                }
                description={item.description}
                genre={item.genre}
                onLike={handleLike}
              /> */}
              <RecipeReviewCard
                id={item.id}
                title={item.title}
                subheader={item.year}
                image={item.cover.url}
                description={item.description}
                genre={item.genre}
                favorite={item.favorite}
                onLike={handleLike}
              />
            </SwiperSlide>
          ))
        ) : (
          <p>No {title.toLowerCase()} found.</p>
        )}
      </Swiper>
    </div>
  );
};

export default PageSection;
