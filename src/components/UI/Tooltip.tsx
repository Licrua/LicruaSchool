import { ReactNode } from "react";

function Tooltip({children, text }: {children: ReactNode, text: string}) {
	return ( 
		 <div
          className="tooltip tooltip-top tooltip-custom"
		 data-tip={text}
		>{children}</div>
	 );
}
export default Tooltip
