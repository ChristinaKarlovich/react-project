async function fetchData(searchText: string | null, pageNumber: number, pageSize = 10) {
  const base = "https://stapi.co/api/v1/rest/episode/search";

  let init: RequestInit | undefined;

  if (searchText) {
    init = {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      redirect: "follow",
      referrerPolicy: "strict-origin-when-cross-origin",
      body: new URLSearchParams({ title: searchText, name: searchText }),
    };
  }
  const response = await fetch(`${base}?pageSize=${pageSize}&pageNumber=${pageNumber}`, init);
  return {
    item: await response.json(),
  };

  // .then((res) => res.json())
  // .then((res) => {
  //   console.log(res.episodes);
  //   return res.episodes;
  // });
}

export default fetchData;
