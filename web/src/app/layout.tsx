import {ReduxProvider} from '@/redux/Provider';
import type {Metadata} from 'next';
import {Poppins} from 'next/font/google';

import './globals.scss';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--poppins',
});

export const metadata: Metadata = {
  title: 'Notes App',
  description: 'A Notes sharing platform',
  creator: 'Aishwary Vishwakarma',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang='en'>
      <body className={poppins.variable}>
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
