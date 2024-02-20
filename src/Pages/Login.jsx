import { useContext } from "react";
import { UserContext } from "../Context/UserContext";
import { auth } from "../firebaseConfig";
import OTPInput from "react-otp-input";
import { NavLink, useNavigate } from "react-router-dom";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

function Login() {
  const navigate = useNavigate();
  const { number, setNumber, setShowOtp, showOtp, otp, setOtp, user, setUser } =
    useContext(UserContext);

  const onSignup = async (e) => {
    e.preventDefault();
    const formattedNumber = "+" + number;
    const appVerifier = new RecaptchaVerifier(auth, "recaptcha", {});
    try {
      const confirmationResult = await signInWithPhoneNumber(
        auth,
        formattedNumber,
        appVerifier
      );
      console.log(confirmationResult);
      setUser(confirmationResult);
      setShowOtp(true);
    } catch (error) {
      console.log(error);
    }
    console.log(formattedNumber);
  };

  const onVerify = async () => {
    try {
      const data = await user.confirm(otp);
      console.log(data);
      navigate("/user/dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="logincontainer">
      <div className="navbarlogin">Nursing Care</div>
      {showOtp ? (
        <div>
          <div className="otpform">
            <h1>Enter the 6-digit code sent to you </h1>
            <OTPInput
              value={otp}
              onChange={setOtp}
              numInputs={6}
              renderSeparator={<span> </span>}
              renderInput={(props) => <input {...props} />}
              inputStyle={{
                width: "3vw",
                height: "3vw",
                margin: "4px",
                fontSize: "20px",
                borderRadius: "5px",
                border: "1px solid black",
                textAlign: "center",
              }}
            />
            <button type="submit" className="loginbtn" onClick={onVerify}>
              Verify
            </button>
            <p>Resend OTP</p>
          </div>
        </div>
      ) : (
        <div>
          <div className="loginform">
            <h1>{`What's your phone number ?`}</h1>
            <form>
              <div>
                <PhoneInput
                  country={"in"}
                  value={number}
                  onChange={setNumber}
                />
              </div>
              <div id="recaptcha"></div>
              <button type="submit" className="loginbtn" onClick={onSignup}>
                Continue
              </button>
            </form>
            <p>or</p>
            <NavLink to="/signup" className="signupbtn">
              Sign Up
            </NavLink>
          </div>
        </div>
      )}
    </div>
  );
}
export default Login;
