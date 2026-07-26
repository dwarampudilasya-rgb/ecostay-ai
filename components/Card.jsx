import { MapPin, Star, Leaf } from "lucide-react";

export default function Card({
  title,
  description,
  onEdit,
  onDelete,
}) {
  const images = [
    "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1200",
    "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1200",
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1200",
    "https://images.unsplash.com/photo-1494526585095-c41746248156?w=1200",
    "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200",
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200",
  ];

  const image = images[title.length % images.length];

  return (
    <div className="w-full bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">

      <img
        src={image}
        alt={title}
        className="w-full h-60 object-cover hover:scale-110 transition-transform duration-500"
      />

      <div className="p-5">

        <div className="flex justify-between items-center">
          <h2 className="text-xl md:text-2xl font-bold text-gray-800">
            {title}
          </h2>

          <div className="flex items-center gap-1 bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
            <Leaf size={16} />
            Eco
          </div>
        </div>

        <div className="flex items-center gap-2 mt-4 text-gray-600">
          <MapPin size={18} />
          <span>{description}</span>
        </div>

        <div className="flex justify-between items-center mt-5">

          <div className="flex items-center gap-1 text-yellow-500 font-semibold">
            <Star fill="currentColor" size={18} />
            4.8
          </div>

          <div className="flex gap-2 flex-wrap">
            <button
              onClick={onEdit}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
            >
              Edit
            </button>

            <button
              onClick={onDelete}
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg"
            >
              Delete
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}