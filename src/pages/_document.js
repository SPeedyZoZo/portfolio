import Document, { Head, Html, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang='en-GB'>
        <Head>
          {/* Set the theme attribute before first paint so returning light-mode
              visitors don't see a flash of the default dark theme. */}
          <script
            dangerouslySetInnerHTML={{
              __html: `
                try {
                  var stored = JSON.parse(window.localStorage.getItem('portfolio-settings'));
                  document.documentElement.setAttribute('data-theme', (stored && stored.theme) || 'dark');
                } catch (e) {}
              `,
            }}
          />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
          <link
            href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap"
            rel="stylesheet"
          />

          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="manifest" href="/site.webmanifest" />
          <meta name="theme-color" content="#0F1624" />

          {/* Google Analytics */}
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-EDYZW9VV7Y" />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-EDYZW9VV7Y');
              `,
            }}
          />
          {/* Plerdy Tracking Code */}
          <script
            type="text/javascript"
            defer
            dangerouslySetInnerHTML={{
              __html: `
                var _protocol="https:"==document.location.protocol?"https://":"http://";
                _site_hash_code = "9ef0bb75422af803aaf41e71ada5c46c",_suid=52165, plerdyScript=document.createElement("script");
                plerdyScript.setAttribute("defer",""),plerdyScript.dataset.plerdymainscript="plerdymainscript",
                plerdyScript.src="https://a.plerdy.com/public/js/click/main.js?v="+Math.random();
                var plerdymainscript=document.querySelector("[data-plerdymainscript='plerdymainscript']");
                plerdymainscript&&plerdymainscript.parentNode.removeChild(plerdymainscript);
                try{document.head.appendChild(plerdyScript)}catch(t){console.log(t,"unable add script tag")}
              `,
            }}
          />
          
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
