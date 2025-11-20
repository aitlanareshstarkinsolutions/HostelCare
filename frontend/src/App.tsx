import { useState, useEffect } from "react";
import { PrivacyPolicy } from "./components/PrivacyPolicy.tsx";
import { TermsConditions } from "./components/TermsConditions.tsx";
import {HostelCareHome} from "./components/HostelCareHome.tsx"
export default function App() {
  const [currentRoute, setCurrentRoute] = useState("");

  useEffect(() => {
    const handleRouteChange = () => {
      const path = window.location.pathname || "/";
      setCurrentRoute(path);
    };

    handleRouteChange();
    window.addEventListener("popstate", handleRouteChange);
    return () => window.removeEventListener("popstate", handleRouteChange);
  }, []);

  const renderPage = () => {
    switch (currentRoute) {
      case "/privacy":
        return <PrivacyPolicy />;
      case "/terms-conditions":
        return <TermsConditions />;
      default:
        return <HostelCareHome />;
    }
  };

  return <>{renderPage()}</>;
}
