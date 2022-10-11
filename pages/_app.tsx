import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { NextSeo } from 'next-seo';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextSeo
        title="Infolio"
        titleTemplate="Infolio"
        defaultTitle="Infolio"
        description="A Selected collection of well desired portfolio websites, to get inspiration from when building your portfolio."
        canonical="https://infolio.vercel.app/"
        openGraph={{
          url: 'https://infolio.vercel.app/',
          title: 'Infolio',
          description:
            'A Selected collection of well desired portfolio websites, to get inspiration from when building your portfolio.',
          images: [
            {
              url: '/og-image.png',
              width: 800,
              height: 420,
              alt: 'Infolio',
            },
          ],
        }}
        twitter={{
          handle: '@asofex',
          site: '@asofex',
          cardType: 'summary_large_image',
        }}
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
