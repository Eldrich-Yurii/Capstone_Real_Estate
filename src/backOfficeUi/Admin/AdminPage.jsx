import React from "react";
import { Typography, List, ListItem, ListItemPrefix, ListItemSuffix, Chip, Accordion, AccordionHeader, AccordionBody,
} from "@material-tailwind/react";
import { PresentationChartBarIcon, Cog6ToothIcon, InboxIcon, PowerIcon, } from "@heroicons/react/24/solid";
import { ChevronRightIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import { PiBuildingsFill } from 'react-icons/pi'
import { BiTrip } from 'react-icons/bi'
import { SiSpond } from 'react-icons/si'
import { FaFileContract } from 'react-icons/fa'
import { BsGraphUpArrow, BsFillPersonPlusFill } from 'react-icons/bs'
import Logo from './img/LOGO-NAME.svg'

const AdminPage = () => {

  const [open, setOpen] = React.useState(0);
 
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <>
    <div id="admin" className="bg-blue-gray-50">
        <div className="h-screen w-full max-w-[20rem] p-4 bg-white shadow-2xl  ">
          <div className="mb-2 p-4">
            <img src={Logo} alt="" width={100} />
          </div>
          <List>
            <Accordion open={open === 1} icon={<ChevronDownIcon strokeWidth={2.5} className={`mx-auto h-4 w-4 transition-transform ${open === 1 ? "rotate-180" : ""}`}/>}>
              
              {/* List Of Clients CRUD */}
              <ListItem className="p-0" selected={open === 1}>
                <AccordionHeader onClick={() => handleOpen(1)} className="border-b-0 p-3">
                  <ListItemPrefix>
                    <PresentationChartBarIcon className="h-5 w-5" />
                  </ListItemPrefix>
                  <Typography  className="mr-auto font-normal">
                    List Of Inquiries
                  </Typography>
                </AccordionHeader>
              </ListItem>  
                <AccordionBody className="py-1">
                  <List className="p-0">
                    {/* Main Leads */}
                    <ListItem>
                      <ListItemPrefix>
                        <SiSpond strokeWidth={5} className="h-3 w-5" />
                      </ListItemPrefix>
                      Lead Pond
                    </ListItem>

                    {/* Sub Categories */}
                    {/* Potential Buyers/Undecided */}
                    <ListItem>
                      <ListItemPrefix>
                        <BsFillPersonPlusFill strokeWidth={5} className="h-3 w-5" />
                      </ListItemPrefix>
                      Potential Client
                    </ListItem>

                    {/* Scheduled for tripping */}
                    <ListItem>
                      <ListItemPrefix>
                        <BiTrip strokeWidth={5} className="h-3 w-5" />
                      </ListItemPrefix>
                      Occular/Site Visit
                    </ListItem>
                    <ListItem>
                      <ListItemPrefix>
                        <FaFileContract strokeWidth={5} className="h-3 w-5" />
                      </ListItemPrefix>
                    Contract Signing
                    </ListItem>

                    {/* Complete Requirements/Waiting for Turnover */}
                    <ListItem>
                      <ListItemPrefix>
                        <BsGraphUpArrow strokeWidth={5} className="h-3 w-5" />
                      </ListItemPrefix>
                      Turnover
                    </ListItem>
                  </List>
                </AccordionBody>
              </Accordion>

              {/* List Of Properties CRUD  */}
                  <ListItem>
              <ListItemPrefix>
                <PiBuildingsFill className="h-5 w-5" />
              </ListItemPrefix>
              Real Estate Management
              <ListItemSuffix>
              </ListItemSuffix>
            </ListItem>
            {/* Management of Account of the Admin */}
            <ListItem>
              <ListItemPrefix>
                <Cog6ToothIcon className="h-5 w-5" />
              </ListItemPrefix>
              Accounts Manager
            </ListItem>
            
            <hr />

            {/* Log out */}
            <ListItem>
              <ListItemPrefix>
                <PowerIcon className="h-5 w-5" />
              </ListItemPrefix>
              Log Out
            </ListItem>
          </List>
        </div>
    </div>
    </>
  )
}

export default AdminPage
