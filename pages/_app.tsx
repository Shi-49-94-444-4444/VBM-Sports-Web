import App from 'next/app';
import Head from 'next/head';
import "../app/globals.css";
import "../styles/fontInter.css"

class MyApp extends App {
    render() {
        const { Component, pageProps } = this.props;

        return (
            <>
                <Head>
                    <title>Badminton yard</title>
                    <link rel="icon" href="/images/Vector.png" />
                </Head>
                <Component {...pageProps} />
            </>
        );
    }
}

export default MyApp;
