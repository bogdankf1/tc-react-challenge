export const callApi = (endpoint) => {
  return fetch(`${process.env.REACT_APP_API_BASE_URL}${endpoint}`, {
    headers: {
      Authorization: `Bearer ${process.env.REACT_APP_SPOTIFY_TOKEN}`,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  }).then((data) => data.json());
};
