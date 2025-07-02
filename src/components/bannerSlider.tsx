import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const banners = [
  "https://cdn.pixabay.com/photo/2017/03/05/14/19/headphone-2118725_1280.jpg",
  "https://shoestreet.pk/cdn/shop/collections/Shoestreet_Banner.jpg?v=1742311227",
  "https://boathousestores.com/cdn/shop/collections/MSALE_ced70e13-dcf8-4813-a310-851bcb606b21.png?v=1726606423&width=1920",
];

const BannerSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrev = () =>
    setCurrentIndex((prev) => (prev === 0 ? banners.length - 1 : prev - 1));

  const goToNext = () =>
    setCurrentIndex((prev) => (prev === banners.length - 1 ? 0 : prev + 1));

  return (
    <div className="relative w-full h-[400px] overflow-hidden rounded-lg shadow-lg">
      {/* Banner Image */}
      <div
        className="w-full h-full bg-cover bg-center transition-all duration-500"
        style={{ backgroundImage: `url(${banners[currentIndex]})` }}
      />

      {/* Navigation Buttons */}
      <button
        onClick={goToPrev}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white bg-black/30 p-2 rounded-full hover:bg-black/50"
      >
        <ChevronLeft />
      </button>

      <button
        onClick={goToNext}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white bg-black/30 p-2 rounded-full hover:bg-black/50"
      >
        <ChevronRight />
      </button>
    </div>
  );
};

export default BannerSlider;
