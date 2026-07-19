"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { signIn, useSession } from "next-auth/react";
import { useEffect } from "react";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { useTheme } from "../../components/ThemeContext";

export default function Login() {
  const { darkMode } = useTheme();

  const router = useRouter();
  
//const { data: session } = useSession();

//useEffect(() => {
 // if (session) {
   // router.push("/dashboard");
 // }
//}, [session, router]);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = async () => {
  try {
    const response = await axios.post(
      "http://localhost:5000/api/auth/login",
      {
        email,
        password,
      }
    );

    localStorage.setItem("token", response.data.token);

    alert("Login Successful!");

    router.push("/dashboard");
  } catch (err) {
    alert("Invalid email or password");
  }
};

  return (
    <main
      className={`min-h-screen transition-all duration-300 ${
        darkMode
          ? "bg-gray-900 text-white"
          : "bg-gradient-to-br from-green-50 via-white to-blue-50 text-black"
      }`}
    >
      <Navbar />

      <section className="flex justify-center items-center py-20 px-6">
        <div className="bg-white rounded-2xl shadow-2xl p-10 w-full max-w-md">

          <h1 className="text-4xl font-bold text-center text-green-600">
            🔐 Welcome Back
          </h1>

          <p className="text-center text-gray-500 mt-2 mb-8">
            Sign in to continue exploring EcoStay AI
          </p>

          <input
  type="email"
  placeholder="Email Address"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  className="w-full border rounded-lg p-3 mb-4 text-black"
/>

 <input
  type="password"
  placeholder="Password"
  value={password}
  onChange={(e) => setPassword(e.target.value)}
  className="w-full border rounded-lg p-3 mb-6 text-black"
/>
<button
  onClick={handleLogin}
  className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition"
>
  Login
</button>
<div className="my-4 text-center text-gray-500">OR</div>

<button
  onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
  className="w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-lg font-semibold transition"
>
  Continue with Google
</button>

          <p className="text-center mt-6 text-sm text-gray-500">
            Demo interface for Week 5 submission
          </p>

        </div>
      </section>

      <Footer />
    </main>
  );
}