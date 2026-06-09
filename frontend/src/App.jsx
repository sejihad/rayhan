import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { ThemeProvider } from "./context/ThemeContext";

import Error from "./pages/Error";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
const App = () => {
  return (
    <ThemeProvider>
      <Router>
        <div
          style={{
            background: "radial-gradient(circle at 30% 40%, #0f172a, #020617)",
            minHeight: "100vh",
          }}
        >
          <Header />
          <main
            style={{
              maxWidth: "1400px",
              margin: "0 auto",
              width: "100%",
              position: "relative",
            }}
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<Profile />} />
              <Route path="*" element={<Error />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;
