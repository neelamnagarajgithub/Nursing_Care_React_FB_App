import { createContext, useState } from "react";

const UserContext = createContext();

function UserProvider({ children }) {
  const [otp, setOtp] = useState("");
  const [user, setUser] = useState(null);
  const [number, setNumber] = useState("");
  const [showOtp, setShowOtp] = useState(false);
  const [isLoggedin, setIsLoggedin] = useState(false);
  return (
    <UserContext.Provider
      value={{
        number,
        setNumber,
        showOtp,
        setShowOtp,
        otp,
        setOtp,
        user,
        setUser,
        isLoggedin,
        setIsLoggedin,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export { UserProvider, UserContext };
