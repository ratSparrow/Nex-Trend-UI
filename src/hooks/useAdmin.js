import { useEffect, useState } from "react";

const useAdmin = (email) => {
  const [isUserAdmin, setIsUserAdmin] = useState("");
  const [adminLoading, setAdminLoading] = useState(true);
  useEffect(() => {
    setAdminLoading(true);
    if (email) {
      fetch(`https://e-server-eta.vercel.app/users/admin/${email}`)
        .then((res) => res.json())
        .then((data) => {
          setIsUserAdmin(data.isAdmin);
          setAdminLoading(false);
        });
    }
  }, [email]);
  return [isUserAdmin, adminLoading];
};
export default useAdmin;
