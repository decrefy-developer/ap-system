import { lazy, Suspense } from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
import LoginLayout from "./components/layout/LoginLayout";
import LoginPage from "./pages/LoginPage";
import NotFoundPage from "./pages/NotFoundPage";
import MainLayout from "./components/layout/MainLayout";
import ProtectedRoute from "./components/ProtectedRoute";
import Skelton from "./components/Skeleton";

const HomePage = lazy(() => import("./pages/HomePage"));

export const router = createBrowserRouter([
  {
    path: "",
    element: <LoginLayout />,
    children: [
      { path: "/", element: <LoginPage /> },
      { path: "*", element: <Navigate to="/404" /> },
      { path: "404", element: <NotFoundPage /> },
    ],
  },
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "home",
        element: (
          <Suspense fallback={<Skelton />}>
            <ProtectedRoute element={<HomePage />} />
          </Suspense>
        ),
      },
    ],
  },
]);
