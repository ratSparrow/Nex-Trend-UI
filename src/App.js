import { RouterProvider } from "react-router-dom";
import router from "./components/Routes/Routes/Routes";

function App() {
  return (
    <div className="max-w-[1200px] mx-auto">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
