import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { ProjectPage } from "./routes";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/project/:projectName", element: <ProjectPage /> },
]);

export { router };
