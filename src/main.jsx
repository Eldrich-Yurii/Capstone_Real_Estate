import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import LoginPage from './backOfficeUi/LoginPage/LoginPage';
import AdminPage from './backOfficeUi/Admin/AdminPage.jsx';
import ClientsTable from './backOfficeUi/Admin/ClientsTable/ClientsTable';
import PropertyManager from './backOfficeUi/Admin/PropertyManager/PropertyManager';
import AccountsManager from './backOfficeUi/Admin/AccountsManager/AccountsManager'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([

  {
    path: "/",
    element: <App />
  },

  {
    path:"/login",
    element: <LoginPage/>
  },

  {
    path:"/admin-dashboard",
    element: <AdminPage/>,
    children:[
      {
        path: "/admin-dashboard",
        element: <ClientsTable/>
      },
      {
        path:'/admin-dashboard/property-manager',
        element: <PropertyManager/>
      },
      {
        path : '/admin-dashboard/accounts-manager',
        element: <AccountsManager/>
      }
    ]
  }

])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <RouterProvider router = {router}/>

);
