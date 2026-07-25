"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { ComplexChrome } from "@/components/complex/ComplexChrome";
import "../play-theme.css";
import "../login-theme.css";
import "../store-theme.css";

/** UI clone of /forums/pixelmon/login/ — Vietnamese */
export default function LoginPage() {
  const [show, setShow] = useState(false);
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(true);
  const [msg, setMsg] = useState("");

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!login.trim() || !password) {
      setMsg("Nhập tên/email và mật khẩu.");
      return;
    }
    setMsg("Đăng nhập thành công (UI).");
  }

  return (
    <div className="login-page-root template-login">
      <ComplexChrome modeLabel="Survival" active="login" />

      <div className="p-body-main login-body">
        <div className="p-body-header">
          <div className="p-title">
            <div className="inline-icon base md mr-md" aria-hidden>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
              </svg>
            </div>
            <h1 className="p-title-value">Đăng nhập</h1>
          </div>
        </div>

        <form className="block login-block" onSubmit={onSubmit}>
          <div className="block-container">
            <div className="block-body">
              <dl className="formRow formRow--input">
                <dt>
                  <div className="formRow-labelWrapper">
                    <label className="formRow-label" htmlFor="login">
                      Tên hoặc email
                    </label>
                  </div>
                </dt>
                <dd>
                  <input
                    id="login"
                    name="login"
                    className="input"
                    autoComplete="username"
                    autoFocus
                    value={login}
                    onChange={(e) => setLogin(e.target.value)}
                  />
                </dd>
              </dl>

              <dl className="formRow formRow--input">
                <dt>
                  <div className="formRow-labelWrapper">
                    <label className="formRow-label" htmlFor="password">
                      Mật khẩu
                    </label>
                  </div>
                </dt>
                <dd>
                  <div className="inputGroup inputGroup--joined">
                    <input
                      id="password"
                      name="password"
                      type={show ? "text" : "password"}
                      className="input js-password"
                      autoComplete="current-password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <div className="inputGroup-text">
                      <button type="button" className="iconic-label" onClick={() => setShow((v) => !v)}>
                        {show ? "Ẩn" : "Hiện"}
                      </button>
                    </div>
                  </div>
                  <a
                    className="login-forgot"
                    href="https://discord.gg/LyraPixel"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Quên mật khẩu?
                  </a>
                </dd>
              </dl>

              <dl className="formRow">
                <dt>
                  <div className="formRow-labelWrapper" />
                </dt>
                <dd>
                  <ul className="inputChoices">
                    <li className="inputChoices-choice">
                      <label className="iconic">
                        <input
                          type="checkbox"
                          name="remember"
                          checked={remember}
                          onChange={(e) => setRemember(e.target.checked)}
                        />
                        <span className="iconic-label">Duy trì đăng nhập</span>
                      </label>
                    </li>
                  </ul>
                </dd>
              </dl>
            </div>

            {msg ? <p className="login-msg">{msg}</p> : null}

            <dl className="formRow formSubmitRow">
              <dt />
              <dd>
                <div className="formSubmitRow-controls">
                  <Link href="/register" className="button">
                    Đăng ký
                  </Link>
                  <button type="submit" className="button button--primary button--icon--login">
                    Đăng nhập
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
