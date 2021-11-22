import React, { Component } from "react"
import logo from "./logo.svg"
import "./App.css"

function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />;
}

export default MyApp;
