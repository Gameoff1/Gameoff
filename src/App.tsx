/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { lazy, Suspense } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import AnnouncementBar from './components/AnnouncementBar';

const Categories = lazy(() => import('./components/Categories'));
const About = lazy(() => import('./components/About'));
const Features = lazy(() => import('./components/Features'));
const Location = lazy(() => import('./components/Location'));

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-brand-green selection:text-white">
      <AnnouncementBar />
      <Navbar />
      <main>
        <Hero />
        <Suspense fallback={<div className="h-64 flex items-center justify-center"><div className="w-8 h-8 border-4 border-brand-green border-t-transparent rounded-full animate-spin"></div></div>}>
          <Categories />
          <About />
          <Features />
          <Location />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
