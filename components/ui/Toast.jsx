/**
 * Toast Component
 * Props:
 * - message: toast message
 */

export default function Toast({
  message,
}) {
  return (
    <div className="bg-green-500 text-white p-2 rounded">
      {message}
    </div>
  );
}