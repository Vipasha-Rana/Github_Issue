export const getAllData = async (owner, repo, pageNum, itemsPerPage) => {
  const getOrgRepo = await fetch(`https://api.github.com/repos/${owner}/${repo}`);
  const orgRepo = await getOrgRepo.json();
  if (orgRepo.message) return orgRepo;

  const getIssues = await fetch(
    `https://api.github.com/repos/${owner}/${repo}/issues?per_page=${itemsPerPage}&page=${pageNum}`
  );
  const issues = await getIssues.json();

  orgRepo.issues = issues;
  return orgRepo;
};

export const getIssueComments = async (commentsUrl) => {
  const getComments = await fetch(commentsUrl);
  const comments = await getComments.json();
  return comments;
};
