import { Slot, component$ } from '@builder.io/qwik';
import navLinks from './nav-links.json';

const Layout = component$(() => {
  return (
    <>
      <header class='sticky top-0 z-40 w-full border-b border-b-zinc-700 bg-custom-background'>
        <div class='max-w-8xl mx-auto'>
          <div class='py-4 mx-4 lg:px-8 lg:mx-0'>
            <div class='relative flex items-center'>
              <a class='flex items-center font-black no-underline' href='/' aria-current='page'>
                <span role='img' aria-label="'Rocket" class='mr-1'>
                  🚀
                </span>
                Astro
              </a>
              <div
                class='relative
              flex
              lg:hidden
              items-center
              ml-auto'
              >
                <button id='menu' class='ml-auto flex items-center justify-center'>
                  <span class='sr-only'>Navigation</span>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    class='h-6 w-6'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path id='menuPath' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'>
                      {' '}
                    </path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div class='relative'>
        <div
          id='lightbox'
          aria-label='lightbox'
          tab-index='0'
          role='button'
          class='z-20 top-0 left-0 w-screen h-screen bg-custom-background opacity-80'
        ></div>
        <div class='max-w-8xl mx-auto px-4 sm:px-6 md:px-8'>
          <div
            id='sidebar'
            class='lg:block fixed z-30 inset-0 top-[3.8125rem] transition-all duration-300 right-auto w-[14.5rem] py-4 px-6 overflow-y-auto border-r border-r-zinc-700 bg-custom-background lg:left-[max(0px,calc(50%-45rem))]'
          >
            <nav>
              <ul>
                {navLinks.map((link) => {
                  const { label, href } = link;

                  return (
                    <li>
                      <a href={href}>{label}</a>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>
        </div>
        <main class='lg:pl-[12.5rem]'>
          <div class='mx-auto px-4 lg:px-16 py-8 max-w-none xl:ml-0 xl:mr-[15.5rem]'>
            Content: <Slot />
          </div>
        </main>
      </div>
    </>
  );
});

export default Layout;
