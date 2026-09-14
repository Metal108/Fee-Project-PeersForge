import React, { useState } from "react";

export default function Profile() {
  const defaultProfile = { name: "Arshpreet Saini", branch: "CSE", year: "2nd Year", bio: "Frontend learner building practical React projects.", skills: "Java, JavaScript, React, Git" };
  const [profile, setProfile] = useState(() => JSON.parse(localStorage.getItem("pf_profile") || JSON.stringify(defaultProfile)));
  const [edit, setEdit] = useState(false);
  const [form, setForm] = useState(profile);
  function save(e) { e.preventDefault(); setProfile(form); localStorage.setItem("pf_profile", JSON.stringify(form)); setEdit(false); }
  return <><div className="heading"><div><small>ACCOUNT</small><h1>My profile</h1><p>Your student identity in PeersForge.</p></div>{!edit && <button className="btn primary" onClick={() => setEdit(true)}>Edit profile</button>}</div><div className="profile-card"><div><h1>{profile.name}</h1><p>{profile.branch} · {profile.year}</p><p>{profile.bio}</p><div className="tags">{profile.skills.split(",").map((s) => <span key={s}>{s.trim()}</span>)}</div></div></div>{edit && <form className="panel edit-form" onSubmit={save}>{Object.keys(form).map((key) => <label key={key}>{key}<input value={form[key]} onChange={(e) => setForm({ ...form, [key]: e.target.value })} /></label>)}<button className="btn primary">Save changes</button></form>}</>;
}
