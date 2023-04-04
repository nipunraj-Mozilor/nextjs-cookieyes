import Script from "next/script";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    (<Component {...pageProps} />),
    (
      <script
        id="cookieyes"
        type="text/javascript"
        src="https://cdn-cookieyes.com/client_data/440dc8f4202424ea7c3394f4/script.js"
        strategy="beforeInteractive"
      ></script>
    )
  );
}
