import { FC } from 'react';
import { Check } from 'lucide-react';

type ModalPropsType = {
  statusMessage: string;
};

const Modal: FC<ModalPropsType> = ({ statusMessage }) => {
  return (
    <div
      id='popup-modal'
      tabIndex={-1}
      className='p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full'
    >
      <div className='relative w-full max-w-md max-h-full'>
        <div className='relative bg-white rounded-lg shadow dark:bg-gray-700'>
          <button
            type='button'
            className='absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white'
            data-modal-hide='popup-modal'
          >
            <svg
              aria-hidden='true'
              className='w-5 h-5'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fill-rule='evenodd'
                d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                clip-rule='evenodd'
              ></path>
            </svg>
            <span className='sr-only'>Close modal</span>
          </button>
          <div className='p-6 text-center'>
            {statusMessage === 'Vaša poruka je poslata!' ? (
              <svg
                fill='none'
                className='mx-auto mb-4 text-emerald-400 w-14 h-14 dark:text-emerald-200'
                stroke='currentColor'
                stroke-width='1.5'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
                aria-hidden='true'
              >
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  d='M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                ></path>
              </svg>
            ) : (
              <svg
                aria-hidden='true'
                className='mx-auto mb-4 text-red-400 w-14 h-14 dark:text-red-200'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  d='M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                ></path>
              </svg>
            )}

            <h3 className='mb-5 text-lg font-normal text-gray-500 dark:text-gray-400'>
              {statusMessage}
            </h3>
            <button
              data-modal-hide='popup-modal'
              type='button'
              className='btn text-white bg-color-accent-main hover:bg-color-shade-main focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:bg-color-shade-main font-medium rounded-full text-sm inline-flex items-center px-5 py-2.5 text-center mr-2 transition-all duration-300 '
            >
              Nazad na stranicu
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
