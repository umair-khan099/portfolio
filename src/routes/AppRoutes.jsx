import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { AboutPage } from "../pages/AboutPage";
import { WorkPage } from "../pages/WorkPage";
import { ServicesPage } from "../pages/ServicesPage";
import { ContactPage } from "../pages/ContactPage";
import { ProjectDetails } from "../pages/ProjectDetails";
import { NotFound } from "../pages/NotFound";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/work" element={<WorkPage />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/project/:projectId" element={<ProjectDetails />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
