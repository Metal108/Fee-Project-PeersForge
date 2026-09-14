import React, { useEffect, useState } from "react";

export default function Meetings() {
  const [list, setList] = useState(() => JSON.parse(localStorage.getItem("pf_user_meetings") || "[]"));
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [type, setType] = useState("Study session");
  const [place, setPlace] = useState("Online");
  useEffect(() => localStorage.setItem("pf_user_meetings", JSON.stringify(list)), [list]);
  function add(e) { e.preventDefault(); if (!name || !date || !time) return; setList([...list, { id: Date.now(), title: name, date, time, type, place }]); setName(""); setDate(""); setTime(""); }
  function remove(id) { setList(list.filter((m) => m.id !== id)); }
  const all = [...list].sort((a, b) => `${a.date}${a.time}`.localeCompare(`${b.date}${b.time}`));
  return <><div className="heading"><div><small>PLAN TOGETHER</small><h1>Meetings</h1></div></div><div className="meeting-layout"><form className="panel meeting-form" onSubmit={add}><h2>New meeting</h2><label>Meeting name<input value={name} onChange={(e) => setName(e.target.value)} placeholder="e.g. Java revision" /></label><div className="date-time"><label>Date<input type="date" value={date} onChange={(e) => setDate(e.target.value)} /></label><label>Time<input type="time" value={time} onChange={(e) => setTime(e.target.value)} /></label></div><label>Type<select value={type} onChange={(e) => setType(e.target.value)}><option>Study session</option><option>Team meeting</option><option>Practice</option></select></label><label>Place<input value={place} onChange={(e) => setPlace(e.target.value)} placeholder="Online / Library" /></label><button className="btn primary full">+ Add meeting</button></form><section><div className="meeting-section-title"><h2>Upcoming schedule</h2><span>{all.length} meetings</span></div>{all.map((m) => <article className="meeting-card" key={m.id}><div className="meeting-date big-date"><b>{new Date(m.date + "T00:00:00").getDate()}</b><span>{new Date(m.date + "T00:00:00").toLocaleDateString("en-US", { month: "short" })}</span></div><div className="meeting-info"><h3>{m.title}</h3><p>{m.time} · {m.type}</p><small>📍 {m.place}</small></div><button className="delete-meeting" onClick={() => remove(m.id)}>Delete</button></article>)}</section></div></>;
}
