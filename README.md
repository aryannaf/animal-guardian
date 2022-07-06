<img width="506" alt="logo" src="https://user-images.githubusercontent.com/102264671/177438348-a5945ced-82c0-4ded-b5c3-a4325ef95589.png">


An educational awareness tool that utilizes 3D animal renders to challenge the disconnect between humans and endangered wildlife and go beyond a 2D image. Learn about Earth's endangered species and explore ways you can help.


## How to run the application

### Vist `animal-guardian.herokuapp.com`

OR

### Follow these steps:

1. Clone both the `animal-guardian` and `animal-guardian-server` repositories and open in an IDE

2. Type `npm i` in the command line to install all dependencies

3. In the server command line, type:

- `npx knex migrate:latest`
- `npx knex seed:run`

4. Create a ".env" file in the server, and set a PORT following the guidelines in the ".env.sample" file

5. Type `npx node index.js` and make sure the server is running

6. In the client-side command line, type `npm start` to launch the application
