import { SideBar } from '@/components/SideBar';
import { Maximize2, MonitorSmartphone, Volume1 } from 'lucide-react';
import {
  ChevronLeft,
  ChevronRight,
  Play,
  Shuffle,
  SkipBack,
  SkipForward,
  Repeat,
  Mic2,
  ListMusic,
} from 'lucide-react';
import Image from 'next/image';

export default function Home() {
  return (
    <div className='h-screen flex flex-col'>
      <div className='flex flex-1'>
        <SideBar />
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

      <footer className='bg-zinc-800 border-t border-zinc-700 px-6 py-4 flex items-center justify-between'>
        <div className='flex items-center gap-2 '>
          <Image
            className='rounded-md'
            src='/album.jpg'
            width={56}
            height={56}
            alt='Capa do album'
          />
          <div className='flex flex-col'>
            <strong className='font-normal'>Name of music</strong>
            <span className='text-xs text-zinc-400'>Name of Artist</span>
          </div>
        </div>
        <div className='flex flex-col items-center gap-2'>
          <div className='flex items-center gap-6 '>
            <Shuffle size={20} className='text-zinc-200' />
            <SkipBack size={20} className='text-zinc-200' />
            <button className='w-10 h-10 flex items-center justify-center pl-1 rounded-full bg-white text-black'>
              <Play />
            </button>
            <SkipForward size={20} className='text-zinc-200' />
            <Repeat size={20} className='text-zinc-200' />
          </div>
          <div className='flex items-center gap-2'>
            <span className='text-xs text-zinc-400'>0:31</span>
            <div className='h-1 rounded-full w-96 bg-zinc-600'>
              <div className='bg-zinc-200 w-40 h-1 rounded-full'></div>
            </div>
            <span className='text-xs text-zinc-400'>2:01</span>
          </div>
        </div>
        <div className='flex items-center gap-4'>
          <Mic2 size={20} />
          <ListMusic size={20} />
          <MonitorSmartphone size={20} />
          <div className='flex items-center gap-2'>
            <Volume1 size={20} />
            <div className='h-1 rounded-full w-24 bg-zinc-600'>
              <div className='bg-zinc-200 w-10 h-1 rounded-full'></div>
            </div>
          </div>
          <Maximize2 size={20} />
        </div>
      </footer>
    </div>
  );
}
