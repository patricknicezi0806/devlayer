import { AboutUs } from "@/components/AboutUs";
import { Banner } from "@/components/Banner";
import { CAT } from "@/components/CAT";
import { Header } from "@/components/Header";
import { Portifolio } from "@/components/Portifolio";
import { ShortAboutUs } from "@/components/ShortAboutUs";
import { Welcome } from "@/components/Welcome";

export default function Home() {
  return (
    <main className="flex flex-col w-full min-h-screen items-center overflow-hidden">
      <Header />
      <hr className="bg-white w-full h-1" />
      <Welcome />
      <Banner />
      <ShortAboutUs />
      <Portifolio />
      <AboutUs />
      <CAT />
    </main>
  );
}
