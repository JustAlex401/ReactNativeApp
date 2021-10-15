import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const useAuth = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const {token, error} = useSelector(state => state?.userReducer?.data);

  useEffect(() => {
    if(token && !error) {
      setIsSignedIn(true);
    } else {
      setIsSignedIn(false);
    }
  }, [token]);

  return isSignedIn;
};

export default useAuth;