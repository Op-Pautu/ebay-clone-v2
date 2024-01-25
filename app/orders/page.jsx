import MainLayout from "@/components/layouts/MainLayout";
import Link from "next/link";
import { CiDeliveryTruck } from "react-icons/ci";

export default function Orders() {
  const orders = [
    {
      id: 1,
      stripe_id: "1234566",
      name: "Test",
      address: "Test",
      zipcode: "Test",
      city: "Test",
      country: "Test",
      total: 1299,
      orderItem: [
        {
          id: 1,
          title: "Brown Leather Bag",
          url: "https://picsum.photos/id/7",
        },
      ],
    },
  ];
  return (
    <MainLayout>
      <section
        id="OrdersPage"
        className="mt-4 max-w-[1200px] mx-auto px-2 min-h-[50vh]"
      >
        <div className="bg-white w-full p-6 min-h-[150px]">
          <div className="flex items-center text-xl">
            <CiDeliveryTruck className="text-green-500" size={35} />
            <span className="pl-4">Orders</span>
          </div>

          {orders.length < 1 ? (
            <div className="flex items-center justify-center">
              You have no order history
            </div>
          ) : null}

          {orders.map((order) => (
            <div className="text-sm pl-[50px]" key={order?.id}>
              <div className="py-1 border-b">
                <p className="pt-2">
                  <span className="mr-2 font-bold">Stripe ID:</span>{" "}
                  {order?.stripe_id}
                </p>
                <p className="pt-2">
                  <span className="mr-2 font-bold">Delivery Address:</span>{" "}
                  {order?.name}, {order?.address}, {order?.zipcode},{" "}
                  {order?.city}, {order?.country}
                </p>
                <p className="pt-2">
                  <span className="mr-2 font-bold">Total:</span> £
                  {order?.total / 100}
                </p>

                <div className="flex items-center gap-4">
                  {order?.orderItem.map((item) => (
                    <div key={item.id} className="flex items-center">
                      <Link
                        href={"/"}
                        className="py-1 font-bold text-blue-500 hover:underline"
                      >
                        <img
                          src={item.url + "/120"}
                          className="rounded"
                          width="120"
                          alt=""
                        />
                        {item.title}
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </MainLayout>
  );
}
