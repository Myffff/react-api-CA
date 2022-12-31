# Assignment 2 - Web API.

Name: Yifei Ma

## Features.

A bullet-point list of the ADDITIONAL features you have implemented in the API **THAT WERE NOT IN THE LABS** (or modifications to existing features)

- user cannot see popular people before login(protected route).
- use self define API in trending and people page.
- delete top rated page(for adding setting page, otherwise the navigation will be ugly :)
- midify login and register page
- add update user information page
- add the feature of delete exist user.

## Setup requirements.

```js
npm install
```

## API Configuration

I have `.env` respectively in reactApp folder and movies-api folder.

```

NODEENV=development
PORT=8080
HOST=
mongoDB=YourMongoURL
seedDb=true
secret=YourJWTSecret

```

## API Design

An overview of your web API design

- /api/movies | GET | Gets a list of movies `movies-api/api/movies`
- /api/movies/{movieid} | GET | Gets a single movie `movies-api/api/movies`
- /api/series | GET | Gets a list of TV series `movies-api/api/series`
- /api/series/{id} | GET | Gets a single TV series `movies-api/api/series`
- /api/people | GET | Gets a list of popular actors `movies-api/api/people`
- /api/trending | GET | Gets a list of trending movies/TV series `movies-api/api/trending`
- /api/user | GET | Gets a list of users `movies-api/api/users`
- /api/users?action=register | POST | add a new user`movies-api/api/users`
- /api/users/update/${id} | PUT | modify information of exist user.`movies-api/api/users`
- /api/users/delete/${id} | DELETE | delete exist user from user list.`movies-api/api/users`

SwaggerAPI document: [Yml Document](./APIDocument.yml)
link to online platform:
[SwaggerHub](https://app.swaggerhub.com/templates/20099867_1/YifeiMovieHub/1.0.1)
![api](./pic/pic1.jpg)
![schema](./pic/pic2.jpg)

## Security and Authentication

Give details of authentication/security implemented on the API (e.g. passport/sessions). Indicate which routes are protected.
there are two methods to authenticate:

- Front-end: use `isAuthenticated` to decide which page will not be shown when `isAuthenticiated==false`.

```
const [isAuthenticated] = useState(context.isAuthenticated);
{isAuthenticated && (...)}
```

- Back-end: use `passport` as written in lab for authentication.

```
app.use(
  "/api/movies",
  passport.authenticate("jwt", { session: false }),
  moviesRouter
);
```

## Integrating with React App

setting, trending, and people router use the API defined in back-end.
delete top rating from nevigation. add setting router for series options like login.
