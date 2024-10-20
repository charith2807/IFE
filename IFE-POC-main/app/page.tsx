import Card from "./components/Card";
import PosterCardSwiper from "./components/PosterCardSwiper";
import TempLandingSlider from "./components/TemporaryLandingSlider";

export default function Home() {
  return (
    <div className='container mx-auto p-4'>
      <PosterCardSwiper />
      <h1 className='text-3xl font-bold mt-4'> </h1>
      <TempLandingSlider />
      {/* <Card
        title='Shrimp and Chorizo Paella'
        subheader='September 14, 2016'
        image="\images\movie_posters/Movie_poster_for_a_film_titled_'Desert_Escape'._It.png"
        description="In this thrilling action-packed adventure, a fallen superhero rises from the depths of despair to reclaim his destiny. As dark forces threaten to engulf the city in chaos, he must confront his past, harness his newfound powers, and embark on a perilous journey of rebirth and redemption. With heart-stopping battles, unexpected allies, and a relentless enemy, 'Phoenix: From the Ashes' delivers a powerful story of courage, resilience, and the unbreakable spirit of a true hero"
      /> */}
    </div>
  );
}
