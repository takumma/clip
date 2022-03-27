import * as React from "react";
import { SVGProps } from "react";
import { useTheme } from "styled-components";

const LinkIcon = (props: SVGProps<SVGSVGElement>) => {
  const theme = useTheme();
  return (
    <svg
      width={18}
      height={18}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M17 8a1 1 0 0 0-1 1v6a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h6a1 1 0 0 0 0-2H3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V9a1 1 0 0 0-1-1Z"
        fill={theme.primaryColor}
      />
      <path
        d="M13 2h1.6L8.3 8.3a1 1 0 0 0 .3 1.6 1 1 0 0 0 1.1-.2L16 3.4V5a1 1 0 0 0 2 0V1a1 1 0 0 0-1-1h-4a1 1 0 0 0 0 2Z"
        fill={theme.primaryColor}
      />
    </svg>
  );
};

export default LinkIcon;
