"use client";

import TextInput from "@/components/TextInput";
import MainLayout from "@/components/layouts/MainLayout";
import { useUser } from "@/context/user";
import useIsLoading from "@/hooks/useIsLoading";
import useUserAddress from "@/hooks/useUserAddress";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function Address() {
  const router = useRouter();
  const { user } = useUser();

  const [addressId, setAddressId] = useState(null);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [isUpdatingAddress, setIsUpdatingAddress] = useState(false);
  const [error, setError] = useState({});

  const showError = (type) => {
    if (Object.entries(error).length > 0 && error?.type === type) {
      return error.message;
    }

    return "";
  };

  const getAddress = async () => {
    if (user?.id == null || user?.id == undefined) {
      useIsLoading(false);
      return;
    }

    const response = await useUserAddress();

    if (response) {
      setTheCurrentAddress(response);
      useIsLoading(false);
      return;
    }

    useIsLoading(false);
  };

  useEffect(() => {
    useIsLoading(true);
    getAddress();
  }, [user]);

  const setTheCurrentAddress = (result) => {
    setAddressId(result.id);
    setName(result.name);
    setAddress(result.address);
    setZipcode(result.zipcode);
    setCity(result.city);
    setCountry(result.country);
  };

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
