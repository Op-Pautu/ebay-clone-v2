const useUserAddress = async () => {
  try {
    let response = await fetch("/api/address/get");

    if (response.ok) {
      let data = await response.json();
      return data || null; // Return data or null if no data is available
    } else {
      console.error(`Error fetching user address. Status: ${response.status}`);
      return null;
    }
  } catch (error) {
    console.error("Error during fetch:", error);
    return null;
  }
};

export default useUserAddress;
