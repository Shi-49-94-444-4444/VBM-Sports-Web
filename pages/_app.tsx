import App from 'next/app';
import Head from 'next/head';
import "../app/globals.css";
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
class MyApp extends App {
    render() {
        const { Component, pageProps } = this.props;

        return (
            <>
                <Head>
                    <title>Badminton yard</title>
                    <link rel="icon" href="/images/Vector.png" />
                </Head>
                <main className={inter.className}>
                    <Component {...pageProps} />
                </main>
            </>
        );
    }
}

export default MyApp;
