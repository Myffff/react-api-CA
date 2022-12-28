export const login = (username, password) => {
  return fetch("/api/users", {
    headers: {
      "Content-Type": "application/json"
    },
    method: "post",
    body: JSON.stringify({ username: username, password: password })
  }).then((res) => res.json());
};

export const signup = (username, email, password) => {
  return fetch("/api/users?action=register", {
    headers: {
      "Content-Type": "application/json"
    },
    method: "post",
    body: JSON.stringify({
      username: username,
      email: email,
      password: password
    })
  }).then((res) => res.json());
};

export const updateInfo = (id, username, email, password) => {
  return fetch(`/api/users/update/${id}`, {
    headers: new Headers({ "content-type": "application/json" }),
    method: "put",
    body: JSON.stringify({
      username: username,
      email: email,
      password: password
    })
  }).then((res) => res.json());
};

export const deleteUser = (id) => {
  return fetch(`/api/users/delete/${id}`, {
    headers: new Headers({ "content-type": "application/json" }),
    method: "delete"
  })
    .then((res) => res.json())
    .then((data) => {
      alert("successfully delete user");
      console.log("successfully delete user");
    })
    .catch((error) => {
      console.log(error);
    });
};

export const getMovies = () => {
  return fetch("/api/movies", {
    headers: {
      Authorization: window.localStorage.getItem("token")
    }
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
      Authorization: window.localStorage.getItem("token")
    }
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
      Authorization: window.localStorage.getItem("token")
    }
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
      Authorization: window.localStorage.getItem("token")
    }
  })
    .then((res) => {
      return res.json();
    })
    .catch((error) => {
      console.log(error);
    });
};
