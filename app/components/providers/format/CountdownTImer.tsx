"use client"

import { GlobalContext } from "@/contexts";
import { forgotPasswordService } from "@/services/forgotPassword";
import { sendOTP } from "@/utils/sendOTP";
import { useState, useEffect, useContext } from "react";
import { toast } from "react-toastify";

interface CountdownTimerProps {
  initialMinutes: number;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ initialMinutes }) => {
  const [timeLeft, setTimeLeft] = useState(initialMinutes * 60);
  const [isReset, setIsReset] = useState(false); // Add isReset state
  const { setIsLoading } = useContext(GlobalContext) || {}


  useEffect(() => {
    const timerInterval = setInterval(() => {
      if (timeLeft > 0 && !isReset) { // Check isReset flag
        setTimeLeft((prevTime) => prevTime - 1);
      } else {
        clearInterval(timerInterval);
      }
    }, 1000);

    return () => {
      clearInterval(timerInterval);
    };
  }, [timeLeft, isReset]); // Include isReset in the dependency array

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  const handleReset = async () => {
    if (setIsLoading) setIsLoading(true)

    const email = JSON.parse(localStorage.getItem("email")!)
    const res = await forgotPasswordService({ email: email })
    localStorage.setItem("otp", JSON.stringify(res.token))
    const result = await sendOTP(email, res.token)

    if (result.success) {
      toast.success(res.message, {
        position: toast.POSITION.TOP_RIGHT,
      })

      setTimeLeft(initialMinutes * 60);
      setIsReset(true);

      if (setIsLoading) setIsLoading(false)
    } else {
      toast.error(res.message), {
        position: toast.POSITION.TOP_RIGHT
      }
      if (setIsLoading) setIsLoading(false)
    }
  };

  return (
    <div className="text-lg font-normal text-white">
      Thời gian còn lại: {minutes < 10 ? `0${minutes}` : minutes}:
      {seconds < 10 ? `0${seconds}` : seconds}
      <button
        onClick={handleReset}
        type="button"
        className="hover:underline cursor-pointer text-white font-semibold ml-3"
      >
        Gửi lại mã OTP
      </button>
    </div>
  );
};

export default CountdownTimer;
