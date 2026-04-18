import Head from "next/head";
import { useEffect, useState } from "react";
import { Noto_Sans_KR } from "next/font/google";
import dynamic from "next/dynamic";
import { styled } from "@stitches/react";
import JsonData from "@/data.json";
import Script from "next/script";

const Title = dynamic(() => import("@/components/Title"), { ssr: false });
const Gretting = dynamic(() => import("@/components/Gretting"), { ssr: false });
const Gallery = dynamic(() => import("@/components/Gallery"), { ssr: false });
const Location = dynamic(() => import("@/components/Location"), { ssr: false });
const CongratulatoryMoney = dynamic(
  () => import("@/components/CongratulatoryMoney"),
  { ssr: false }
);
const Share = dynamic(() => import("@/components/Share"), { ssr: false });

const notoSansKR = Noto_Sans_KR({
  weight: ["400", "700"],
  subsets: [],
  style: "normal",
});

const Footer = styled("footer", {
  background: "#D7CCC8",
  backgroundImage: "url(./assets/GroovePaper.png)",
  opacity: 0.6,
  textAlign: "center",
  width: "100%",
  height: "100px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
});

export default function Home() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:type" content="website" />
        {/* Updated Meta Tags for Social Sharing */}
        <meta content="გიორგი & ქრისტინე" name="Title" />
        <meta content="ქორწილის მოსაწვევი" name="Description" />
        <meta property="og:title" content="გიორგი & ქრისტინე" />
        <meta
          property="og:description"
          content="გეპატიჟებით ჩვენს ქორწილში - 2026 წლის 6 სექტემბერი"
        />
        <meta
          property="og:url"
          content="https://turashvili1.github.io/wedding-invitation"
        />
        <meta name="theme-color" content="#BCAAA4" />
        <title>გიორგი & ქრისტინე</title>
      </Head>
      <main className={`${notoSansKR.className}`}>
        <Script src="https://developers.kakao.com/sdk/js/kakao.min.js"></Script>
        
        {/* This component usually handles the envelope animation */}
        <Gretting data={JsonData} />
        
        <Title />
        <Gallery />
        <Location />
        <CongratulatoryMoney />
        <Share data={JsonData} />
        
        <Footer>
           2026 გიორგი & ქრისტინე
        </Footer>
      </main>
    </>
  );
}
