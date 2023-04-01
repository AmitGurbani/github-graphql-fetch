function githubGraphqlFetch(githubToken: string) {
  return function (query: string) {
    return fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "bearer " + githubToken,
      },
      body: JSON.stringify({
        query,
      }),
    }).then((response) => response.json());
  };
}

export default githubGraphqlFetch;
