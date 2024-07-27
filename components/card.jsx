import Image from "next/image";
import reviews from "../mockReviews.json";
import { useState, useEffect } from "react";

export default function cards() {
  const [restaurant, setRestaurant] = useState(null);

  function randomData() {
    const randomIndex = Math.floor(Math.random() * reviews.length);
    setRestaurant(reviews[randomIndex]);
  }

  if (!restaurant) {
    return (
      <button
        className="border px-2 bg-sky-300 hover:bg-cyan-600 text-white mt-[10px]"
        onClick={randomData}>
        點擊按鈕隨機挑選餐廳
      </button>
    );
  } else {
    return (
      <>
        <div className="flex flex-col items-center p-5">
          <div className="border-2 border-orange-500 sm:w-[400px] md:w-1/4 ">
            <div key={restaurant.id} className="relative ">
              <Image
                src={restaurant.image}
                alt="Food Image"
                width="500"
                height="500"
                className="object-cover w-[100%]" // 使用 object-cover 保持比例
                priority
              />
              <p className="font-bold text-lg text-orange-500 p-2">
                {restaurant.name}
              </p>
              <p className="p-2 pb-0 ">{restaurant.rating} / 5</p>
              <p className="p-2 pb-0 ">{restaurant.priceRange}</p>
              <p className="p-2 pb-0 ">{restaurant.address}</p>
              <p className="p-2 pb-0 ">Opining: {restaurant.openingHours}</p>
            </div>
          </div>
          <button
            className="border px-2 bg-sky-300 hover:bg-cyan-600 text-white mt-[10px]"
            onClick={randomData}>
            再選一次
          </button>
        </div>
      </>
    );
  }
}
