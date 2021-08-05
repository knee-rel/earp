import Head from "next/head";
import Image from "next/image";

import MainHeader from "../src/components/header";
import HomePageContainer from "../src/containers/home";
import Footer from "../src/components/footer";

export default function Home() {
  return (
    <div>
      <MainHeader />
      <HomePageContainer />
      <Footer />
    </div>
  );
}
