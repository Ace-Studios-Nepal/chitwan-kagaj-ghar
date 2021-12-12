import Document, { Html, Head, Main, NextScript } from 'next/document';
export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel='manifest' href='/manifest.json' />
          <link rel='apple-touch-icon' href='/logo.svg'></link>
          <meta name='theme_color' content='#fff' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
        <div id='fb-root'></div>
        <div id='fb-customer-chat' className='fb-customerchat'></div>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              var chatbox = document.getElementById('fb-customer-chat');
              chatbox.setAttribute("page_id", "637391076307034");
              chatbox.setAttribute("attribution", "biz_inbox");
                  window.fbAsyncInit = function() {
                FB.init({
                  xfbml            : true,
                  version          : 'v12.0'
                });
              };
        
              (function(d, s, id) {
                var js, fjs = d.getElementsByTagName(s)[0];
                if (d.getElementById(id)) return;
                js = d.createElement(s); js.id = id;
                js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
                fjs.parentNode.insertBefore(js, fjs);
              }(document, 'script', 'facebook-jssdk'));
              `,
          }}
        />

        <div
          className='fb-customerchat'
          attribution='page_inbox'
          page_id='637391076307034'
        ></div>
      </Html>
    );
  }
}
