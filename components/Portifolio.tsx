import Link from "next/link";
import { Tag } from "./Tag";
import Image from "next/image";

export function Portifolio() {
  return (
    <>
      <div className="md:hidden flex flex-col w-full h-full bg-zinc-200 py-6 px-4">
        <h2 className="font-bold text-xl text-black">01</h2>
        <h2 className=" mt-2 text-xl text-black">TeachGear Solutions</h2>
        <div className="mt-4 flex flex-row justify-start gap-4">
          <Tag label="Design" />
          <Tag label="front-end" />
          <Tag label="back-end" />
        </div>

        <p className="my-6 text-black">
          Desenvolvemos uma plataforma de gerenciamento de projetos customizada
          para otimizar sua colaboração interna e eficiência operacional.
          Implementamos um design de interface intuitivo e moderno, integrando
          recursos de comunicação em tempo real e visualização de projetos. A
          solução resultou em um aumento de 30% na produtividade da equipe e uma
          redução significativa de retrabalhos, permitindo à empresa
          concentrar-se na inovação e no crescimento do negócio.
        </p>

        <a className="text-blue underline">techgearsolutions.ia</a>
      </div>

      <div className="md:flex hidden flex-row w-3/4 h-full relative">
        <div className="w-1/2 bg-zinc-200 px-4 py-6">
          <h2 className="font-bold text-xl text-black">01</h2>
          <h2 className=" mt-2 text-xl text-black">TeachGear Solutions</h2>
          <div className="mt-4 flex flex-row justify-start gap-4">
            <Tag label="Design" />
            <Tag label="front-end" />
            <Tag label="back-end" />
          </div>

          <p className="my-6 text-black">
            Desenvolvemos uma plataforma de gerenciamento de projetos
            customizada para otimizar sua colaboração interna e eficiência
            operacional. Implementamos um design de interface intuitivo e
            moderno, integrando recursos de comunicação em tempo real e
            visualização de projetos. A solução resultou em um aumento de 30% na
            produtividade da equipe e uma redução significativa de retrabalhos,
            permitindo à empresa concentrar-se na inovação e no crescimento do
            negócio.
          </p>

          <a className="text-blue underline">techgearsolutions.ia</a>
        </div>

        <div className="w-1/2">
          <Image
            src="/computer.png"
            alt="Inspiration Icon"
            className="dark"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
          />
        </div>
        <p className="absolute bottom-0 right-0 bg-cyan text-black px-4 w-64">
          não criamos apenas aplicativos e sites; construímos pontes entre{" "}
          <br />
          ideias e realidade digital.
        </p>
      </div>
    </>
  );
}
