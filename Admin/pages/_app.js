import React from "react";
import App from "next/app";
import ReactDOM from "react-dom/client";
import Head from "next/head";
import Router from "next/router";

import PageChange from "../components/PageChange/PageChange.js";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "../styles/tailwind.css";

let pageTransitionRoot;

Router.events.on("routeChangeStart", (url) => {
  document.body.classList.add("body-page-transition");

  const pageTransitionElement = document.getElementById("page-transition");
  if (pageTransitionElement) {
    if (!pageTransitionRoot) {
      pageTransitionRoot = ReactDOM.createRoot(pageTransitionElement);
    }
    pageTransitionRoot.render(<PageChange path={url} />);
  }
});

Router.events.on("routeChangeComplete", () => {
  document.body.classList.remove("body-page-transition");

  if (pageTransitionRoot) {
    pageTransitionRoot.unmount();
    pageTransitionRoot = null; // Clean up after unmounting
  }
});

Router.events.on("routeChangeError", () => {
  document.body.classList.remove("body-page-transition");
  if (pageTransitionRoot) {
    pageTransitionRoot.unmount();
    pageTransitionRoot = null; // Clean up after unmounting
  }
});


export default class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }
  render() {
    const { Component, pageProps } = this.props;

    const Layout = Component.layout || (({ children }) => <>{children}</>);

    return (
      <React.Fragment>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <script src="https://cdn.tailwindcss.com"></script>
        </Head>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </React.Fragment>
    );
  }
}
