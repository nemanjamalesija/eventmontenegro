import { ReactNode } from 'react';

type LayoutProps = {
  children: ReactNode;
};

const layout = async ({ children }: LayoutProps) => {
  return <h1>Other Offers</h1>;
};

export default layout;
