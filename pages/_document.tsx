import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=5.0, user-scalable=yes" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Schibsted+Grotesk:wght@400;600&display=swap"
          rel="stylesheet"
        />
        <style>{`
          * {
            touch-action: pan-x pan-y;
            -ms-touch-action: pan-x pan-y;
          }
          html, body {
            overflow-x: hidden;
          }
          body {
            overscroll-behavior: none;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
          }

          @media (max-width: 820px) {
            html, body {
              position: static;
              height: auto;
              min-height: 100%;
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







