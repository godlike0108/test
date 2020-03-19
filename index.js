const { Octokit } = require("@octokit/rest");

const octokit = new Octokit({
  auth: "b019461582fbd0eb70e5fb3af676d578f2f65d80"
});

// octokit.repos
//   .get({
//     owner: "godlike0108",
//     repo: "test"
//   })
//   .then(result => {
//     console.log(result);
//   });

octokit.git
  .getRef({
    owner: "godlike0108",
    repo: "test",
    ref: "heads/master"
  })
  .then(result => {
    return result.data.object.sha;
  })
  .then(sha => {
    return octokit.git.createRef({
      owner: "godlike0108",
      repo: "test",
      ref: "refs/heads/dudi",
      sha
    });
  })
  .catch(e => console.log(e));
