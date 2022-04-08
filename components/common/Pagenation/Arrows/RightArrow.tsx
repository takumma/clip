import * as React from "react";
import { SVGProps } from "react";
import { useTheme } from "styled-components";

const RightArrow = (props: SVGProps<SVGSVGElement>) => {
  const theme = useTheme();
  return (
    <svg
      width={8}
      height={12}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="m1.414 11.414 5.707-5.707L1.414 0 0 1.414l4.293 4.293L0 10l1.414 1.414Z"
        fill={theme.primaryColor}
      />
    </svg>
  );
};

export default RightArrow;
