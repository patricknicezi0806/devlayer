import { AboutUs } from "@/components/AboutUs";
import { Banner } from "@/components/Banner";
import { CAT } from "@/components/CAT";
import { Portifolio } from "@/components/Portifolio";
import { ShortAboutUs } from "@/components/ShortAboutUs";
import { Welcome } from "@/components/Welcome";

export default function Home() {
  return (
    <main className="flex flex-col w-full min-h-screen overflow-hidden">
      <Welcome />
      <Banner />
      <ShortAboutUs />
      <Portifolio />
      <AboutUs />
      <CAT />
    </main>
  );
}
