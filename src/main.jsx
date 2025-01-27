import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import RootLayout from "./layout/RootLayout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./Pages/Homepage/Homepage";
import ThemesProvider from "./context/ThemesProvider";
import Projects from "./Pages/Projects/Projects";
import AboutMe from "./Pages/AboutMe/AboutMe";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/about-me",
        element: <AboutMe />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemesProvider>
      <RouterProvider router={router} />
    </ThemesProvider>
  </StrictMode>
);
