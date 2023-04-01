import React from "react";
import { IssuesList } from "../IssueList/IssuesList";
import { Pagination } from "../IssueList/Pagination";
import "./IssuesPage.css";

export function IssuesPage(props) {
  const {
    issues,
    address,
    openIssuesNum,
    pageNum,
    itemsPerPage,
    handleSetPageNumber,
    handleItemsPerPage,
  } = props;

  return (
    <main id="issues-home-page">
      <IssuesList
        issues={issues}
        address={address}
        openIssuesNum={openIssuesNum}
        pageNum={pageNum}
        handleItemsPerPage={handleItemsPerPage}
        itemsPerPage={itemsPerPage}
      />
      <Pagination
        openIssuesNum={openIssuesNum}
        pageNum={pageNum}
        itemsPerPage={itemsPerPage}
        handleSetPageNumber={handleSetPageNumber}
      />
    </main>
  );
}
