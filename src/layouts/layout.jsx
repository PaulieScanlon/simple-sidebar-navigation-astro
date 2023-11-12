import { useState } from 'react';
import navLinks from './nav-links.json';

const Layout = ({ children }) => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <>
      <header className='sticky top-0 z-40 w-full border-b border-b-zinc-700 bg-custom-background'>
        <div className='max-w-8xl mx-auto'>
          <div className='py-4 mx-4 lg:px-8 lg:mx-0'>
            <div className='relative flex items-center'>
              <a className='flex items-center font-black no-underline' href='/' aria-current='page'>
                <span role='img' aria-label="'Rocket" className='mr-1'>
                  🚀
                </span>
                Astro
              </a>
              <div
                className='relative
                flex
                lg:hidden
                items-center
                ml-auto'
              >
                <button id='menu' className='ml-auto flex items-center justify-center' onClick={handleNav}>
                  <span className='sr-only'>Navigation</span>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-6 w-6'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      id='menuPath'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d={isNavOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className='relative'>
        <div
          id='lightbox'
          aria-label='lightbox'
          tab-index='0'
          role='button'
          className={`z-20 top-0 left-0 w-screen h-screen bg-custom-background opacity-80 ${
            isNavOpen ? 'fixed' : 'hidden'
          } lg:hidden`}
          onClick={handleNav}
        />
        <div className='max-w-8xl mx-auto px-4 sm:px-6 md:px-8'>
          <div
            id='sidebar'
            className={`lg:block fixed z-30 inset-0 top-[3.8125rem] transition-all duration-300 right-auto w-[14.5rem] py-4 px-6 overflow-y-auto border-r border-r-zinc-700 bg-custom-background lg:left-[max(0px,calc(50%-45rem))] ${
              isNavOpen ? 'left-[max(0px,calc(50%-45rem))]' : '-left-[240px]'
            }`}
          >
            <nav>
              <ul>
                {navLinks.map((link, index) => {
                  const { label, href } = link;

                  return (
                    <li key={index}>
                      <a href={href}>{label}</a>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>
        </div>
        <main className='lg:pl-[12.5rem]'>
          <div className='mx-auto px-4 lg:px-16 py-8 max-w-none xl:ml-0 xl:mr-[15.5rem]'>{children}</div>
        </main>
      </div>
    </>
  );
};

export default Layout;
