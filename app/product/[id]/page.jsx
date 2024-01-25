import SimilarProducts from "@/components/SimilarProducts";
import MainLayout from "@/components/layouts/MainLayout";

export default function ProductPage({ params }) {
  const product = {
    id: 1,
    title: "Brown Leather Bag",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.  It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    url: "https://picsum.photos/id/7",
    price: 2500,
  };

  return (
    <>
      <MainLayout>
        <section className="max-w-[1200px] mx-auto">
          <div className="flex px-4 py-10">
            {product?.url ? (
              <img className="w-[40%] rounded-lg" src={product?.url + "/280"} />
            ) : (
              <div className="w-[40%]"></div>
            )}

            <div className="w-full px-4">
              <p className="text-xl font-bold">{product?.title}</p>
              <p className="pt-2 text-sm text-gray-700">
                Brand New - Full Warranty
              </p>

              <div className="py-1 border-b" />

              <div className="pt-3 pb-2">
                <p className="flex items-center">
                  Condition:
                  <span className="font-bold text-[17px] ml-2">New</span>
                </p>
              </div>

              <div className="py-1 border-b" />

              <div className="pt-3">
                <div className="flex items-center justify-between w-full">
                  <p className="flex items-center">
                    Price:
                    {product?.price && (
                      <span className="font-bold text-[20px] ml-2">
                        GBP £{(product?.price / 100).toFixed(2)}
                      </span>
                    )}
                  </p>

                  <button className="text-white py-2 px-20 rounded-full cursor-pointer bg-[#3498C9]">
                    Add To Cart
                  </button>
                </div>
              </div>
              <div className="py-1 border-b" />

              <div className="pt-3">
                <h4 className="pb-1 font-semibold">Description:</h4>
                <p className="text-sm text-justify">{product?.description}</p>
              </div>
            </div>
          </div>
        </section>

        <SimilarProducts />
      </MainLayout>
    </>
  );
}
