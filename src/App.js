import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { PageTitleProvider } from './context/PageTitleContext';
import Layout from './components/Layout';

// Lazy-loaded components
const Home = lazy(() => import('./pages/Home'));
const Education = lazy(() => import('./pages/Education'));
const Projects = lazy(() => import('./pages/Projects'));
const Contact = lazy(() => import('./pages/Contact'));
const Skills = lazy(() => import('./pages/Skills')); // Fixed capitalization

const App = () => {
  return (
    <PageTitleProvider>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="education" element={<Education />} />
            <Route path="projects" element={<Projects />} />
            <Route path="contact" element={<Contact />} />
            <Route path="skills" element={<Skills />} /> {/* Corrected component name */}
          </Route>
        </Routes>
      </Suspense>
    </PageTitleProvider>
  );
};

export default App;
/ /   A d d e d   c o m m e n t   f o r   c l a r i t y  
 c o n s o l e . l o g ( ' T e s t i n g   c o m p l e t e ' ) ;  
 