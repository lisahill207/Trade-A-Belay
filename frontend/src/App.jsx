import LoginPage from "./pages/auth/login/LoginPage.jsx";
import SignUpPage from "./pages/auth/signup/SignUpPage.jsx";
import HomePage from "./pages/home/HomePage.jsx";
import UserPage from "./pages/home/UserPage.jsx";
import "./trade.css";

import { Route, Routes, Navigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "./components/body/Loading.jsx";

function App() {
  const { data: authUser, isLoading } = useQuery({
    queryKey: ["authUser"],
    queryFn: async () => {
      try {
        const res = await fetch("/api/auth/me");
        const data = await res.json();
        if (data.error) return null;
        if (!res.ok) {
          throw new Error(data.error || "Something went wrong");
        }
        console.log("authUser is here:", data);
        return data;
      } catch (error) {
        throw new Error(error);
      }
    },
    retry: false,
  });

  if (isLoading) {
    return (
      <div className="h-screen flex justify-center items-center">
        <LoadingSpinner size="lg" />
      </div>
    );
  }
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={!authUser ? <HomePage /> : <Navigate to="/profile" />}
        />
        <Route
          path="/signup"
          element={!authUser ? <SignUpPage /> : <Navigate to="/profile" />}
        />
        <Route
          path="/login"
          element={!authUser ? <LoginPage /> : <Navigate to="/profile" />}
        />
        <Route
          path="/profile/"
          element={authUser ? <UserPage /> : <Navigate to="/" />}
        />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
