import type { Metadata } from "next";
// import localFont from "next/font/local";
import "./globals.css";
import Script from "next/script";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata: Metadata = {
  title: {
    template: '%s | Maki Creative Studio',
    default: 'Maki Creative Studio',
  },
  description: "Online design studio and software agency",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script async src="https://tally.so/widgets/embed.js"></script>
      </head>
      <body
        className={'antialiased bg-white dark:bg-gray3 text-primary0 dark:text-off-white overflow-x-hidden'}
      >
        {children}

        {process.env.NODE_ENV === 'production' && (
          <Script id="clarity-script" strategy="afterInteractive">
            {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "pwx5o2fgby");
          `}
          </Script>
        )}

      </body>
    </html>
  );
}
