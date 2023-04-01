import React, { useState, useEffect } from "react";
import { Header } from "./Header/Header";
import { IssuesPage } from "./IssuesPage/IssuesPage";
import { getAllData } from "../utils/api";
import { Switch, Route, useLocation } from "react-router-dom";
import "./App.css";

export function App() {
  const location = useLocation();

  const { pathname, state } = location;

  const isHomeUrl = pathname === "/";

  const creds = { owner: "github", repo: "hub" };

  const urlOrgRepo = () => {
    if (isHomeUrl) return creds;
    if (!state) return { owner: "", repo: "" };
    const { issueNumber, pageNumber, ...orgRepo } = state;
    return orgRepo;
  };

  const urlPageNum = () => {
    if (isHomeUrl) return 1;
    if (!state) return 1;
    return state.pageNumber;
  };

  const [orgRepoValue] = useState(urlOrgRepo());

  const { owner, repo } = orgRepoValue;

  const [pageNum, setPageNum] = useState(urlPageNum());

  const [itemsPerPage, setItemsPerPage] = useState(20);

  const [allData, setAllData] = useState({});

  const { issues, full_name, open_issues_count } = allData;

  const handleSetPageNumber = (num) => {
    setPageNum(num);
    setAllData({});
  };

  const handleItemsPerPage = (num) => {
    setItemsPerPage(num);
    setPageNum(1);
    setAllData({});
  };

  useEffect(() => {
    getAllData(owner, repo, pageNum, itemsPerPage).then((res) =>
      setAllData(res)
    );
  }, [owner, repo, pageNum, itemsPerPage]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pageNum]);

  return (
    <React.Fragment>
      <Header />
      <Switch>
        <Route exact path="/">
          <IssuesPage
            issues={issues}
            address={full_name}
            openIssuesNum={open_issues_count}
            pageNum={pageNum}
            itemsPerPage={itemsPerPage}
            handleSetPageNumber={handleSetPageNumber}
            handleItemsPerPage={handleItemsPerPage}
          />
        </Route>
      </Switch>
    </React.Fragment>
  );
}
