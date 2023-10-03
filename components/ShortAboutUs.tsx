import Image from "next/image";

export function ShortAboutUs() {
  return (
    <>
      <div className="md:hidden flex flex-col items-start  gap-6 w-full  pt-2 pb-6 px-4">
        <h2 className="mt-4 font-bold text-xl">
          O seu
          <p className="font-bold text-cyan">mundo digital</p> sob medida
        </h2>

        <p>
          Somos apaixonados por inovação, moldando produtos digitais que não
          apenas impressionam, mas também entregam resultados tangíveis. Seja
          uma startup ambiciosa ou uma marca estabelecida, estamos aqui para
          tornar suas visões digitais em experiências incríveis.
        </p>

        <button className="text-cyan">Conheça nosso trabalho </button>
      </div>

      <div className="md:flex hidden flex-row items-start justify-between  gap-6 w-3/4  pt-2 pb-6 px-4">
        <div>
          <h2 className="mt-4 font-bold text-xl">
            O seu
            <p className="font-bold text-cyan">mundo digital</p> sob medida
          </h2>

          <p>
            Somos apaixonados por inovação, moldando produtos digitais
            <br /> que não apenas impressionam, mas também entregam resultados
            tangíveis.
            <br /> Seja uma startup ambiciosa ou uma marca estabelecida,
            <br /> estamos aqui para tornar suas visões digitais em experiências
            incríveis.
          </p>

          <button className="mt-4 text-cyan">Conheça nosso trabalho </button>
        </div>
        <Image
          src="/inspiration.svg"
          alt="Inspiration Icon"
          className="dark"
          width={240}
          height={245}
          priority
        />
      </div>
    </>
  );
}
