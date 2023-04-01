import React from "react";
import { Link } from "react-router-dom";
import "./Issue.css";
import { IssueNumber } from "../../helpers/IssueNumber";
import { IssueStatus } from "../../helpers/IssueStatus";
import { TimeAgo } from "../../helpers/TimeAgo";
import { UserDetails } from "../../helpers/UserDetails";
import { IssueTitle } from "../../helpers/IssueTitle";
import { IssueLabels } from "../../helpers/IssueLabels";

export function Issue({ issue, address, pageNum }) {
  const { user, number, state, created_at, title, labels } = issue;

  return (
    <div className="issue">
      <div className="issuer_outer">
        <div className="title_label">
          <Link>
            <IssueTitle title={title} />
          </Link>
          <IssueLabels labels={labels} />
        </div>
        <div className="issue_desc">
          <div className="issue_wrap">
            <IssueNumber issueNumber={number} />
            <IssueStatus status={state + "ed"} />
            <TimeAgo time={created_at} />
            <p> by </p>
            <p> </p>
            <UserDetails className="user" userName={user.login} />
          </div>
        </div>
      </div>
    </div>
  );
}
