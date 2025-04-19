import { ReactNode } from "react";
import poppins from "../../public/fonts/font";

export const Container = ({ children }: { children: ReactNode}) => {
  return (
    <div className={`max-w-[1440px] ${poppins.className}  mx-auto bg-gradient`}>
      {children}
    </div>
  );
};
