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
import DefaultLayout from "../components/DefaultLayout";

export const routers = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<AuthLayout />}>
      <Route element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
      </Route>

      <Route path="/login" element={<Login />} />
    </Route>
  )
);
