import React from "react";

export default function Dashboard() {
  return <><div className="heading"><div><small>YOUR WORKSPACE</small><h1>Good afternoon, Arsh <em>✦</em></h1><p>Here’s a quick look at your student network.</p></div></div><div className="stats">{[["0", "Upcoming meetings"], ["0", "Connections"], ["0", "Saved resources"], ["0%", "Profile complete"]].map((s) => <div key={s[1]}><span>↗</span><b>{s[0]}</b><p>{s[1]}</p></div>)}</div></>;
}
