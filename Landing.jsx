import React from "react";
import { Link } from "react-router-dom";

function Logo({ dark = false }) {
  return <Link className={`logo ${dark ? "dark" : ""}`} to="/"><b>P</b><span>Peers<span>Forge</span></span></Link>;
}

function Feature({ icon, title, text }) {
  return <article className="feature-card"><span>{icon}</span><h3>{title}</h3><p>{text}</p><b>Available in workspace</b></article>;
}

export default function Landing() {
  return (
    <div className="landing">
      <nav className="landing-nav"><Logo dark /><div><a href="#features">Features</a><a href="#how">How it works</a><Link to="/login">Sign in</Link></div><Link className="btn primary" to="/login">Get started →</Link></nav>
      <section className="hero">
        <div className="pill">✦ Student collaboration, made simple</div>
        <h1>Find your people.<br /><em>Build together.</em></h1>
        <p>Discover peers, explore student projects and keep your learning resources organized — all in one simple workspace.</p>
        <div className="hero-buttons"><Link className="btn primary big" to="/login">Explore PeersForge →</Link><a className="btn light big" href="#features">See features</a></div>
        <div className="hero-image"><img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1400&q=80" /><div className="floating"><b>12</b><span>new connections</span></div></div>
      </section>
      <section id="features" className="features"><small>WHAT YOU CAN DO</small><h2>Everything students need to<br /><em>learn together.</em></h2><div className="feature-grid"><Feature icon="♧" title="Find Peers" text="Search by name or skill and connect with students." /><Feature icon="◫" title="Schedule Meetings" text="Add a meeting name, date and time and keep your schedule organized." /><Feature icon="▤" title="Resource Hub" text="Save useful React, Java, DSA and web resources." /><Feature icon="✎" title="My Notes" text="Create notebooks like Java Notes and write anything inside." /></div></section>
      <section id="how" className="how"><div><small>HOW IT WORKS</small><h2>Simple. Useful.<br />Student-first.</h2></div><div>{["Create your profile", "Discover peers", "Learn & build"].map((x, i) => <div className="step" key={x}><b>0{i + 1}</b><span>{x}</span></div>)}</div></section>
      <footer>© 2026 PeersForge · Built with React</footer>
    </div>
  );
}
