import { RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./pages/about/About";
import Home from "./pages/home/Home";
import FaqPage from "./pages/FaqPage/FaqPage";
import RootLayout from "./pages/RootLayout";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { index: true, element: <Home /> },
        { path: "about", element: <About /> },
        { path: "faq", element: <FaqPage /> },
      ],
    },
  ]);
  return (
    <div className="">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
