import React, { useState } from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import About from "./components/About";

const MainLayout = ({ mode, toggleMode, alert }) => (
  <>
    <Navbar
      title="TextCrafts"
      aboutText="About"
      mode={mode}
      toggleMode={toggleMode}
    />
    <Alert alert={alert} />
    <Outlet />
  </>
);

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#171717";
      document.body.style.color = "#fff";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert("Light mode has been enabled", "success");
    }
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout mode={mode} toggleMode={toggleMode} alert={alert} />,
      children: [
        {
          path: "/",
          element: (
            <div className="container">
              <TextForm
                heading="Enter the text to analyze"
                showAlert={showAlert}
                mode={mode}
              />
            </div>
          ),
        },
        {
          path: "about",
          element: <About mode={mode} />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
