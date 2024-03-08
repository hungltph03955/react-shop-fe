import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { CmsRoutes } from "./routes/CmsRoutes";
// import CmsRoutes from "./routes/CmsRoutes";

function App() {
  return <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navigate tp="cms"/>} />
    </Routes>
    <CmsRoutes />
  </BrowserRouter>;
}

export default App
