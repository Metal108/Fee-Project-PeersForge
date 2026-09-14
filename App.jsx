import React from "react";
import { Routes, Route, Navigate, Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import Landing from "./components/Landing";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import FindPeers from "./components/FindPeers";
import Meetings from "./components/Meetings";
import Resources from "./components/Resources";
import Notes from "./components/Notes";
import Profile from "./components/Profile";

function Layout() {
  const nav = useNavigate();
  const items = [
    ["dashboard", "⌂", "Dashboard"],
    ["peers", "♧", "Find Peers"],
    ["meetings", "▣", "Meetings"],
    ["resources", "▤", "Resources"],
    ["notes", "✎", "My Notes"],
    ["profile", "◉", "Profile"],
  ];
  return (
    <div className="shell">
      <aside>
        <Link className="logo" to="/"><b>P</b><span>Peers<span>Forge</span></span></Link>
        <small>WORKSPACE</small>
        {items.map(([path, icon, name]) => (
          <NavLink key={path} to={`/${path}`} className={({ isActive }) => isActive ? "nav active" : "nav"}>
            <i>{icon}</i>{name}
          </NavLink>
        ))}
        <div className="side-bottom">
          <div className="side-card">✦<strong>Build together</strong><p>Find peers who match your skills.</p></div>
          <button onClick={() => { localStorage.removeItem("pf_login"); nav("/"); }}>↪ Log out</button>
        </div>
      </aside>
      <main>
        <header>
          <span className="mobile-logo">Peers<span>Forge</span></span>
          <div className="header-user"><button>♢</button><Link to="/profile">Arsh</Link></div>
        </header>
        <div className="content"><Outlet /></div>
      </main>
    </div>
  );
}

function Protected() {
  return localStorage.getItem("pf_login") ? <Layout /> : <Navigate to="/login" replace />;
}

function NotFound() {
  return <div className="empty"><h1>404 — Page not found</h1><Link className="btn primary" to="/dashboard">Back to dashboard</Link></div>;
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route element={<Protected />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/peers" element={<FindPeers />} />
        <Route path="/meetings" element={<Meetings />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/profile" element={<Profile />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
