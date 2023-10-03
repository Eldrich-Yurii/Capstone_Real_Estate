import React from "react";
import { Typography, List, ListItem, ListItemPrefix, ListItemSuffix, Chip, Accordion, AccordionHeader, AccordionBody,
} from "@material-tailwind/react";
import { PresentationChartBarIcon, Cog6ToothIcon, InboxIcon, PowerIcon, } from "@heroicons/react/24/solid";
import { PiBuildingsFill } from 'react-icons/pi'
import Logo from './img/LOGO-NAME.svg'
import { Link, Outlet } from "react-router-dom";


const AdminPage = () => {

  return (
    <>
      <div id="admin" className="h-screen bg-gray-50">
          <aside className=" h-screen w-full max-w-[20rem] p-4 bg-white shadow-2xl  ">
            <div className="mb-2 p-4">
              <img src={Logo} alt="" width={100} />
            </div>
            <List>
              {/* List Of Client CRUD  */}
                <ListItem>
                  <ListItemPrefix>
                    <PiBuildingsFill className="h-5 w-5 text-purple-500" />
                  </ListItemPrefix>
                    <Link to="/admin-dashboard">Clients Pond</Link>
                </ListItem> 
              {/* List Of Properties CRUD  */}
                <ListItem>
                  <ListItemPrefix>
                    <PiBuildingsFill className="h-5 w-5 text-purple-500" />
                  </ListItemPrefix>
                    <Link to="/admin-dashboard/property-manager">Real Estate Management</Link>
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
                Log Out
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
