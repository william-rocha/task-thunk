const taskApis = {
  getAll: () =>
    fetch("http://www.mocky.io/v2/5c05ba563300006e00e8133a").then(resp =>
      resp.json()
    )
};

export { taskApis };
