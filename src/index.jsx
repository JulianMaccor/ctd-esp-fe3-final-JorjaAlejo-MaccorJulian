import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { ContextProvider, router } from 'Components/utils';
import './index.css';
import './extra.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ContextProvider>
      <RouterProvider router={router} />
    </ContextProvider>
);

