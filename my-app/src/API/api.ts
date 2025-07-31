const base = "https://stapi.co/api/v1/rest/episode";

export async function getEpisodeList(searchText: string | null, pageNumber: number, pageSize = 10) {
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
  const response = await fetch(
    `${base}/search?pageSize=${pageSize}&pageNumber=${pageNumber}`,
    init,
  );
  return {
    item: await response.json(),
  };
}

export async function getEpisode(uid: string) {
  const response = await fetch(`${base}/?uid=${uid}`);
  return {
    item: await response.json(),
  };
}
