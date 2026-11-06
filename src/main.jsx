import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import ErrorBoundary from "./components/ErrorBoundary";
import ErrorPage from "./components/ErrorPage";
import "./index.css";

// The site is a single page. Any other address (a wrong or old link) gets the
// 404 page; hosts serve the built 404.html for those, which loads this same script.
const path = window.location.pathname.replace(/\/+$/, "");
const isHome = path === "" || path === "/index.html";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ErrorBoundary>
      {isHome ? <App /> : <ErrorPage variant="notfound" />}
    </ErrorBoundary>
  </StrictMode>
);
