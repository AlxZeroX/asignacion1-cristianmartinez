import React from "react";
import { Link } from "react-router-dom";

export const Login = () => {
  return (
    <div className="flex items-center p-3">
      <Link
        to="/LoginScreen"
        className="bg-blue-700 rounded hover:bg-orange-600 text-white py-1 px-4"
      >
        <button
          className="fa fa-user-circle text-center text-lg pr-2 text-white"
        >
        </button>
        <button
          className="text-center text-lg pr-2 text-white"
        >
          <b> Login</b>
        </button>

      </Link>

    </div>

  );
};



