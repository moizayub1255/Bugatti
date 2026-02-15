import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Add a small delay to ensure page transition starts
    const timer = setTimeout(() => {
      // Try multiple scroll targets for compatibility
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
      });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }, 100);

    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
}
