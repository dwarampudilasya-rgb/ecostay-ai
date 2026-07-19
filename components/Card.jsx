export default function Card({ title, description }) {
  const image =
    title.toLowerCase().includes("eco")
      ? "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800"
      : "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800";

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
      <img
        src={image}
        alt={title}
        className="w-full h-56 object-cover"
      />

      <div className="p-5">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold text-gray-800">
            {title}
          </h2>

          <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
            🌿 Eco
          </span>
        </div>

        <p className="text-gray-600 mt-3">
          📍 {description}
        </p>

        <div className="flex justify-between items-center mt-5">
          <span className="text-yellow-500 font-semibold">
            ⭐ 4.8
          </span>

          <button className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-full font-semibold transition">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}