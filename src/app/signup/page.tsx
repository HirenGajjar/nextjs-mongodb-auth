"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";
function page() {
  const [user, setUser] = React.useState({
    username: "",
    email: "",
    password: "",
  });

  const signUp = async () => {};

  return (
    <>
      <div className="flex flex-col items-center  justify-center min-h-screen py-2">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          value={user.username}
          className="text-black my-4"
          id="username"
          placeholder="Username"
          onChange={(e) => setUser({ ...user, username: e.target.value })}
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          value={user.email}
          id="email"
          className="text-black my-4"
          placeholder="Email"
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          value={user.password}
          id="password"
          className="text-black my-4"
          placeholder="Password"
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
        <button
          className="text-white bg-blue-600 rounded-lg py-2 px-4"
          onClick={() => signUp()}
        >
          SignUp
        </button>

        <Link href="/login">
          <p className="text-blue-600 hover:text-white my-4">
            Already have an account?
          </p>
        </Link>
      </div>
    </>
  );
}

export default page;
