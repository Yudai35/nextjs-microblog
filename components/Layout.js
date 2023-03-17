import Head from "next/head";
import styled from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";

const name = "Shin Code";
export const siteTitle = "Next.js blog";

function Layout({ children , home }) {
    return (
        <div className={styled.container}>
            <Head>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <header className={styled.header}>
                {home ? (
                    <>
                        <img className={`${utilStyles.borderCircle} ${styled.headerHomeImage}`} src="/images/profile.png" />
                        <h1 className={utilStyles.heading2Xl}>{name}</h1>
                    </>
                ) : (
                    <>
                        <img className={`${utilStyles.borderCircle}`} src="/images/profile.png" />
                        <h1 className={utilStyles.heading2Xl}>{name}</h1>
                    </>
                )}

            </header>
            <main>{children}</main>
            {!home && (
                <div>
                    <Link href="/">ホームへ戻る</Link>
                </div>
            )}
        </div>
    );
}

export default Layout;