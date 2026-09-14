import React from "react";
import { peers } from "../data";

export default function FindPeers() {
  return <><div className="heading"><div><small>STUDENT NETWORK</small><h1>Find Peers</h1><p>Search students by name or skill and connect with them.</p></div></div><div className="panel"><input placeholder="Search by name or skill" /><p className="muted">{peers.length ? `${peers.length} students available.` : "No students available yet."}</p></div></>;
}
