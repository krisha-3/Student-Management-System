const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="w-full">
      <input
        type="text"
        placeholder="Search by Name or Roll Number..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full p-3 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
};

export default SearchBar;
