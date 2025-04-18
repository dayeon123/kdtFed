import App from "./App";
import { createGlobalStyle } from "styled-components";
import ReactDOM from "react-dom/client";
import reset from "styled-reset";

//스타일
const GlobalStyles = createGlobalStyle`
//폰트
@import url("https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap");
//리셋
${reset}
* {
  box-sizing: border-box;
}
:root {
  --light-color: #fff;
  --circle-color: #00a5ff;
}

ul, li {
  list-style: none;
}
a {
  color: inherit;
  text-decoration: none;
}

// 컨텐츠
body {
  width: 100%;
  height: 100vh;
  font-family: "Outfit", sans-serif;
  background: #ccc;
  color: #959595;
}
`;

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <>
    <App />
    <GlobalStyles />
  </>
);
