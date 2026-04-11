import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './layout/RootLayout.jsx';
import Homepage from './page/homepage/Homepage.jsx';
import AppPage from './page/apps/App.jsx';
import Install from './page/installApps/Install.jsx';
import NotFoundPage from './page/notFoundpage/NotFoundPage.jsx';
import AppDetails from './page/apps/detailsApp/AppDetails.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
      { path: '/app', element: <AppPage /> },
      { path: '/installedApps', element: <Install /> },
      { path: '/apps/:id', element: <AppDetails /> },
    ],
  },

  { path: '*', errorElement: <NotFoundPage /> },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
