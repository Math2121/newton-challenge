import type { NextPage } from "next";
import dynamic from "next/dynamic";
import { About } from "../components/About";

import Banner from "../components/Banner";
import { Contact } from "../components/Contact";
import Footer from "../components/Footer";

export const DynamicComponentWithNoSSR = dynamic(
  () => import("../components/Menu"),
  {
    ssr: false,
  }
);

const Home: NextPage = () => {
  return (
    <>
      <section className="container m-auto p-2">
        <DynamicComponentWithNoSSR />
      </section>
      <Banner />
      <About />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
