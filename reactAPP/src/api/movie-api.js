export const login = (username, password) => {
  return fetch("/api/users", {
    headers: {
      "Content-Type": "application/json",
    },
    method: "post",
    body: JSON.stringify({ username: username, password: password }),
  }).then((res) => res.json());
};

export const signup = (username, password) => {
  return fetch("/api/users?action=register", {
    headers: {
      "Content-Type": "application/json",
    },
    method: "post",
    body: JSON.stringify({ username: username, password: password }),
  }).then((res) => res.json());
};

export const getMovies = () => {
  return fetch("/api/movies", {
    headers: {
      Authorization: window.localStorage.getItem("token"),
    },
  })
    .then((res) => {
      return res.json();
    })
    .catch((error) => {
      console.log(error);
    });
};

export const getGenres = () => {
  return fetch("/api/genres", {
    headers: {
      Authorization: window.localStorage.getItem("token"),
    },
  })
    .then((res) => {
      return res.json();
    })
    .catch((error) => {
      console.log(error);
    });
};

export const getPeople = () => {
  return fetch("/api/people", {
    headers: {
      Authorization: window.localStorage.getItem("token"),
    },
  })
    .then((res) => {
      return res.json();
    })
    .catch((error) => {
      console.log(error);
    });
};

export const getTrending = () => {
  return fetch("/api/trending", {
    headers: {
      Authorization: window.localStorage.getItem("token"),
    },
  })
    .then((res) => {
      return res.json();
    })
    .catch((error) => {
      console.log(error);
    });
};
