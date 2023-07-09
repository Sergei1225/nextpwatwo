//"use client";
import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import Head from "next/head";
import { useState } from "react";

export default function Home() {
    // const [dataInput, setInput] = useState<string>();

    // const getData = () => {
    //     const data = localStorage.getItem("test");
    //     if (!data) {
    //         alert("Нет данных");
    //     } else {
    //         alert(data);
    //     }
    // };

    // const writeData = () => {
    //     if (dataInput) {
    //         localStorage.setItem("test", dataInput);
    //         alert("Данные записаны");
    //         setInput('')
    //     } else {
    //         alert("Нет данных для записи");
    //     }
    // };

    return (
        <>
            <Head>
                <link rel="manifest" href="manifest.json" />
            </Head>
            <main className={styles.main}>
                <h1>Main page</h1>
                <Link href={"/newPage"}>New Page</Link>
                <input type="text" value={dataInput} onChange={(e) => setInput(e.target.value)} />
                <button onClick={() => getData()}>Получить данные</button>
                <button onClick={() => writeData()}>Записать данные</button>
            </main>
        </>
    );
}
