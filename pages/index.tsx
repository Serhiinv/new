import Head from "next/head";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Index() {
    const router = useRouter();

    useEffect(() => {
        router.push("/home");
    }, [router]);

    return (
        <Head>
            <title>Welcome to Auction Fusion</title>
            <meta name="description" content="Welcome to Auction Fusion - Creating the Finest Auction Websites" />
        </Head>
    );
}
