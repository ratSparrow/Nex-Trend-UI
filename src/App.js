import { RouterProvider } from "react-router-dom";
import router from "./components/Routes/Routes/Routes";


function App() {
  return (
    <div className="">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
