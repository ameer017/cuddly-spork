interface HeaderProps {
  data: {
    id: number;
    name: string;
    username: string;
    email: string;
    address: string;
    website: string;
    phone: number;
  };
}


const Header = ({filteredData, search, setSearch}: HeaderProps) => {
  return (
    <header className="h-52 bg-teal-700 flex items-center justify-center flex-col">
      <h1 className="text-3xl  text-white">JSON Typicode User&apos;s Fetch</h1>

      <div className="flex my-3">
        <input
          type="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="bg-transparent border border-white outline-none rounded w-4/5 px-2 py-[1px] mr-1 text-white "
        />
        <button className="bg-slate-400 px-2 py-[1px] rounded text-white hover:bg-slate-600 transition-all duration-200 hover:-translate-y-1">
          Search
        </button>
      </div>
    </header>
  );
};

export default Header;
