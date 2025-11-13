import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=3.0, user-scalable=yes, viewport-fit=cover" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Schibsted+Grotesk:wght@400;600&display=swap"
          rel="stylesheet"
        />
        <style>{`
          * {
            // touch-action: manipulation;
            // -ms-touch-action: manipulation;
            touch-action: pan-x pan-y;
            -ms-touch-action: pan-x pan-y;
          }
          html {
            width: 100%;
            height: 100%;
          }
          body {
            width: 100%;
            height: 100%;
            overflow-x: hidden;
            overscroll-behavior: none;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
            -webkit-touch-callout: none;
          }

          @media (max-width: 820px) {
            html, body {
              position: static;
              height: auto;
              overflow: visible;
            }
          }

          @media (min-width: 821px) {
            html, body {
              position: static;
              height: auto;
              overflow-x: hidden;
            }
          }
        `}</style>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
