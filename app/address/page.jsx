import TextInput from "@/components/TextInput";
import MainLayout from "@/components/layouts/MainLayout";
import React from "react";

export default function Address() {
  return (
    <MainLayout>
      <section id="AddressPage" className="mt-4 max-w-[600px] mx-auto px-2">
        <div className="p-3 mx-auto bg-white rounded-lg">
          <h2 className="mb-2 text-xl text-bold">Address Details</h2>

          <form>
            <div className="mb-4">
              <TextInput
                className="w-full"
                string={"TEST"}
                placeholder={"Name"}
              />
            </div>

            <button className="w-full p-3 mt-6 text-lg font-semibold text-white bg-blue-600 rounded">
              Update Address
            </button>
          </form>
        </div>
      </section>
    </MainLayout>
  );
}
