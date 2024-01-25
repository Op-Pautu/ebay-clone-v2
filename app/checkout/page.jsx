import CheckoutItem from "@/components/CheckoutItem";
import MainLayout from "@/components/layouts/MainLayout";

export default function CheckoutPage() {
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
      <section id="CheckoutPage" className="mt-4 max-w-[1100px] mx-auto">
        <h1 className="mt-4 mb-4 text-2xl font-bold">Checkout</h1>

        <div className="relative flex items-baseline justify-between w-full gap-4 mx-auto">
          <div className="w-[65%]">
            <div className="p-4 bg-white border rounded-lg">
              <h2 className="mb-2 text-xl font-semibold">Shipping Address</h2>

              <ul className="mt-2 text-sm">
                <li>Name: John</li>
                <li>Adrress: Parie</li>
                <li>Zipcode: 10121</li>
                <li>City: Sistanaem</li>
                <li>Country: 2007</li>
              </ul>
            </div>

            <div className="mt-4 bg-white rounded-lg" id="Items">
              <CheckoutItem key={product.id} product={product} />
            </div>
          </div>

          <div
            id="PlaceOrder"
            className="relative -top-[6px] w-[35%] border rounded-lg"
          >
            <div className="p-4">
              <div className="flex items-baseline justify-between mb-1 text-sm">
                <span>Items (3)</span>
                <span>£12.99</span>
              </div>
              <div className="flex items-center justify-between mb-4 text-sm">
                <span>Shipping:</span>
                <span>Free</span>
              </div>

              <div className="border-t" />

              <div className="flex items-center justify-between my-4">
                <span className="font-semibold">Order total</span>
                <span className="text-2xl font-semibold">£12.99</span>
              </div>

              <form>
                <div
                  className="p-2 border border-gray-500 rounded-sm"
                  id="card-element"
                />
                <p
                  id="card-error"
                  role="alert"
                  className="relative font-semibold text-center text-red-700 top-2"
                />

                <button
                  className="w-full p-3 mt-4 text-lg font-semibold text-white bg-blue-600 rounded-full"
                  type="submit"
                >
                  Confirm and pay
                </button>
              </form>
            </div>
            <div className="flex items-center justify-center gap-2 p-4 border-t">
              <img src={"/images/logo.svg"} width={50} alt="" />
              <div className="mt-2 mb-2 font-light">MONEY BACK GUARANTEE</div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
