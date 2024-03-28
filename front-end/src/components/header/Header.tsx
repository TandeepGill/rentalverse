import { useEffect, useState } from "react";
import { Dialog } from "@headlessui/react";
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
              <button
                className='rounded-md bg-orange-600 px-3 py-2 text-base font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600'
                onClick={() => logoutHandler()}
              >
                Log out
              </button>
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
