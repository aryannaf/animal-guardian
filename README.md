<img width="506" alt="logo" src="https://user-images.githubusercontent.com/102264671/177438348-a5945ced-82c0-4ded-b5c3-a4325ef95589.png">


An educational awareness tool that utilizes interactive 3D animal renders to challenge the disconnect between humans and endangered wildlife and go beyond a 2D image. Learn about Earth's endangered species and explore ways you can help.


Features:

- Explore wildlife species that are critically endangered, endangered, vulnerable and near threatened
- Discover animals (random species generator)
- Interactive 3D model
- Links to petitions and donation sites


![animal-guardian](https://user-images.githubusercontent.com/102264671/177769013-e8343de2-ce24-497f-bac9-d553e050be6e.png)



Tech Stack Used:

- React.js
- React THREE Fiber
- THREE.js
- Node.js
- Express.js
- MySQL


Next Steps

- user accounts where selected species and links can be saved for quick access



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

5. Type `node index.js` and make sure the server is running

6. Ensure the PORT you chose matches the client-side PORT for the API URLs

7. In the client-side command line, type `npm start` to launch the application
