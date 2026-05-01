import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { useTheme } from "./Utils/ThemeContext";

// Components
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Loader from "./Components/Loader/Loader";
import CustomCursor from "./Components/CustomCursor";
import ScrollProgress from "./Components/ScrollProgress";
import BackToTop from "./Components/BackToTop";
import Home from "./Pages/Home";

function App() {
  const [loading, setLoading] = useState(true);
  const { isDark } = useTheme();

  return (
    <div className={`${isDark ? "dark" : "light"} ${isDark ? "bg-dark text-slate-200" : "bg-light-border text-slate-900"} min-h-screen transition-colors duration-300`}>
      {/* Custom cursor (hidden on touch devices) */}
      <div className="hidden md:block">
        <CustomCursor />
      </div>

      {/* Scroll progress bar */}
      <ScrollProgress />

      {/* Loader */}
      <AnimatePresence>
        {loading && <Loader onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {/* Main content — shown after loader */}
      {!loading && (
        <>
          <Navbar />
          <Home />
          <Footer />
          <BackToTop />
          
        </>
      )}
    </div>
  );
}

export default App;
