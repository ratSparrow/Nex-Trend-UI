import { useEffect, useState } from "react";

const useVendor = (email) => {
  const [isVendor, setIsVendor] = useState("");
  const [vendorLoading, setVendoLoading] = useState(true);

  useEffect(() => {
    console.log(email);
    setVendoLoading(true);
    if (email) {
      fetch(`https://e-server-eta.vercel.app/user/vendor/${email}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setIsVendor(data.isVendor);
          setVendoLoading(false);
        });
    }
  }, [email]);
  return [isVendor, vendorLoading];
};

export default useVendor;
