# MERN JWT
Just curious how JWT works. Lets do it from scratch.

## Dev Logs

### JWT
- So the JWT in this project works like this: 
    1. When user logs in or register a new account, create a new object named (let's name it token). We pass whatever value into the token (E.g: userID), then encode it with some secret-key/public-key that is stored in `.env` file. Also pass in other properties such as validity period for the token. The token will be stored in the browser cookie.
    2. Then, create a middleware which will protect the route. Every time the protected route got hit, we execute a function to decode the token with the same secret-key/public-key.
    3. Query the userID from the decoded token. If found, then user is authorized.
    4. If user not found or token expired, throw an error.
    5. Token will be deleted from browser cookie once user logs out.

- JWT is a good way of tracking the currently authenticated user since the token is persisted in user's browser. Hence, a hacker need to have physical access to the user's laptop to actually get the token.
- I think JWT is the go to standard when doing authentication. I guess 2FA and services like [Clerk](https://clerk.com/) also implements JWT under the hood.
- It is certainly better then storing list of currently logged in users in database LOL.

### Frontend
- I installed `react-bootstrap` hoping to be able to code the UI faster. Unfortunately it slows me down since I need to learn how to use those bootstrap components. And the UI looks so bootstrapy makes we wanna puke 🤮. So I decided to replace it with Tailwind CSS so I can just write CSS classes and don't need to care about UI components.
- But then I have an idea to speed things up faster. I'll just generate the UI using [Vercel's v0](https://v0.dev/), so I can just copy paste beautiful codes. Oh wait, the generated codes contains UI components from [shadcn/ui](https://ui.shadcn.com/). I recall it was so hyped on social media a few months ago. Let's install it and give it a try.
- I got stuck after installing a shadUi component. So my vite configuration uses `./` relative path for the imports. However shadUI uses `@/` alias. The `@/components` works but the `@lib/utils` doesn't. Tried to tinker around with `vite.config.ts` and `tsconfig.josn` but I'm unable to resolve the issue. Current workaround is to just import from `../../lib/utils` instead. Not pretty, but I don't want to waste time on this.
- Last time I mentioned that I just wanted to write CSS class and don't want to waste time learning the UI components. Unfortunately shadUi is full of those components. So I still need install each of the components seperately and learn to use it. I'm really contradicting myself right now LOL. It still uses tailwind classes for the styling tho.
- Last time I work with redux in my previous company, it was already setup and I just need to import the part that I wanted to use. Time time I'm setting it up from scratch and it indeed have bunch of boilerplates that I don't really know what it does. "I was today years old" when I finally experience the struggle of redux.

## Reference
Tutorial: [MERN Crash Course | JWT Authentication, Redux Toolkit, Deployment & More](https://www.youtube.com/watch?v=R4AhvYORZRY)"