import Image from "next/image";

export function Welcome() {
  return (
    <>
      <div className="md:hidden flex flex-col w-full  py-6 px-4">
        <small>Bem vindo à devlayer</small>
        <h2 className="mt-4 font-bold text-xl">
          {" "}
          Design e desenvolvimento de
          <p className="font-bold text-cyan">produtos digitais</p> que
          impulsionam o futuro
        </h2>
        <button className="mt-6 w-52 flex items-center justify-center rounded-full h-9  bg-cyan px-2  font-bold text-black">
          {" "}
          Comece um projeto
        </button>
      </div>

      <div className="hidden md:flex w-3/4 flex-row justify-between  py-6 px-4">
        <div>
          <small className="text-xl">Bem vindo à devlayer</small>
          <h2 className="mt-4 font-bold text-5xl">
            {" "}
            Design e desenvolvimento de
            <p className="font-bold text-cyan">produtos digitais</p> que
            impulsionam o futuro
          </h2>
          <button className="mt-6 flex items-center justify-center rounded-full h-9  bg-cyan px-8  font-bold text-black">
            {" "}
            Comece um projeto
          </button>
        </div>
        <Image
          src="/diamond.svg"
          alt="Diamond Icon"
          className="dark"
          width={240}
          height={245}
          priority
        />
      </div>
    </>
  );
}
