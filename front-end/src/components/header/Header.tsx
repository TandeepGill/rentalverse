import { useEffect, useState, Fragment } from "react";
import { Dialog, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../app/hooks";
import { logout } from "../../features/authSlice";

const landingPageNav = [
  { name: "Features", href: "#features" },
  { name: "Pricing", href: "#pricing" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

const applicationNav = [
  { name: "Dashboard", href: "dashboard" },
  { name: "Properties", href: "properties" },
  { name: "Calendar", href: "calendar" },
  { name: "Contacts", href: "contacts" },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const Header = () => {
  const user = JSON.parse(localStorage.getItem("user") || "{}");
  const url: string = window.location.pathname;
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isInApplication, setIsInApplication] = useState(false);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const logoutHandler = () => {
    dispatch(logout());
    navigate("/");
  };

  useEffect(() => {
    const isInApplicationUrlCheck = (url: string): boolean => {
      switch (url) {
        case "/":
          return false;
          break;
        case "/auth/login":
          return false;
          break;
        case "/auth/signup":
          return false;
          break;
        default:
          return true;
      }
    };

    setIsInApplication(isInApplicationUrlCheck(url));
  }, [url]);

  return (
    <>
      <header className='sticky top-0 z-50 bg-white'>
        <nav
          className='mx-auto flex max-w-7xl items-center justify-between gap-x-6 p-6 lg:px-8'
          aria-label='Global'
        >
          <div className='flex lg:flex-1'>
            <a href='/' className='-m-1.5 p-1.5'>
              <span className='sr-only'>Rentalverse</span>
              <h1 className='text-2xl font-bold text-orange-600'>
                RENTAL
                <span className='font-normal text-slate-700'>VERSE</span>
              </h1>
            </a>
          </div>
          <div className='hidden lg:flex lg:gap-x-12'>
            {!isInApplication &&
              landingPageNav.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className='text-base font-semibold leading-6 text-gray-900'
                >
                  {item.name}
                </a>
              ))}
            {isInApplication &&
              user.token &&
              applicationNav.map((item) => (
                <Link to={`/${item.href}`} key={item.href}>
                  <span className='text-base font-semibold leading-6 text-gray-900'>
                    {item.name}
                  </span>
                </Link>
              ))}
          </div>
          <div className='flex flex-1 items-center justify-end gap-x-6'>
            {!user.token && (
              <a
                href='/auth/login'
                className='hidden lg:block lg:text-base lg:font-semibold lg:leading-6 lg:text-gray-900'
              >
                Log in
              </a>
            )}

            {!user.token && (
              <a
                href='/auth/signup'
                className='rounded-md bg-orange-600 px-3 py-2 text-base font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600'
              >
                Sign up
              </a>
            )}

            {user.token && (
              <Menu as='div' className='relative ml-3'>
                <div>
                  <Menu.Button className='relative flex rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2'>
                    <span className='absolute -inset-1.5' />
                    <span className='sr-only'>Open user menu</span>
                    <img
                      className='h-10 w-10 rounded-full'
                      src='https://images.unsplash.com/photo-1537511446984-935f663eb1f4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                      alt=''
                    />
                  </Menu.Button>
                </div>
                <Transition
                  as={Fragment}
                  enter='transition ease-out duration-200'
                  enterFrom='transform opacity-0 scale-95'
                  enterTo='transform opacity-100 scale-100'
                  leave='transition ease-in duration-75'
                  leaveFrom='transform opacity-100 scale-100'
                  leaveTo='transform opacity-0 scale-95'
                >
                  <Menu.Items className='absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
                    <Menu.Item>
                      {({ active }) => (
                        <Link to='/dashboard'>
                          <span
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-base text-gray-700",
                            )}
                          >
                            Dashboard
                          </span>
                        </Link>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <Link to='/profile'>
                          <span
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-base text-gray-700",
                            )}
                          >
                            Your Profile
                          </span>
                        </Link>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <span
                          className={classNames(
                            active ? "bg-gray-100" : "",
                            "block px-4 py-2 text-base text-gray-700 hover:cursor-pointer",
                          )}
                          onClick={() => logoutHandler()}
                        >
                          Log out
                        </span>
                      )}
                    </Menu.Item>
                  </Menu.Items>
                </Transition>
              </Menu>
            )}
          </div>
          <div className='flex lg:hidden'>
            <button
              type='button'
              className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700'
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className='sr-only'>Open main menu</span>
              <Bars3Icon className='h-6 w-6' aria-hidden='true' />
            </button>
          </div>
        </nav>
        <Dialog
          as='div'
          className='lg:hidden'
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className='fixed inset-0 z-10' />
          <Dialog.Panel className='fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10'>
            <div className='flex items-center gap-x-6'>
              <a href='/' className='-m-1.5 p-1.5'>
                <span className='sr-only'>Rentalverse</span>
                <h1 className='text-2xl font-bold text-orange-600'>
                  RENTAL
                  <span className='font-normal text-slate-700'>VERSE</span>
                </h1>
              </a>
              {!user.token && (
                <a
                  href='/auth/signup'
                  className='ml-auto rounded-md bg-orange-600 px-3 py-2 text-base font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600'
                >
                  Sign up
                </a>
              )}

              {user.token && (
                <button className='ml-auto rounded-md bg-orange-600 px-3 py-2 text-base font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600'>
                  Log out
                </button>
              )}
              <button
                type='button'
                className='-m-2.5 rounded-md p-2.5 text-gray-700'
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className='sr-only'>Close menu</span>
                <XMarkIcon className='h-6 w-6' aria-hidden='true' />
              </button>
            </div>
            <div className='mt-6 flow-root'>
              <div className='-my-6 divide-y divide-gray-500/10'>
                <div className='space-y-2 py-6'>
                  {!isInApplication &&
                    landingPageNav.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </a>
                    ))}

                  {isInApplication &&
                    user.token &&
                    applicationNav.map((item) => (
                      <Link to={`/${item.href}`} key={item.href}>
                        <span
                          className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {item.name}
                        </span>
                      </Link>
                    ))}
                </div>
                <div className='py-6'>
                  {!user.token && (
                    <a
                      href='/auth/login'
                      className='-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'
                    >
                      Log in
                    </a>
                  )}
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
    </>
  );
};

export default Header;
