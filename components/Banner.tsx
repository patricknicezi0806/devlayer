import Image from "next/image";

export function Banner() {
  return (
    <div className="w-full h-10 bg-gradient-to-r from-blue to-cyan-100 text-black text-xl relative">
      <div className="flex flex-row items-center gap-3 animate-slide absolute">
        <div className="flex gap-2 flex-row items-center justify-center h-10 whitespace-nowrap mx-4">
          <Image
            src="/asterisk.svg"
            alt="Asterisk Icon"
            className="dark"
            width={16.72}
            height={17.86}
            priority
          />
          Inovação com linhas de código{" "}
        </div>

        <div className="flex gap-2 flex-row items-center justify-center h-10 whitespace-nowrap">
          <Image
            src="/asterisk.svg"
            alt="Asterisk Icon"
            className="dark"
            width={16.72}
            height={17.86}
            priority
          />
          Codificando criativade
        </div>

        <div className="hidden md:flex gap-2 flex-row items-center justify-center h-10 whitespace-nowrap mx-4">
          <Image
            src="/asterisk.svg"
            alt="Asterisk Icon"
            className="dark"
            width={16.72}
            height={17.86}
            priority
          />
          Inovação com linhas de código{" "}
        </div>

        <div className="hidden md:flex gap-2 flex-row items-center justify-center h-10 whitespace-nowrap">
          <Image
            src="/asterisk.svg"
            alt="Asterisk Icon"
            className="dark"
            width={16.72}
            height={17.86}
            priority
          />
          Codificando criativade
        </div>
      </div>
    </div>
  );
}
