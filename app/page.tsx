"use client";
import Head from "next/head";
import { AppBar } from "./components/AppBar";
import { PingButton } from "./components/PingButton";
import WalletContextProvider from "./components/WalletContextProvider";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Head>
        <title>Wallet-Adapter Example</title>
        <meta name="description" content="Wallet-Adapter Example" />
      </Head>
      <WalletContextProvider>
        <AppBar />
        <div className="h-full flex flex-col items-center justify-start text-white pt-12">
          <PingButton />
        </div>
      </WalletContextProvider>
    </main>
  );
}
