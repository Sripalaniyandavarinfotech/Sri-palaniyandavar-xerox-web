import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import ErrorBoundary from "./components/ErrorBoundary";
import ErrorPage from "./components/ErrorPage";
import Needed from "./components/Needed";
import { NEEDED, NEEDED_BASE } from "./data/needed";
import "./index.css";

// Pages: the home page, /needed (documents needed for each certificate) and
// /needed/<slug>. Any other address (a wrong or old link) gets the 404 page;
// hosts serve the built 404.html for those, which loads this same script.
const path = window.location.pathname.replace(/\/(index\.html)?$/, "").replace(/\/+$/, "");

function route() {
  if (path === "") return <App />;
  if (path === NEEDED_BASE) return <Needed />;
  if (path.startsWith(`${NEEDED_BASE}/`)) {
    const slug = path.slice(NEEDED_BASE.length + 1);
    if (NEEDED.some((n) => n.slug === slug)) return <Needed slug={slug} />;
  }
  return <ErrorPage variant="notfound" />;
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ErrorBoundary>
      {route()}
    </ErrorBoundary>
  </StrictMode>
);
