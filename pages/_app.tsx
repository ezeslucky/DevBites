import type { AppProps } from "next/app"
import { AuthContextProvider } from "@/context/AuthContext"
import GoogleAnalytics from "@bradgarropy/next-google-analytics"
import { Inter as FontSans } from "@next/font/google"
import { Analytics } from "@vercel/analytics/react"
import { NextSeo } from "next-seo"
import { ThemeProvider } from "next-themes"

import { Toaster } from "@/components/ui/toaster"
import "@/styles/globals.css"
import "@/styles/style.scss"
import "prism-themes/themes/prism-one-dark.min.css"
//import "prism-themes/themes/prism-night-owl.css"
import { QueryClient, QueryClientProvider } from "react-query"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  preload: true,
})

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  })
  return (
    <>
      <style jsx global>{`
				:root {
					--font-sans: ${fontSans.style.fontFamily};
				}
			}`}</style>
      <NextSeo
        title="DevBites"
        description="DevBites allows you to share code codes that you have found
            useful."
        canonical="https://DevBites.lndev.me/"
        openGraph={{
          url: "https://DevBites.lndev.me/",
          title: "DevBites",
          description:
            "DevBites allows you to share code codes that you have found useful.",
          images: [
            {
              url: "https://DevBites.lndev.me/DevBites-banner.png",
              alt: "DevBites",
              type: "image/jpeg",
              secureUrl: "https://DevBites.lndev.me/DevBites-banner.png",
            },
          ],
          siteName: "DevBites",
        }}
        twitter={{
          handle: "@ezeslucky",
          site: "@ezeslucky",
          cardType: "summary_large_image",
        }}
      />
      <QueryClientProvider client={queryClient}>
        <AuthContextProvider>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <Toaster />
            <Component {...pageProps} />
            {/* <Analytics /> */}
            <GoogleAnalytics measurementId="G-4FTGXMJNPY" />
            {/* <ReactQueryDevtools initialIsOpen={false} /> */}
          </ThemeProvider>
        </AuthContextProvider>
      </QueryClientProvider>
    </>
  )
}
