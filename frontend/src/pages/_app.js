import "../../node_modules/@fortawesome/fontawesome-svg-core/styles.css";
import Layout from "@/components/Layout";
import "@/styles/globals.css";
import { config } from "@fortawesome/fontawesome-svg-core";

config.autoAddCss = false;

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
