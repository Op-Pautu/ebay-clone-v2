import CartItem from "@/components/CartItem";
import SimilarProducts from "@/components/SimilarProducts";
import MainLayout from "@/components/layouts/MainLayout";
import React from "react";

export default function Cart() {
  const product = {
    id: 1,
    title: "Brown Leather Bag",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.  It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    url: "https://picsum.photos/id/7",
    price: 2500,
  };

  return (
    <MainLayout>
      <section className="max-w-[1200px] mx-auto mb-8 min-h-[300px]">
        <h2 className="my-4 text-2xl font-bold">Shopping Cart</h2>

        <div className="relative flex items-baseline justify-between gap-2">
          <div className="w-[65%]">
            <CartItem key={product.id} product={product} />
          </div>

          <div
            id="GoToCheckout"
            className="md:w-[33%] absolute top-0 right-0 m-2"
          >
            <div className="p-4 bg-white border">
              <button className="flex items-center justify-center w-full p-3 mt-4 font-semibold text-white bg-blue-600 rounded-full">
                Go to checkout
              </button>

              <div className="flex items-center justify-between mt-4 mb-1 text-sm">
                <span>Items (3)</span>
                <span>£12.99</span>
              </div>
              <div className="flex items-center justify-between mb-4 text-sm">
                <span>Shipping:</span>
                <span>Free</span>
              </div>

              <div className="border-b border-gray-300" />

              <div className="flex items-center justify-between mt-4 mb-1 text-lg font-semibold">
                <span>Subtotal</span>
                <span>£12.99</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <SimilarProducts />
    </MainLayout>
  );
}
