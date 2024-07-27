import Image from "next/image";
import { useState } from "react";

export async function getServerSideProps() {
  const res = await fetch("https://fakestoreapi.com/products");
  const products = await res.json();

  return {
    props: {
      products,
    },
  };
}

export default function cards({ products }) {
  if (products.length === 0) {
    return <div>No products found</div>;
  } else {
    return (
      <>
        <div className="flex flex-col items-center p-5">
          <div className="border-2 border-orange-500 sm:w-[400px] md:w-1/4 ">
            {products.map((data) => (
              <div key={data.id} className="relative ">
                <Image
                  src={data.image}
                  alt="Food Image"
                  width="500"
                  height="500"
                  className="object-cover w-[100%]" // 使用 object-cover 保持比例
                  priority
                />
                <p className="font-bold text-lg text-orange-500 p-2">
                  {data.title}
                </p>
                <p className="p-2 pb-0 ">{data.rating.rate} / 5</p>
                <p className="p-2 pb-0 ">{data.price}</p>
                <p className="p-2 pb-0 ">{data.category}</p>
              </div>
            ))}
          </div>
          <button className="border px-2 bg-sky-300 hover:bg-cyan-600 text-white mt-[10px]">
            再選一次
          </button>
        </div>
      </>
    );
  }
}
