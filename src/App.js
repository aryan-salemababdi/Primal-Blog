import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';



// Components
import Layout from './Components/layout/Layout';
import AuthorPage from './Components/author/AuthorPage';
import BlogPage from './Components/blog/BlogPage';
import HomePage from './Components/home/HomePage';
import ScrollToTop from './Components/shared/ScrollToTop';


function App() {
  return (
    <>
      <Layout>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blogs/:slug" element={<BlogPage />} />
          <Route path="/authors/:slug" element={<AuthorPage />} />
          <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
