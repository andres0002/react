// js
// react
import { lazy, Suspense } from 'react';
// third
// own
import './App.css'
import { routes } from './utils/routes.jsx';
import { Router } from './components/Router';
import { Route } from './components/Route.jsx';
// import Page404 from './pages/Page404.jsx'; // import static.
// import HomePage from './pages/HomePage.jsx'; // import static.
// import AboutPage from './pages/AboutPage.jsx'; // import static.
const Page404 = lazy(() => import('./pages/Page404.jsx')); // import dinamic.
const HomePage = lazy(() => import('./pages/HomePage.jsx')); // import dinamic.
const AboutPage = lazy(() => import('./pages/AboutPage.jsx')); // import dinamic.

function App() {
  return (
    <main>
      <Suspense fallback={<div>Loading...</div>}>
        <Router routes={routes} defaultComponent={Page404}>
          <Route path='/' Component={HomePage} />
          <Route path='/about' Component={AboutPage} />
        </Router>
      </Suspense>
    </main>
  )
}


// exports.
export default App;