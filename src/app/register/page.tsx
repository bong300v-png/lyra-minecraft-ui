"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { ComplexChrome } from "@/components/complex/ComplexChrome";
import "../play-theme.css";
import "../login-theme.css";
import "../store-theme.css";

export default function RegisterPage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [show, setShow] = useState(false);
  const [msg, setMsg] = useState("");

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!username.trim() || !email.trim() || !password) {
      setMsg("Username, email, and password are required.");
      return;
    }
    if (password !== password2) {
      setMsg("Passwords do not match.");
      return;
    }
    setMsg("Demo clone only — opening official Lyra Register…");
    window.setTimeout(() => {
      window.open(
        "https://www.lyra.host/forums/pixelmon/register/",
        "_blank",
        "noopener,noreferrer",
      );
    }, 500);
  }

  return (
    <div className="login-page-root template-register">
      <ComplexChrome modeLabel="Pixelmon" active="register" />

      <div className="p-body-main login-body">
        <div className="p-body-header">
          <div className="p-title">
            <div className="inline-icon base md mr-md" aria-hidden>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z" />
              </svg>
            </div>
            <h1 className="p-title-value">Register</h1>
          </div>
        </div>

        <form className="block login-block" onSubmit={onSubmit}>
          <div className="block-container">
            <div className="block-body">
              <dl className="formRow formRow--input">
                <dt>
                  <label className="formRow-label" htmlFor="username">
                    Username
                  </label>
                </dt>
                <dd>
                  <input id="username" className="input" required maxLength={25} value={username} onChange={(e) => setUsername(e.target.value)} autoFocus />
                </dd>
              </dl>
              <dl className="formRow formRow--input">
                <dt>
                  <label className="formRow-label" htmlFor="email">
                    Email
                  </label>
                </dt>
                <dd>
                  <input id="email" type="email" className="input" required value={email} onChange={(e) => setEmail(e.target.value)} />
                </dd>
              </dl>
              <dl className="formRow formRow--input">
                <dt>
                  <label className="formRow-label" htmlFor="password">
                    Password
                  </label>
                </dt>
                <dd>
                  <div className="inputGroup inputGroup--joined">
                    <input id="password" type={show ? "text" : "password"} className="input" required value={password} onChange={(e) => setPassword(e.target.value)} />
                    <div className="inputGroup-text">
                      <button type="button" className="iconic-label" onClick={() => setShow((v) => !v)}>
                        {show ? "Hide" : "Show"}
                      </button>
                    </div>
                  </div>
                </dd>
              </dl>
              <dl className="formRow formRow--input">
                <dt>
                  <label className="formRow-label" htmlFor="password2">
                    Confirm password
                  </label>
                </dt>
                <dd>
                  <input id="password2" type={show ? "text" : "password"} className="input" required value={password2} onChange={(e) => setPassword2(e.target.value)} />
                </dd>
              </dl>
            </div>
            {msg ? <p className="login-msg">{msg}</p> : null}
            <dl className="formRow formSubmitRow">
              <dt />
              <dd>
                <div className="formSubmitRow-controls">
                  <Link href="/login" className="button">
                    Log in
                  </Link>
                  <button type="submit" className="button button--primary">
                    Register
                  </button>
                </div>
              </dd>
            </dl>
          </div>
        </form>
      </div>
    </div>
  );
}
