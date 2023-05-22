import { FC } from 'react';
import { Instagram } from 'lucide-react';

const Sidebar: FC = () => {
  return (
    <aside className='relative h-full left-0 top-0 z-50 bg-color-accent-main flex flex-col items-center justify-center px-2'>
      <div className='icons__container flex flex-col gap-4 sticky -translate-y-1/2'>
        <Instagram className='h-9 w-9 fill-white stroke-stroke-icon-primary cursor-pointer' />
        <span className='text-color-shadest text-base cursor-pointer'>ENG</span>
        <span className='text-color-shadest text-base cursor-pointer'>MNE</span>
      </div>
    </aside>
  );
};

export default Sidebar;
