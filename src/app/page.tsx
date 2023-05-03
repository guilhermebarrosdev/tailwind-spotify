import { Footer } from '@/components/Footer';
import { SideBar } from '@/components/SideBar';

export default function Home() {
  return (
    <div className='h-screen flex flex-col'>
      <div className='flex flex-1'>
        <SideBar />
      </div>

      <Footer />
    </div>
  );
}
