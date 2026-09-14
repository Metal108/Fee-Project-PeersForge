import React, { useEffect, useState } from "react";

export default function Notes() {
  const [notes, setNotes] = useState(() => JSON.parse(localStorage.getItem("pf_notes") || "[]"));
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  function addNote(e) { e.preventDefault(); if (!title.trim()) return; setNotes([...notes, { id: Date.now(), title, content }]); setTitle(""); setContent(""); }
  function remove(id) { setNotes(notes.filter((n) => n.id !== id)); }
  useEffect(() => localStorage.setItem("pf_notes", JSON.stringify(notes)), [notes]);
  return <><div className="heading"><div><small>PERSONAL KNOWLEDGE</small><h1>My notes</h1><p>Create notes and save them in your browser.</p></div></div><div className="notes"><form className="panel note-form" onSubmit={addNote}><h2>New note</h2><label>Title<input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Java Notes" /></label><label>Content<textarea value={content} onChange={(e) => setContent(e.target.value)} rows="8" placeholder="Write anything..." /></label><button className="btn primary full">Save note</button></form><section className="panel"><h2>Saved notes</h2>{!notes.length && <p className="muted">No notes yet.</p>}{notes.map((n) => <article className="note" key={n.id}><div><h3>{n.title}</h3><p>{n.content || "Empty note"}</p></div><button onClick={() => remove(n.id)}>Delete</button></article>)}</section></div></>;
}
