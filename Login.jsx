import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Logo() {
  return <Link className="logo dark" to="/"><b>P</b><span>Peers<span>Forge</span></span></Link>;
}

export default function Login() {
  const nav = useNavigate();
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  function submit(e) {
    e.preventDefault();
    localStorage.setItem("pf_login", "yes");
    localStorage.setItem("pf_user", JSON.stringify({ email, password: pass }));
    nav("/dashboard");
  }
  return <div className="login-page"><div className="login-card"><div className="centered"><Logo /></div><h1>Welcome back</h1><p>Enter anything and continue to your student workspace.</p><form onSubmit={submit}><label>Student ID / Email<input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter anything" /></label><label>Password<input value={pass} onChange={(e) => setPass(e.target.value)} placeholder="Enter anything" /></label><button className="btn primary full">Continue →</button></form><small>No validation or backend — this is a frontend demo.</small></div></div>;
}
