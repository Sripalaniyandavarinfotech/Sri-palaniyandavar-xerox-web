import { Component } from "react";
import ErrorPage from "./ErrorPage";

// If any part of the site throws while rendering, show a friendly page with
// reload and contact options instead of a blank screen.
export default class ErrorBoundary extends Component {
  state = { failed: false };

  static getDerivedStateFromError() {
    return { failed: true };
  }

  componentDidCatch(error, info) {
    console.error("Site crashed:", error, info?.componentStack);
  }

  render() {
    return this.state.failed ? <ErrorPage variant="crash" /> : this.props.children;
  }
}
