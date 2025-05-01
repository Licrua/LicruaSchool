import { ReactNode } from "react";
import poppins from "../../public/fonts/font";

export const Container = ({ children }: { children: ReactNode}) => {
  return (
    <div className={`${poppins.className}  mx-auto bg-gradient`}>
      {children}
    </div>
  );
};
