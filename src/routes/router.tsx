import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Root from "./Root";
import Framer from "./Intro";
import Paths from "./Paths";
import Layout from "./Layout";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route path="setup" element={<Framer />} />
      <Route path="paths" element={<Paths />} />
      <Route path="layout" element={<Layout />} />
    </Route>
  )
);
