import React from "react";
import { useState, useEffect } from "react";
import { List, ListItem, ListItemPrefix, ListItemSuffix, Chip, Accordion, AccordionHeader, AccordionBody,
} from "@material-tailwind/react";
import { PresentationChartBarIcon, Cog6ToothIcon, InboxIcon, PowerIcon, } from "@heroicons/react/24/solid";
import { PiBuildingsFill } from 'react-icons/pi'
import { FaThList, FaImages } from 'react-icons/fa'
import { FaLocationDot } from 'react-icons/fa6'
import Logo from './img/LOGO-NAME.svg'
import { Link, Outlet, useNavigate } from "react-router-dom";



const AdminPage = () => {


  const [auth, setAuth] = useState(localStorage.getItem('userType'));
  const navigate = useNavigate();

  useEffect(() => {
      if (auth !== 'admin') {
          navigate('/');
      }
  }, [auth, navigate]);

  const logOut = () => {
      localStorage.removeItem('userType');
      navigate('/');
  };

  return (
    <>
      <div className="bg-gray-300">
          <aside className=" h-[710px]  w-full max-w-[20rem] p-4 bg-white shadow-2xl  ">
            <div className="mb-2 p-4">
              <img src={Logo} alt="" width={100} />
            </div>
            <List>
              {/* List Of Client CRUD  */}
                <ListItem>
                  <ListItemPrefix>
                    <PresentationChartBarIcon className="h-5 w-5 text-purple-500" />
                  </ListItemPrefix>
                    <Link to="/admin-dashboard">Admin Dashboard</Link>
                </ListItem> 
              {/* List Of Client CRUD  */}
                <ListItem>
                  <ListItemPrefix>
                    <FaThList className="h-5 w-5 text-purple-500" />
                  </ListItemPrefix>
                    <Link to="/admin-dashboard/clients-table">Clients Pond</Link>
                </ListItem> 
                
              {/* List Of Properties CRUD  */}
                <ListItem>
                  <ListItemPrefix>
                    <PiBuildingsFill className="h-5 w-5 text-purple-500" />
                  </ListItemPrefix>
                    <Link to="/admin-dashboard/property-manager">Real Estate Management</Link>
                </ListItem>

              {/* List Of Locations  */}
                <ListItem>
                  <ListItemPrefix>
                    <FaLocationDot className="h-5 w-5 text-purple-500" />
                  </ListItemPrefix>
                    <Link to="/admin-dashboard/locations">Locations</Link>
                </ListItem>

              {/* List Of Properties CRUD  */}
                <ListItem>
                  <ListItemPrefix>
                    <FaImages className="h-5 w-5 text-purple-500" />
                  </ListItemPrefix>
                    <Link to="/admin-dashboard/property-images">Property Images</Link>
                </ListItem>

              {/* Management of Account of the Admin */}
              <ListItem>
                <ListItemPrefix>
                  <Cog6ToothIcon className="h-5 w-5 text-purple-500" />
                </ListItemPrefix>
                  <Link to="/admin-dashboard/accounts-manager">Accounts Manager</Link>
              </ListItem>
              <hr />
              {/* Log out */}
              <ListItem>
                <ListItemPrefix>
                  <PowerIcon className="h-5 w-5 text-red-700" />
                </ListItemPrefix>
               <button onClick={() => logOut()}>Log Out</button>
              </ListItem>
            </List>
          </aside>

          <div>
            <Outlet />
          </div>
      </div> 

    
    </>
  )
}

export default AdminPage
