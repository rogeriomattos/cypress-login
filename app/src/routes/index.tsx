import React from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import { ProtectedRoute } from "../components/ProtectedRoute";
import { AuthLayout } from "../components/AuthLayout";

export const routers = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<AuthLayout />}>
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      />
      <Route path="/login" element={<Login />} />
    </Route>
  )
);
