import React from "react";
import Product from "./Product";
import { BiLoader } from "react-icons/bi";

export default function SimilarProducts() {
  const products = [
    {
      id: 1,
      title: "Brown Leather Bag",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit ipsum porro optio. Quidem omnis sunt autem. Sint, ipsa doloribus ullam necessitatibus perferendis, quia porro eum possimus, similique assumenda corporis laudantium!",
      url: "https://picsum.photos/id/7",
      price: 2500,
    },
    {
      id: 2,
      title: "School Books",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit ipsum porro optio. Quidem omnis sunt autem. Sint, ipsa doloribus ullam necessitatibus perferendis, quia porro eum possimus, similique assumenda corporis laudantium!",
      url: "https://picsum.photos/id/20",
      price: 1999,
    },
  ];
  return (
    <div>
      <div className="border-b py-1 max-w-[1200px] mx-auto" />

      <div className="max-w-[1200px] mx-auto">
        <h2 className="py-2 mt-4 text-2xl font-bold">
          Similar sponspored items
        </h2>

        {products.length ? (
          <div className="grid grid-cols-5 gap-4">
            {products.map((product) => (
              <Product id={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="flex items-center justify-center">
            <div className="flex items-center justify-center gap-4 font-semibold">
              <BiLoader size={30} className="text-blue-400 animate-spin" />
              Loading Products...
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
