import { css } from "linaria";

export const globalStyles = css`
  :global() {
    html,
    body {
      padding: 0;
      margin: 0;
      font-family: "Noto Sans JP", sans-serif;
    }

    a {
      color: inherit;
      text-decoration: none;
    }

    * {
      box-sizing: border-box;
    }
  }
`;
