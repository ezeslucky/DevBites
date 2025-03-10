import { Head, Html, Main, NextScript } from "next/document"

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="google-adsense-account" content="ca-pub-2222017759396595" />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2222017759396595"
          crossOrigin="anonymous"
        ></script>
      </Head>
      <body className="min-h-screen bg-white font-sans text-zinc-900 antialiased dark:bg-zinc-900 dark:text-zinc-50">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
