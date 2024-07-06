# MERN JWT
Just curious how JWT works. Lets do it from scratch.

## Dev Logs
- So the JWT in this project works like this: 
    1. When user logs in or register a new account, create a new object named (let's name it token). We pass whatever value into the token (E.g: userID), then encode it with some secret-key/public-key that is stored in `.env` file. Also pass in other properties such as validity period for the token. The token will be stored in the browser cookie.
    2. Then, create a middleware which will protect the route. Every time the protected route got hit, we execute a function to decode the token with the same secret-key/public-key.
    3. Query the userID from the decoded token. If found, then user is authorized.
    4. If user not found or token expired, throw an error.
    5. Token will be deleted from browser cookie once user logs out.

- JWT is a good way of tracking the currently authenticated user since the token is persisted in user's browser. Hence, a hacker need to have physical access to the user's laptop to actually get the token.
- I think JWT is the go to standard when doing authentication. I guess 2FA and services like [Clerk](https://clerk.com/) also implements JWT under the hood.
- It is certainly better then storing list of currently logged in users in database LOL.

## Reference
Tutorial: [MERN Crash Course | JWT Authentication, Redux Toolkit, Deployment & More](https://www.youtube.com/watch?v=R4AhvYORZRY)