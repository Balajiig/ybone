import Head from 'next/head';

const SeoHead = () => {
  return (
    <Head>
      <title>YB One Solutions | Business & Marketing Consulting Services</title>
      <meta name="description" content="YB One Solutions provides top 1% business leaders for strategic consulting, marketing consulting, digital marketing services, and product strategy. Grow smarter, pay smarter." />
      <meta name="keywords" content="YBOne, yb one, y b one, business consulting, marketing consulting, digital marketing service, ybone solutions, ybonesolutions, services provider, product strategy, business design solutions, market analysis, user experience design" />
      <meta name="author" content="YB One Solutions" />
      
      {/* Open Graph Tags */}
      <meta property="og:title" content="YB One Solutions | Top Business & Marketing Consultants" />
      <meta property="og:description" content="Get access to elite product and business experts without the burden of fixed salaries. We help businesses grow smarter." />
      <meta property="og:image" content="https://ybonesolutions.com/images/logo.webp" />
      <meta property="og:url" content="https://ybonesolutions.com" />
      <meta property="og:type" content="website" />

      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
      
      {/* Canonical */}
      <link rel="canonical" href="https://ybonesolutions.com" />
    </Head>
  );
};

export default SeoHead;
