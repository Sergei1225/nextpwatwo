"use client";
import Head from "next/head";
import Image from "next/image";

import { useRouter } from "next/navigation";

export default function NewPage() {
    const router = useRouter();

    return (
        <>
            <Head>
                <link rel="manifest" href="manifest.json" />
            </Head>
            <h3>New page</h3>
            <button onClick={() => router.back()}>Back</button>
        </>
    );
}
