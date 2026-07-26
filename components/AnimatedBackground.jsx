"use client";

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">

      <div className="absolute top-10 left-10 w-72 h-72 bg-green-300/20 rounded-full blur-3xl animate-blob"></div>

      <div className="absolute top-1/3 right-20 w-80 h-80 bg-emerald-400/20 rounded-full blur-3xl animate-blob animation-delay-2000"></div>

      <div className="absolute bottom-10 left-1/3 w-72 h-72 bg-lime-300/20 rounded-full blur-3xl animate-blob animation-delay-4000"></div>

      <div className="absolute bottom-20 right-10 w-64 h-64 bg-teal-300/20 rounded-full blur-3xl animate-blob animation-delay-6000"></div>

    </div>
  );
}