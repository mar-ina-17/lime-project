import { injectGlobal } from "@emotion/css";

const backgroundColor = "#DDEFE3";

injectGlobal`
.app, html {
    margin: 0;
    padding: 0;
    background-color: ${backgroundColor};
    font-family: Arial, sans-serif;
  }
`;
