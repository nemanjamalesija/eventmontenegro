import { useAppContext } from '@/Provider/appContext';

export default function useFindModalContent() {
  const { isEnglish } = useAppContext();

  const modalStart = isEnglish ? 'Mascots' : 'Maskote';

  return modalStart;
}
