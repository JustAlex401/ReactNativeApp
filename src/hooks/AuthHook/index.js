import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const useAuth = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const token = useSelector(state => state?.userReducer?.data?.token);

  useEffect(() => {
    if(token) {
      setIsSignedIn(true);
    } else {
      setIsSignedIn(false);
    }
  }, [token]);

  return isSignedIn;
};

export default useAuth;