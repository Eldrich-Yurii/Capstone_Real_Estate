import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import LoginPage from './backOfficeUi/LoginPage/LoginPage';
import AdminDashboard from './backOfficeUi/Admin/AdminDashboard/AdminDashboard';
import ClientsTable from './backOfficeUi/Admin/ClientsTable/ClientsTable';
import PropertyManager from './backOfficeUi/Admin/PropertyManager/PropertyManager';
import PropertyImages from './backOfficeUi/Admin/PropertyManager/PropertyImages';
import AccountsManager from './backOfficeUi/Admin/AccountsManager/AccountsManager'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import AdminPage from './backOfficeUi/Admin/AdminPage';

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
        element: <AdminDashboard/>
      },
      {
        path: "/admin-dashboard/clients-table",
        element: <ClientsTable/>
      },
      {
        path:'/admin-dashboard/property-manager',
        element: <PropertyManager/>
      },
      {
        path:'/admin-dashboard/property-images',
        element: <PropertyImages/>
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
