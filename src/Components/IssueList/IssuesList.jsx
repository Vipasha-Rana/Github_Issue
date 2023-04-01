import React from "react";
import { Issue } from "../SingleIssue/Issue";
import "./IssuesList.css";

export function IssuesList({
  issues,
  address,
  openIssuesNum,
  pageNum,
  itemsPerPage,
  handleItemsPerPage,
}) {
  const optionsArray = Array.from({ length: 6 }, (v, i) => i * 5 + 5);

  const allOptions = optionsArray.map((value) => (
    <option key={value} value={value}>
      {value}
    </option>
  ));

  const issuesExist = Array.isArray(issues) && issues.length > 0;

  const allIssues =
    issuesExist &&
    issues.map((issue) => (
      <li key={issue.id}>
        <Issue issue={issue} address={address} pageNum={pageNum} />
      </li>
    ));

  return (
    <section className="issues-list">
      <h2>{address}</h2>
      <div className="list-header">
        <p>{openIssuesNum} Open</p>
        <div>
          <label>Issues per page:&nbsp;</label>
          <select
            name="per-page"
            defaultValue={itemsPerPage}
            onChange={(e) => handleItemsPerPage(e.target.value)}
          >
            {allOptions}
          </select>
        </div>
      </div>
      <ol>{allIssues}</ol>
    </section>
  );
}
