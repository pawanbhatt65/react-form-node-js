import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./components/Root/RootLayout";
import Home from "./components/Root/Home";
import Contact from "./components/Root/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "/contact", element: <Contact /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
