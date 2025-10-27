import React, { ReactNode } from "react";

const Tag = ({ children }: { children: ReactNode }) => {
  return (
    <div className="bg-[#e0e7ee] text-[#62748d] px-4 py-2 w-max border-b rounded-md cursor-pointer">
      {children}
    </div>
  );
};

export default Tag;
