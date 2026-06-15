export default function Card({ title, description }) {
  return (
    <div className="border rounded-lg p-6 shadow-md">
      <h2 className="text-xl font-bold">{title}</h2>
      <p className="mt-2">{description}</p>
      <button className="mt-4 px-4 py-2 bg-green-600 text-white rounded">
        View Details
      </button>
    </div>
  );
}