export function Header() {
  return (
    <header className="px-4 h-20 md:w-3/4 w-full flex flex-row items-center justify-between">
      <h1 className="text-4xl font-bold text-white">devlayer</h1>
      <div className="flex flex-row gap-6">
        <p className="md:block hidden">Behance</p>
        <p className="md:block hidden">Insta</p>
        <p>Menu</p>
      </div>
    </header>
  );
}
