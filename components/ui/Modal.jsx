/**
 * Modal Component
 * Props:
 * - title: modal heading
 * - children: modal content
 */

export default function Modal({
  title,
  children,
}) {
  return (
    <div className="border p-4 rounded">
      <h2 className="font-bold mb-2">
        {title}
      </h2>

      {children}
    </div>
  );
}