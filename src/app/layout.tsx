import type { Metadata } from "next";
import { Trispace } from "next/font/google";
import "./globals.css";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";

const trispace = Trispace({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "News App",
  description: "news for everyone",
  icons:{
    icon:[{url:'/img/logotipo32.png', sizes: '32x32'}, 
    {url:'/img/logotipo16.png', sizes:'16'}],
    apple: {
      url:'/img/icon156.png',
      sizes: '180x180'
    }
  },
  manifest: '/img/site.webmanifest',
  openGraph: {
    title: 'News App',
    description: 'news for everyone',
    type: 'article',
    authors: 'theoyoth'
  },
  keywords: ['news-app', 'news', 'news about everything']
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={trispace.className}>
        <main className='px-2 md:px-20'>
          <Header />
          <Navbar />
          <section className='flex-justify-between'>
            {children}
            {/*RandomNews */}
          </section>
        </main>
      </body>
    </html>
  )
}
