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
            <title>Auction Fusion</title>
            <meta name="description" content="Creating the finest auction websites" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
    );
}
