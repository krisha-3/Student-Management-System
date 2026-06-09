import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router";
import App from "./App.jsx";
import Layout from "./Layout.jsx";
import Students from "./pages/Students.jsx"
import Dashboard from "./pages/Dashboard.jsx"
import AddStudent from "./pages/AddStudent.jsx"
import EditStudent from "./pages/EditStudent.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Dashboard />} />
      <Route path="students" element={<Students />} />
      <Route path="students/add" element={<AddStudent />} />
      <Route path="/students/edit/:id" element={<EditStudent />} />
    </Route>,
  ),
);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
);
