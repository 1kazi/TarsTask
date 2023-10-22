import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./Pages";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.scss";
const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
  ]);
  return (
    <div className="test">
     
        <RouterProvider router={router} />
 
    </div>
  );
};

export default App;
