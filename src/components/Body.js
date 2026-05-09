import RestaurantCard from "./RestoCard";
import resobj from "../utils/mock";
const Body = () => (
  <main className="max-w-7xl mx-auto">
    <div className="flex items-center gap-4 p-8">
      <input
        type="text"
        placeholder="Search for restaurants..."
        className="px-6 py-3 rounded-2xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-rose-500 flex-grow max-w-md shadow-sm"
      />
      <button className="bg-slate-900 text-white px-8 py-3 rounded-2xl font-bold hover:bg-slate-800 transition-all shadow-lg">
        Search
      </button>
    </div>
    <div className="restaurant-grid">
      {resobj.data.map((res) => (
        <RestaurantCard key={res.info.id} resData={res} />
      ))}
    </div>
  </main>
);
export default Body;
