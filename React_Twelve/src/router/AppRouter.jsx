import React, { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router";
import Layout from "../layouts/Layout";

const ProductCatalog = lazy(() => import("../pages/ProductCatalog"));
const About = lazy(() => import("../pages/About"));
const Contact = lazy(() => import("../pages/Contact"));

const LoadingSpinner = () => {
  return (
    <div className="flex min-h-[400px] items-center justify-center">
      <div className="flex flex-col items-center gap-4 animate-pulse">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-zinc-200 border-t-violet-600"></div>
        <span
          className="text-[10px] font-semibold tracking-[0.2em] text-zinc-400 uppercase"
          style={{ fontFamily: "Plus Jakarta Sans" }}
        >
          Loading NOVA
        </span>
      </div>
    </div>
  );
};

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <ProductCatalog />
          </Suspense>
        ),
      },
      {
        path: "about",
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "contact",
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <Contact />
          </Suspense>
        ),
      },
      {
        path: "contant",
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <Contact />
          </Suspense>
        ),
      },
    ],
  },
]);
