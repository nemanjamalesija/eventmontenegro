import clsx from 'clsx';
import { FC } from 'react';
import { josefinSans } from '../../../utils/fonts';

const ContactForm: FC = () => {
  return (
    <section className='section-book py-24  border-b-2 border-white'>
      <div className='row mx-auto max-w-custom px-5 lg:px-10'>
        <div className='book'>
          <div className='book__form--container'>
            <form action='#' className='book-form'>
              <div className='u-margin-bottom-medium'>
                <h2
                  className={clsx(
                    josefinSans.className,
                    'heading heading-secondary mb-4 uppercase text-3xl'
                  )}
                >
                  Počni svoj projekat odmah
                </h2>
                <p className='mb-16 text-lg text-gray-700'>
                  Pošaljite nam e mail, i neko iz našeg tima će Vam posvetiti
                  pažnju u roku ne dužem od 24h.
                </p>
              </div>
              <div className='book-form__group'>
                <input
                  type='text'
                  className='book-form__input'
                  placeholder='Full Name'
                  required
                  id='name'
                />
                <label htmlFor='name' className='book-form__label'>
                  Full Name
                </label>
              </div>
              <div className='book-form__group'>
                <input
                  type='email'
                  className='book-form__input'
                  placeholder='E mail'
                  required
                  id='email'
                />
                <label htmlFor='email' className='book-form__label'>
                  E mail
                </label>
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
