import { useBook } from '../hooks/useBook'

function Filters() {
  const {
    ListOfGenres,
    genre,
    pages,
    maxPages,
    onSelectChange,
    onRangeChange,
  } = useBook()

  const handleSelectChange = e => onSelectChange({ genre: e.target.value })
  const handleRangeChange = e => onRangeChange({ value: e.target.value })

  return (
    <header className="flex flex-row gap-4">
      <select
        value={genre}
        onChange={handleSelectChange}
        className="block py-2 text-base border focus:ring-blue-500  bg-gray-700 border-gray-600 placeholder-gray-400 text-white  focus:border-blue-500"
        name="genre"
      >
        <option value="">All</option>
        {ListOfGenres.map(genre => (
          <option key={genre} value={genre}>
            {genre}
          </option>
        ))}
      </select>
      <div className="w-[50%] flex flex-col">
        <label
          htmlFor="steps-range"
          className="block mb-2 text-base font-medium text-gray-900 dark:text-white"
        >
          Nº pages {pages}
        </label>
        <input
          onChange={handleRangeChange}
          id="steps-range"
          type="range"
          min="0"
          max={maxPages}
          value={pages}
          step="50"
          className="w-full h-4 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600 dark:bg-gray-700"
        />
      </div>
    </header>
  )
}

export default Filters
