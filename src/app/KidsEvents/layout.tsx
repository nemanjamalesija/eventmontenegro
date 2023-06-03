import clsx from 'clsx';
import { ReactNode } from 'react';
import { Flower, PartyPopper } from 'lucide-react';
import { josefinSans } from '../../../utils/fonts';

type LayoutProps = {
  children: ReactNode;
};

const kidsOffers = [
  {
    category: 'Maskote',
    content:
      'Možete li zamisliti izraz na licu djeteta kada se njegov omiljeni junak iz crtanog filma pojavi na zabavi? Naši animatori se oblače u kostime Mickey Mouse, Minnie Mouse, Nodi, Pepa prase, Sunđer Bob, Hello Kitty, Frozen, Winnie Pooh, Paw patrol i druge, sa ciljem da slavlje Vašem miljeniku učine posebnim. Maskota po Vašem izboru će iznenaditi djecu svojim dolaskom, plesati i igrati, što za najmlađi uzrast predstavlja pravo oduševljenje. ',
  },
  {
    category: 'Klovn',
    content:
      'Zabava sa klovnom donosi puno radosti i smjeha. Program klovna obuhvata razne igre i plesne performanse, kao i modeliranje balona i balone od sapunice.',
  },
  {
    category: 'Mađioničar',
    content:
      'Želite li da za rođendan svom mališanu priuštite nešto posebno, što će ludo zabaviti njega i njegove drugare? Pravi izbor je mađioničar sa svojim sjajnim trikovima koje vrijedi vidjeti. Program mađioničara je u vidu predstave i traje do 40 minuta što je sasvim dovoljno da se djeci održi pažnja. Program je interaktivnog karaktera. Za rodjendansku proslavu slavljenik dobija poklon iznenađenja kroz mađioničarski trik. Utisak koji program mađioničara ostavlja dugo se pamti i prepričava. ',
  },
  {
    category: 'Princeze',
    content:
      'Svaka djevojčica mašta da postane princeza. Kroz ovu zabavu njeni snovi postaju stvarnost. U ponudi imamo kostime princeza Rapunzel, Uspavana ljepotica i sirene Ariel koje oblače naše animatorke. Zabava “Kako postati princeza” uključuje princezu po izboru, bajku, pjevanje, ples, bonton i igrice prilagođene uzrastu djece.',
  },
  {
    category: 'Super heroji',
    content:
      'Naši animatori oblače kostime Spidermana, Supermana ili Betmena. Kroz ovu zabavu djeca upostaju pravi super heroji. Zabava uključuje heroja po izboru i tematske igre sa raznim rekvizitima. ',
  },
  {
    category: 'Crtanje po licu',
    content:
      'Specijalnim bojama za lice pretvaramo nasmijana dječija lica u leptiriće, ribice, gusare, princeze, mačkice, štrumfove i razne likove iz crtanih filmova i bajki koje djeca obožavaju. Za crtanje po licu koristimo proizvode koji prijaju koži, koji su netoksični i lako se skidaju vodom.',
  },
  {
    category: 'Gusari',
    content:
      'Uz gusarsku muziku i efekte, potragu za blagom i savladavanje prepreka, djeca će doživjeti pravu gusarsku avanturu. Slavljenik i njegovi drugari dobijaju mačeve od balona, tako da je borba gusara neizostavni dio ove zabave. ',
  },
  {
    category: 'Modeliranje balona',
    content:
      'Modeling baloni su omiljeni kod mališana. Možemo da napravimo specijalnu kreaciju od balona za slavljenika, ali i razne modeling figure za njegove drugare, razne životinje, cvjetiće, kape, krune, mačeve i slično, tako da svaki mali gost na rođendanu dobije poklon kojim će biti oduševljen.',
  },
  {
    category: 'Pinjata',
    content:
      'Pinjata je tradicionalna meksička igra koja se igra prilikom raznih proslava, a naročito na dječijim rođendanima. Pinjate radimo ručno i u oblicima koji sami odaberete. Najradosniji trenutak nastaje kada se razbije pinjata, jer se tada dolazi do njenog sadržaja. Možemo ih puniti balonima, slatkišima i sitnim igračkama. ',
  },
  {
    category: 'Bioskop na otvorenom',
    content:
      'Želite li zabavu pod otvorenim nebom?  Ovo je idealno rešenje za zabavu na plaži ili u dvorištu. Pored mogućnosti gledanja animiranih filmova, djeca mogu uživati u plesu i pjesmi, gledajući omiljene spotove na velikom Disney ekranu. ',
  },
  {
    category: 'DJ & Disko',
    content:
      'Disko zabava je idealna za djecu koja se osjećaju “odraslom”. Pravimo diskoteku u bilo kojem zatvorenom prostoru. Pratimo trendove u pogledu muzičkih hitova. Na ovoj zabavi djeca uživaju u plesu, pjesmi i specijalnim efektima. ',
  },
  {
    category: 'Maskenbal',
    content:
      'Djeca jako vole da se maskiraju. Oni se rado pretvaraju u svoje omiljene likove iz crtanog filma, bajke ili mašte. Tako maskirani učestvuju u zabavi i plesu, a na kraju defiluju kako bi odraslima prezentovali likove koje predstavljaju. Defile je uvijek praćen odgovarajućom muzikom, kao i aplauzom od strane roditelja i prisutnih. Radimo na pripremi, organizaciji i koordinaciji kompletnog programa.  ',
  },
  {
    category: 'Karaoke',
    content:
      'Ovo je idealna zabava za djecu koja vole da pjevaju. Potrebno je samo da iz naše široke ponude pjesama, domaćih ili stranih, odaberu omiljene i čitajući tekst sa ekrana učine zabavu na kojoj će se svi veseliti i pjevati. Voditelj na kraju programa proglašava pobjednika.',
  },
  {
    category: 'Grupna animacija',
    content:
      'Animacija je prilagođena za organizovane grupe djece iz inostranstva koja odmor provode u Crnoj Gori i borave u odmaralištima i hotelima. Animacija predviđa grupe od 50 do 200 učesnika, kao i rad sa manjim grupama. Naš program prilagođavamo različitom uzrastu i može da obuhvata jutarnju, dnevnu i večernju animaciju. U saradnji sa svojim partnerima, možemo za njih da organizujemo zabavno-edukativne izlete. ',
  },
  {
    category: 'Novogodišnju program',
    content:
      'Želite li da Deda Mraz donese paketić Vašem miljeniku na kućnu adresu?   Bogata novogodišnja ponuda uključuje profesionalne kostime Deda Mraza, animatore, novogodišnju predstavu, novogodišnju balonsku dekoraciju, djeljenje paketića kao i cjelokupan novogodišnji program. Ukoliko Vam je tokom novogodišnjih praznika potreban samo Deda Mraz, pozovite nas, jer u ponudi imamo više profesionalnih kostima.   ',
  },
  {
    category: 'Ostale zabave',
    content:
      'Organizujemo i druge vrste zabava za djecu kao što su ples mažoretki, pjena party, kreativne radionice, igre bez granica. Kontaktirajte nas za više informacija.   ',
  },
];

