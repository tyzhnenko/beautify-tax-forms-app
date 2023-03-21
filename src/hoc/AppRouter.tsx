import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Layout from "../layout";

import AboutPage from "../pages/AboutPage";
import HomePage from "../pages/HomePage";
import FormsPage from "../pages/FormsPage";
import { availableForms } from "../componets/forms";

function AppRouter() {
  const appRoutes = createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<HomePage />} />
      <Route path="about" element={<AboutPage />} />
      <Route path="forms" element={<FormsPage />} />
      {availableForms.map((form) => (
        <Route
          path={`forms/${form.name}`}
          element={<form.component />}
          key={form.name}
        />
      ))}
    </Route>
  );

  const router = createBrowserRouter(appRoutes);

  return <RouterProvider router={router} />;
}

export default AppRouter;