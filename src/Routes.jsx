import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const About = React.lazy(() => import("pages/About"));
const Newsletter = React.lazy(() => import("pages/Newsletter"));
const Projects = React.lazy(() => import("pages/Projects"));
const BlogDetailBlog = React.lazy(() => import("pages/BlogDetailBlog"));
const LigthMode = React.lazy(() => import("pages/LigthMode"));
const Theme = React.lazy(() => import("pages/Theme"));
const Cover = React.lazy(() => import("pages/Cover"));
const TheBlog = React.lazy(() => import("pages/TheBlog"));
const DarkMode = React.lazy(() => import("pages/DarkMode"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<DarkMode />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/theblog" element={<TheBlog />} />
          <Route path="/cover" element={<Cover />} />
          <Route path="/theme" element={<Theme />} />
          <Route path="/ligthmode" element={<LigthMode />} />
          <Route path="/blogdetailblog" element={<BlogDetailBlog />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/newsletter" element={<Newsletter />} />
          <Route path="/about" element={<About />} />
          <Route path="/dhiwise-dashboard" element={<Home />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
