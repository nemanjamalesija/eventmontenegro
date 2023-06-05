import { josefinSans } from '../../../utils/fonts';
import clsx from 'clsx';
import { doroteaLukaImages } from '../../../assets/img/weddings/doroteaLuka/doroteaLuka';
import { jelenaVladoImages } from '../../../assets/img/weddings/jelenaVlado/jeleVlado';
import { saraMichelleImages } from '../../../assets/img/weddings/saraMichelle/saraMichelle';
import { tijanaMiloImages } from '../../../assets/img/weddings/tijanaMilo/tijanaMilo';
import Gallery from '@/components/ui/Gallery';

const layout = async () => {
  return (
    <section className='py-24 lg:px-10 bg-color-lightest border-t-2 border-b-2 border-white'>
      <div className='mx-auto max-w-custom px-4 lg:px-0 mt-6'>
        <h2
          className={clsx(
            josefinSans.className,
            'text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-600 mb-4 lg:mb-6'
          )}
        >
          Vjenčanja
        </h2>

        <div
          className='weddings__img-box h-[40vh] w-full bg-blend-screen
          bg-cover bg-center lg:bg-top mb-12 lg:mb-16'
        ></div>
        <div className='weddings__text-box flex flex-col lg:grid grid-cols-2 gap-x-24 gap-8 mb-12 lg:mb-16'>
          <p className='text-base lg:text-lg text-gray-700'>
            Vjenčanje je emocija, susret najdražih, razmjena zagrljaja i
            ljubavi. Bilo da se radi o maloj proslavi ili raskošnom vjenčanju,
            zadržavajući Vaš stil i osobenost, možemo isplanirati sve do
            poslednjeg detalja. Naš tim organizuje vjenčanja u Crnoj Gori,
            radeći sa profesionalcima koji će omogućiti da Vašu viziju prenesemo
            u punom sjaju. Možete izabrati komplentnu organizaciju, dekoraciju
            ili samo koordinaciju na dan vjenčanja. Svaka saradnja je
            individualna, autentična i karakteriše neponovljivu priču.
          </p>
          <p className='text-base lg:text-lg text-gray-700'>
            Posebnu pažnju posvećujemo praćenju aktuelnih trendova u dekorisanju
            i realizovanju inovativnih ideja, kako bi svako vjenčanje bilo
            posebno i drugačije. Od izrade pozivnica do dekoracije mladenačkog
            stola i cvjetnih aranžmana, uvijek se trudimo da Vam ponudimo
            jedinstveno rješenje. Možemo da kreiramo male personalizovane
            poklone za Vaše goste, koji će ostati uspomena na magične trenutke
            vaše proslave. Dopustite nam da organizujemo Vaše vjenčanje kako
            biste imali nezaboravno iskustvo sa porodicom i prijateljima.
          </p>
        </div>
        <div className='business__celebrations-gallery-wrapper  mb-12 lg:mb-16'>
          <h5
            className={clsx(
              josefinSans.className,
              'text-2xl text-color-accent-main font-semibold mb-5 lg:mb-3 text-center '
            )}
          >
            Jelena & Vlado
          </h5>
          <Gallery images={jelenaVladoImages} />
        </div>
        <div className='gallery__wrapper mb-12 lg:mb-16'>
          <h5
            className={clsx(
              josefinSans.className,
              'text-2xl text-color-accent-main font-semibold text-center '
            )}
          >
            Dorotea & Luka
          </h5>
        </div>
        <div className='business__celebrations-gallery-wrapper  mb-12 lg:mb-16'>
          <Gallery images={doroteaLukaImages} />
        </div>
        <div className='business__celebrations-gallery-wrapper  mb-12 lg:mb-16'>
          <h5
            className={clsx(
              josefinSans.className,
              'text-2xl text-color-accent-main font-semibold mb-5 lg:mb-3 text-center '
            )}
          >
            Tijana & Milo
          </h5>
          <Gallery images={tijanaMiloImages} />
        </div>
        <div className='business__celebrations-gallery-wrapper  mb-12 lg:mb-16'>
          <h5
            className={clsx(
              josefinSans.className,
              'text-2xl text-color-accent-main font-semibold mb-5 lg:mb-3 text-center '
            )}
          >
            Sara & Michelle
          </h5>
          <Gallery images={saraMichelleImages} />
        </div>
      </div>
    </section>
  );
};

export default layout;
