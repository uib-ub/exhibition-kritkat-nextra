import type { Metadata } from "next";
import { LastUpdated, Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Banner, Head, Search } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "KritKat",
  description: "Kommer snart",
};


const banner = <Banner storageKey="some-key">Kommer snart 🎉</Banner>

const navbar = (
  <Navbar
    logo={<b>KritKat</b>}
  // ... Your additional navbar options
  />
)
const footer = <Footer>CC BY-SA {new Date().getFullYear()} © Exhibition Template by the University of Bergen Library.</Footer>

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      // Not required, but good for SEO
      lang="no"
      // Required to be set
      dir="ltr"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      // Suggested by `next-themes` package https://github.com/pacocoursey/next-themes#with-app
      suppressHydrationWarning
    >
      <Head
      >
        <meta name="description" content="Exhibition Template" />
        <meta name="keywords" content="Exhibition Template" />
        <meta name="author" content="Exhibition Template" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="google" content="notranslate" />
        <meta name="google" content="notranslate" />
      </Head>
      <body>
        <Layout
          banner={banner}
          navbar={navbar}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/uib-ub/exhibition-kritkat-nextra"
          toc={{
            title: "Innhold",
            backToTop: "Til toppen",
          }}
          feedback={{
            content: null,
          }}
          footer={footer}
          lastUpdated={<LastUpdated locale="nb">Sist oppdatert</LastUpdated>}
          search={<Search placeholder="Søk" emptyResult="Ingen resultater" loading="Søker..." errorText="Feil ved søk" />}
          themeSwitch={{
            dark: "Mørk",
            light: "Lys",
            system: "System",
          }}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}