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
          <link
            href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap"
            rel="stylesheet"
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
