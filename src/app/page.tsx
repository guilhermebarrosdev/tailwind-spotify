import {
  Home as HomeIcon,
  Search,
  Library,
  PlusSquare,
  Heart,
  ChevronLeft,
  ChevronRight,
  Play,
} from 'lucide-react';
import Image from 'next/image';

export default function Home() {
  return (
    <div className='h-screen flex flex-col'>
      <div className='flex flex-1'>
        <aside className='w-72 bg-zinc-950 p-6'>
          <div className='flex items-center gap-2'>
            <div className='w-3 h-3 bg-red-500 rounded-full'></div>
            <div className='w-3 h-3 bg-yellow-500 rounded-full'></div>
            <div className='w-3 h-3 bg-green-500 rounded-full'></div>
          </div>
          <nav className='space-y-5 mt-10'>
            <a
              href=''
              className='flex items-center gap-3 text-sm font-semibold text-zinc-200'
            >
              <HomeIcon />
              Home
            </a>
            <a
              href=''
              className='flex items-center gap-3 text-sm font-semibold text-zinc-200'
            >
              <Search />
              Search
            </a>
            <a
              href=''
              className='flex items-center gap-3 text-sm font-semibold text-zinc-200'
            >
              <Library />
              Your library
            </a>
            <a
              href=''
              className='flex items-center gap-3 text-sm font-semibold text-zinc-200 pt-6'
            >
              <PlusSquare />
              Create Playlist
            </a>
            <a
              href=''
              className='flex items-center gap-3 text-sm font-semibold text-zinc-200'
            >
              <Heart />
              Liked Songs
            </a>
          </nav>

          <nav className='mt-6 pt-6 border-t border-zinc-800 flex flex-col gap-3'>
            <a href='' className='text-sm text-zinc-400 hover:text-zinc-100'>
              Playlist 1
            </a>
            <a href='' className='text-sm text-zinc-400 hover:text-zinc-100'>
              Playlist 2
            </a>
            <a href='' className='text-sm text-zinc-400 hover:text-zinc-100'>
              Playlist 3
            </a>
            <a href='' className='text-sm text-zinc-400 hover:text-zinc-100'>
              Playlist 4
            </a>
          </nav>
        </aside>

        <main className='flex-1 p-6'>
          <div className='flex items-center gap-3'>
            <button className='rounded-full bg-black/40 p-1'>
              <ChevronLeft />
            </button>
            <button className='rounded-full bg-black/40 p-1'>
              <ChevronRight />
            </button>
          </div>

          <h1 className='font-semibold text-3xl mt-10'>Good Afternoon</h1>

          <div className='grid grid-cols-3 gap-4 mt-4'>
            <a
              href='#'
              className='bg-white/5 group rounded-md flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'
            >
              <Image
                className='rounded-md'
                src='/album.jpg'
                width={104}
                height={104}
                alt='Capa do album'
              />
              <strong>Listen to</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play />
              </button>
            </a>
            <a
              href='#'
              className='bg-white/5 group rounded-md flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'
            >
              <Image
                className='rounded-md'
                src='/album.jpg'
                width={104}
                height={104}
                alt='Capa do album'
              />
              <strong>Listen to</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play />
              </button>
            </a>
            <a
              href='#'
              className='bg-white/5 group rounded-md flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'
            >
              <Image
                className='rounded-md'
                src='/album.jpg'
                width={104}
                height={104}
                alt='Capa do album'
              />
              <strong>Listen to</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play />
              </button>
            </a>
            <a
              href='#'
              className='bg-white/5 group rounded-md flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'
            >
              <Image
                className='rounded-md'
                src='/album.jpg'
                width={104}
                height={104}
                alt='Capa do album'
              />
              <strong>Listen to</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play />
              </button>
            </a>
            <a
              href='#'
              className='bg-white/5 group rounded-md flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'
            >
              <Image
                className='rounded-md'
                src='/album.jpg'
                width={104}
                height={104}
                alt='Capa do album'
              />
              <strong>Listen to</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play />
              </button>
            </a>
            <a
              href='#'
              className='bg-white/5 group rounded-md flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'
            >
              <Image
                className='rounded-md'
                src='/album.jpg'
                width={104}
                height={104}
                alt='Capa do album'
              />
              <strong>Listen to</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play />
              </button>
            </a>
          </div>

          <h2 className='font-semibold text-2xl mt-10'>
            Made for Guilherme Barros
          </h2>

          <div className='grid grid-cols-8 gap-4 mt-4 '>
            <a
              href='#'
              className='bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10'
            >
              <Image
                className='rounded-md w-full'
                src='/album.jpg'
                width={120}
                height={120}
                alt='Capa do album'
              />
              <strong className='font-semibold'>Daily mix 1</strong>
              <span className='text-sm text-zinc-400'>
                Lorem ipsum dolor, sit consectetur elite.
              </span>
            </a>
            <a
              href='#'
              className='bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10'
            >
              <Image
                className='rounded-md w-full'
                src='/album.jpg'
                width={120}
                height={120}
                alt='Capa do album'
              />
              <strong className='font-semibold'>Daily mix 2</strong>
              <span className='text-sm text-zinc-400'>
                Lorem ipsum dolor, sit consectetur elite.
              </span>
            </a>
            <a
              href='#'
              className='bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10'
            >
              <Image
                className='rounded-md w-full'
                src='/album.jpg'
                width={120}
                height={120}
                alt='Capa do album'
              />
              <strong className='font-semibold'>Daily mix 3</strong>
              <span className='text-sm text-zinc-400'>
                Lorem ipsum dolor, sit consectetur elite.
              </span>
            </a>
            <a
              href='#'
              className='bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10'
            >
              <Image
                className='rounded-md w-full'
                src='/album.jpg'
                width={120}
                height={120}
                alt='Capa do album'
              />
              <strong className='font-semibold'>Daily mix 4</strong>
              <span className='text-sm text-zinc-400'>
                Lorem ipsum dolor, sit consectetur elite.
              </span>
            </a>
            <a
              href='#'
              className='bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10'
            >
              <Image
                className='rounded-md w-full'
                src='/album.jpg'
                width={120}
                height={120}
                alt='Capa do album'
              />
              <strong className='font-semibold'>Daily mix 5</strong>
              <span className='text-sm text-zinc-400'>
                Lorem ipsum dolor, sit consectetur elite.
              </span>
            </a>
          </div>
        </main>
      </div>

      <footer className='bg-zinc-800 border-t border-zinc-700 p-6 flex items-center justify-between'>
        <div>
          <Image
            className='rounded-md w-full'
            src='/album.jpg'
            width={80}
            height={80}
            alt='Capa do album'
          />
          <div>
            <strong>Name of music</strong>
            <span>Name of Artist</span>
          </div>
        </div>
        <div></div>
        <div></div>
      </footer>
    </div>
  );
}
