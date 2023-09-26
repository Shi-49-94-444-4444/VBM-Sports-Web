import { createContext, useContext, useState } from "react";

interface StepperContextType {
  userData: string;
  setUserData: React.Dispatch<React.SetStateAction<string>>;
}

const StepperContext = createContext<StepperContextType>({
  userData: "",
  setUserData: () => {},
});

export function UseContextProvider({ 
    children 
}: { 
    children: React.ReactNode 
}) {
  const [userData, setUserData] = useState("");

  return (
    <StepperContext.Provider value={{ userData, setUserData }}>
      {children}
    </StepperContext.Provider>
  );
}

export function useStepperContext() {
  const { userData, setUserData } = useContext(StepperContext);

  return { userData, setUserData };
}