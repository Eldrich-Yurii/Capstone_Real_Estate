import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Search from '../Search/Search';
import Bg from './img/bg1.jpg';
import Logo from './img/LOGO-NAME.svg';
import { Link, Outlet, useNavigate } from "react-router-dom";


// const navigation = [
//   { name: 'Home', href: '#home' },
//   { name: 'Properties', href: '#properties' },
//   { name: 'Developers', href: '#developers' },
//   { name: 'About Agent', href: '#agent'},
//   { name: 'FAQs', href: '#faqs' },
// ]

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div id='home'>
      <img src={Bg} alt="" className='fixed:top brightness-75'/>
      <header className="absolute inset-x-0 top-0">
        <nav className="flex items-center justify-between px-5 pt-6 lg:px-8 " aria-label="Global">
          <div className="flex lg:flex-1">
            <a href="#home"
             className="-m-3 p-1.5">
              <span className="sr-only">Your Company</span>
              <img src={Logo} alt="" width={60} className='drop-shadow-md hover:drop-shadow-xl md:w-16 lg:w-20'/>
            </a>
          </div>
          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6 stroke-black" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            
              <a  href="#home" className=" py-1 px-3 text-md font-semibold hover:scale-105 rounded-bl-lg rounded-tr-lg drop-shadow-lg hover:bg-purple-400 hover:drop-shadow-2xl hover:text-gray-100 duration-500 ease-in-out">
                  Home
              </a>
              <Link to="/properties"  className=" py-1 px-3 text-md font-semibold hover:scale-105 rounded-bl-lg rounded-tr-lg drop-shadow-lg hover:bg-purple-400 hover:drop-shadow-2xl hover:text-gray-100 duration-500 ease-in-out">
                  Properties
              </Link>
              <a href="#developers" className=" py-1 px-3 text-md font-semibold hover:scale-105 rounded-bl-lg rounded-tr-lg drop-shadow-lg hover:bg-purple-400 hover:drop-shadow-2xl hover:text-gray-100 duration-500 ease-in-out">
                  Developers
              </a>
              <a href="#agent" className=" py-1 px-3 text-md font-semibold hover:scale-105 rounded-bl-lg rounded-tr-lg drop-shadow-lg hover:bg-purple-400 hover:drop-shadow-2xl hover:text-gray-100 duration-500 ease-in-out">
                  About Agent
              </a>
              <a href="#faqs" className=" py-1 px-3 text-md font-semibold hover:scale-105 rounded-bl-lg rounded-tr-lg drop-shadow-lg hover:bg-purple-400 hover:drop-shadow-2xl hover:text-gray-100 duration-500 ease-in-out">
                  FAQs
              </a>
        
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a href="#form" className="text-sm font-semibold leading-6 px-3 py-1 drop-shadow-lg text-gray-100 bg-purple-400 rounded-bl-lg rounded-tr-lg hover:rounded-bl-none hover:rounded-tr-none hover:rounded-br-lg hover:rounded-tl-lg hover:scale-105  hover:text-gray-900 hover:bg-purple-500 hover:drop-shadow-2xl duration-500">
              Inquire Now!
            </a>
          </div>
        </nav>
        <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#home" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img src={Logo} alt="" width={80}/>
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-purple-700">
                <div className="space-y-2 py-6">
                  
                    <Link to="" href="" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-purple-900 hover:bg-purple-200">
                      Home
                    </Link>
                    <Link to="" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-purple-900 hover:bg-purple-200">
                      Properties
                    </Link>
                    <Link to="" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-purple-900 hover:bg-purple-200">
                      Developers
                    </Link>
                    <Link to="" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-purple-900 hover:bg-purple-200">
                      About Agent
                    </Link>
                    <Link to="" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-purple-900 hover:bg-purple-200">
                      FAQs
                    </Link>
                
                </div>
                <div className="py-6">
                  <Link to className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-purple-900 hover:bg-purple-200">
                    Inquire Now!
                  </Link>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
          <Search />
    </div>
  )
}