const categories = kidsOffers.map((o) => o.category);

const layout = async ({ children }: LayoutProps) => {
  return (
    <section className='py-24 lg:px-10 bg-color-lightest border-t-2 border-b-2 border-white'>
      <div className='mx-auto max-w-custom px-4 lg:px-0 mt-6'>
        <h2
          className={clsx(
            josefinSans.className,
            'text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-600 mb-4 lg:mb-6'
          )}
        >
          Dječije proslave
        </h2>

        <div
          className='kids__img-box h-[40vh] w-full bg-blend-screen
          bg-cover bg-center lg:bg-top mb-8 lg:mb-12'
        ></div>
        <div className='kids__text-box flex flex-col lg:grid grid-cols-2 gap-x-24 gap-12'>
          <div className='kids__text '>
            <div className='flex items-center gap-4 mb-4'>
              <div className='kids__icons-set flex items-center justify-center rounded-full h-14 w-14 lg:h-16 lg:w-16 bg-color-accent-main'>
                {<Flower className='stroke-color-gray-light-1' />}
              </div>
              <h3
                className={clsx(
                  josefinSans.className,
                  'text-xl text-color-accent-main font-semibold'
                )}
              >
                Dekoracija
              </h3>
            </div>
            <p className='text-base lg:text-lg text-gray-700'>
              Izaberite temu rođendana ili druge diječije proslave, a mi ćemo
              kreirati dekoraciju koja će oduševiti sve prisutne. Slatki sto
              predstavlja centralni dio dekoracije, zato se trudimo da svaki
              detalj na njemu bude savršeno uklopljen. Baloni su nezaobilazni
              dio dekoracije, a djeca im se najviše raduju. Dopustite nam da
              uljepšamo Vaš poseban dan i učinimo ga neponovljivim.
            </p>
          </div>

          <div className='kids__text'>
            <div className='flex items-center gap-4 mb-4'>
              <div className='kids__icons-set flex items-center justify-center rounded-full h-14 w-14 lg:h-16 lg:w-16 bg-color-accent-main'>
                {<PartyPopper className='stroke-color-gray-light-1' />}
              </div>
              <h3
                className={clsx(
                  josefinSans.className,
                  'text-xl text-color-accent-main font-semibold'
                )}
              >
                Animacija
              </h3>
            </div>
            <p className='text-base lg:text-lg  text-gray-700'>
              Animacija djece je odlično rješenje za sve vrste proslava u kojima
              prisustvuju djeca. Naši animatori osmišljavaju program koji je
              zabavan, veseo i prilagođen Vašoj proslavi. Gdje god da pravite
              zabavu, u restoranu, hotelu, igraonici ili u kući, naš veseli tim
              dolazi kod Vas i donosi puno igre, smjeha i dobrog raspoloženja.
              Uz naše animatore djeca će se osjećati sigurno, zadovoljno i
              srećno.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default layout;
