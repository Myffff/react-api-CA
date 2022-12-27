import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import "./App.css";
import Header from "./components/Header";
import SimpleBottomNavigation from "./components/MainNav";
import Movies from "./Pages/Movies/index";
import Series from "./Pages/Series/index";
import Trending from "./Pages/Trending";
import Search from "./Pages/Search/index";
import People from "./Pages/People";
import Setting from "./Pages/Setting";
import MaterialUISwitch from "./components/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import AuthProvider from "./contexts/authcontext";

const App = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 360000,
        refetchInterval: 360000,
        refetchOnWindowFocus: false,
      },
    },
  });

  const [color, setColor] = useState("#39445a");
  const [checked, setChecked] = useState(true);
  const handleChange = (event) => {
    setChecked(event.target.checked);
    if (color === "#39445a") {
      setColor("#d2c3b0");
    } else {
      setColor("#39445a");
    }
  };

  return (
    <div style={{ backgroundColor: color }}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <AuthProvider>
            <Header />
            <FormControlLabel
              control={<MaterialUISwitch />}
              checked={checked}
              onChange={handleChange}
              sx={{ marginTop: "100px", marginLeft: "20px" }}
            />
            <Routes>
              <Route path="/" element={<Trending />} />
              <Route path="/setting" element={<Setting />} />
              <Route path="/movies" element={<Movies />} />
              <Route path="/series" element={<Series />} />
              <Route path="/search" element={<Search />} />
              <Route path="/people" element={<People />} />
              {/* add some more */}
            </Routes>
            <SimpleBottomNavigation />
          </AuthProvider>
        </BrowserRouter>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </div>
  );
};

const rootElement = createRoot(document.getElementById("root"));
rootElement.render(<App />);
