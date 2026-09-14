import React from "react";
import { resources } from "../data";

export default function Resources() {
  return <><div className="heading"><div><small>LEARNING RESOURCES</small><h1>Resource Hub</h1><p>Save useful learning resources.</p></div></div><div className="panel"><input placeholder="Search resources" /><p className="muted">{resources.length ? `${resources.length} resources available.` : "No resources available yet."}</p></div></>;
}
