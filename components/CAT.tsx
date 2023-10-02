import Image from "next/image";

export function CAT() {
  return (
    <div className="p-4 bg-cover naver-background">
      <small> Nossa receita secreta: Criatividade e Codificação</small>
      <h2 className="py-2 font-bold text-xl">
        Crie o seu
        <div className="font-bold text-xl text-cyan">futuro digital</div>
        com a devlayer
      </h2>
      <p>
        Acreditamos que cada ideia merece brilhar no mundo digital. Seja o
        próximo aplicativo de sucesso ou um site cativante, estamos prontos para
        transformar seus sonhos em realidade.
      </p>
      <p className="py-4 text-cyan underline">
        {" "}
        Pronto para criar algo extraordinário?
      </p>
      <button className="flex items-center justify-center rounded-full w- h-8  bg-cyan px-2  font-bold text-black">
        {" "}
        Fale com agente
      </button>
    </div>
  );
}
