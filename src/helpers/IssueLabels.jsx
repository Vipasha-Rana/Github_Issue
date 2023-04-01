import React from "react";
import "./IssueLabels.css";

export function IssueLabels({ labels }) {
  if (labels && labels.length > 0) {
    const allLabels = labels.map((label) => (
      <p key={label.id} style={{ border: `2px solid #${label.color}` }}>
        {label.name}
      </p>
    ));

    return <div className="issue-labels">{allLabels}</div>;
  } else {
    return null;
  }
}
