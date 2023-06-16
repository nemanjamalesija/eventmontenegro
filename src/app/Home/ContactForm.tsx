'use client';
import { useState } from 'react';
import clsx from 'clsx';
import { FC } from 'react';
import { josefinSans } from '../../../utils/fonts';
import Modal from '@/components/ui/Modal';
import { useAppContext } from '@/Provider/appContext';
import {
  formContentEnglish,
  formContentSerbian,
} from '@/constants/formContent';

const ContactForm: FC = () => {
  const [status, setStatus] = useState('');
  const { isEnglish } = useAppContext();
  const content = isEnglish ? formContentEnglish : formContentSerbian;
  const { formHeading, formParagraph, messagePlaceholder, buttonText } =
    content;

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/xayzgroq', {
        method: 'POST',
        body: data,
        headers: {
          Accept: 'application/json',
        },
      });

      if (!response.ok) {
        setStatus('FAILURE');
        throw new Error('There was an error submitting the form');
      } else {
        setStatus('SUCCESS');
      }

      form.reset();
    } catch (error) {
      setStatus('FAILURE');
      console.error(error);
    } finally {
      setTimeout(() => setStatus(''), 2000);
    }
  };

  return (
    <section id='contact' className='section-book py-16 lg:py-24 lg:px-10 '>
      <div className='row mx-auto max-w-custom px-5'>
        <div className='book'>
          <div className='book__form--container'>
            <form
              action='https://formspree.io/f/xayzgroq'
              method='POST'
              className='book-form p-8 lg:p-16 lg:w-1/2 relative'
              onSubmit={handleSubmit}
            >
              <div className='u-margin-bottom-medium'>
                <h2
                  className={clsx(
                    josefinSans.className,
                    'heading-secondary mb-4 uppercase text-2xl lg:text-3xl font-bold'
                  )}
                >
                  {formHeading}
                </h2>
                <p className='mb-9 text-base text-gray-700'>{formParagraph}</p>
              </div>
              <div className='book-form__group mb-5'>
                <input
                  type='email'
                  name='email'
                  className='book-form__input text-sm lg:text-base py-4 px-5'
                  placeholder='E mail'
                  required
                  id='email'
                />
              </div>
              <div className='book-form__group mb-5'>
                <textarea
                  id='message'
                  name='message'
                  className='book-form__input py-4 px-5 block p-2.5 w-full text-sm lg:text-base text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-emerald-500 focus:border-emerald-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-emerald-500 dark:focus:border-emerald-500'
                  placeholder={messagePlaceholder}
                ></textarea>
              </div>

              <button
                type='submit'
                className='btn active:scale-95 transition-all, duration-300 rounded-full inline-flex items-center justify-center transition-color focus:outline-none cursor-pointer bg-color-accent-main hover:bg-color-shade-main text-white py-2 px-5 lg:py-3 lg:px-7  text-lg lg:text-xl font-semibold'
              >
                {buttonText} &rarr;
              </button>
            </form>
          </div>
        </div>
        {status === 'SUCCESS' && (
          <Modal statusMessage={'Vaša poruka je poslata!'} />
        )}
        {status === 'FAILURE' && (
          <Modal
            statusMessage={'Došlo je do greške! Molimo pokušajte ponovo.'}
          />
        )}
      </div>
      {status !== '' && (
        <div
          id='overlay'
          className='fixed w-full h-full top-0 left-0 right-0 bottom-0 z-40'
        ></div>
      )}
    </section>
  );
};

export default ContactForm;
