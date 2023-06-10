import clsx from 'clsx';
import { FC } from 'react';
import { josefinSans } from '../../../utils/fonts';

const ContactForm: FC = () => {
  return (
    <section className='section-book py-24  border-b-2 border-white'>
      <div className='row mx-auto max-w-custom px-5 lg:px-10'>
        <div className='book'>
          <div className='book__form--container'>
            <form action='#' className='book-form p-16 w-1/2'>
              <div className='u-margin-bottom-medium'>
                <h2
                  className={clsx(
                    josefinSans.className,
                    'heading-secondary mb-4 uppercase text-3xl font-bold mb-'
                  )}
                >
                  Kreni sa projektom odmah
                </h2>
                <p className='mb-16 text-base text-gray-700'>
                  Pošaljite nam e mail i neko iz našeg tima će Vam posvetiti
                  pažnju u roku ne dužem od 24h.
                </p>
              </div>
              <div className='book-form__group mb-5'>
                <input
                  type='email'
                  className='book-form__input text-base py-4 px-5'
                  placeholder='E mail'
                  required
                  id='email'
                />
                <label
                  htmlFor='email'
                  className='book-form__label text-sm ml-5'
                >
                  E mail
                </label>
              </div>
              <div className='book-form__group mb-5'>
                <textarea
                  id='message'
                  className='book-form__input py-4 px-5 block p-2.5 w-full text-base text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                  placeholder='Vaša poruka...'
                ></textarea>
              </div>

              <button
                type='submit'
                className='btn active:scale-95 transition-all, duration-300 rounded-full inline-flex items-center justify-center transition-color focus:outline-none cursor-pointer bg-color-accent-main hover:bg-color-shade-main text-white py-4 px-10 text-xl font-semibold'
              >
                Sledeći korak &rarr;
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
