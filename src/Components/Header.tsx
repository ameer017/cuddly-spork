interface HeaderProps {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

const Header = ({ search, setSearch }: HeaderProps) => {
  return (
    <header className="h-52 bg-teal-700 flex items-center justify-center flex-col">
      <h1 className="text-3xl  text-white">JSON Typicode User&apos;s Fetch</h1>

      <div className="flex my-3">
        <input
          type="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="bg-transparent border border-white outline-none rounded w-full px-2 py-[1px] mr-1 text-white "
        />
        
      </div>
    </header>
  );
};

export default Header;
