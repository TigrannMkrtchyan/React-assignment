import { Roboto } from 'next/font/google';
import MainLayout from '@/components/mainLayout';
import { DeliveryProvider } from '@/context';
import './globals.scss';

const inter = Roboto({ subsets: ['latin'], weight: '400' });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <MainLayout />
        <DeliveryProvider>{children}</DeliveryProvider>
      </body>
    </html>
  );
}
