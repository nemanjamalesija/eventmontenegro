import { FC } from 'react';
import PageIntroHeading from '@/components/PageIntroHeading';

const WeddingsSerbian: FC = () => {
  return (
    <div>
      <PageIntroHeading heading='Vjenčanja' />
      <div
        className='weddings__img-box h-[40vh] w-full bg-blend-screen
          bg-cover bg-center lg:bg-top mb-12 lg:mb-16'
      ></div>
      <div className='weddings__text-box flex flex-col lg:grid grid-cols-2 gap-x-24 gap-8 mb-12 lg:mb-16'>
        <p className='text-base lg:text-lg text-gray-700'>
          Vjenčanje je emocija, susret najdražih, razmjena zagrljaja i ljubavi.
          Bilo da se radi o maloj proslavi ili raskošnom vjenčanju, zadržavajući
          Vaš stil i osobenost, možemo isplanirati sve do poslednjeg detalja.
          Naš tim organizuje vjenčanja u Crnoj Gori, radeći sa profesionalcima
          koji će omogućiti da Vašu viziju prenesemo u punom sjaju. Možete
          izabrati komplentnu organizaciju, dekoraciju ili samo koordinaciju na
          dan vjenčanja. Svaka saradnja je individualna, autentična i
          karakteriše neponovljivu priču.
        </p>
        <p className='text-base lg:text-lg text-gray-700'>
          Posebnu pažnju posvećujemo praćenju aktuelnih trendova u dekorisanju i
          realizovanju inovativnih ideja, kako bi svako vjenčanje bilo posebno i
          drugačije. Od izrade pozivnica do dekoracije mladenačkog stola i
          cvjetnih aranžmana, uvijek se trudimo da Vam ponudimo jedinstveno
          rješenje. Možemo da kreiramo male personalizovane poklone za Vaše
          goste, koji će ostati uspomena na magične trenutke vaše proslave.
          Dopustite nam da organizujemo Vaše vjenčanje kako biste imali
          nezaboravno iskustvo sa porodicom i prijateljima.
        </p>
      </div>
    </div>
  );
};

export default WeddingsSerbian;
