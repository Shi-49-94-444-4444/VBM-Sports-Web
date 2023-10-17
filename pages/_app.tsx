import App from 'next/app';
import Head from 'next/head';
import "../app/globals.css";
import Modal from 'react-modal'
import { Inter } from 'next/font/google'
import GlobalState from '@/contexts';

const inter = Inter({ subsets: ['latin'] })
class MyApp extends App {
    componentDidMount() {
        Modal.setAppElement('#__next');
    }

    render() {
        const { Component, pageProps } = this.props;

        return (
            <>
                <Head>
                    <title>Badminton yard</title>
                    <link rel="icon" href="/images/Vector.png" />
                </Head>
                <main className={inter.className}>
                    <GlobalState>
                        <Component {...pageProps} />
                    </GlobalState>
                </main>
            </>
        );
    }
}

export default MyApp;
