![](https://img.shields.io/badge/Microverse-blueviolet)

# Leaderboard

> This is an app where you can check and submits scores usings APIs.

![screenshot](./app_screenshot.png)

Additional description about the project and its features.

## Built With

- HTML
- CSS
- JS
- Webpack
- Async/Await
- APIs
- Babel

## Live Demo
- Click for live demo: [Leaderboard Site](https://jasemduncan.github.io/Leaderboard/dist/)

## Getting Started

To get a local copy up and running follow these simple example steps.

### Setup

- Clone it as `git@github.com:JasemDuncan/Leaderboard.git`
- Run: npm install
- Run: npm run build
- Run: npm run start

### API Information
- This application uses the [Leaderboard API](https://www.notion.so/Leaderboard-API-service-24c0c3c116974ac49488d4eb0267ade3) service provided by Microverse.
- The base URL is https://us-central1-js-capstone-backend.cloudfunctions.net/api/
- It has basically 2 endpoints, /games/ (to create games) and /games/:id/scores/ (To create and get scores).
- To create a game, send a POST action to the base URL + /games/ with the name of the game.
- To create a new score, send a POST action to the base URL + /games/:id/scores/ (where id is the previous id of the created game) and the score and user name.


## Authors

👤 **Jasem Valencia**

- GitHub: [@JasemValencia](https://github.com/JasemDuncan)
- Twitter: [@JasemValencia](https://twitter.com/JasemValencia)
- LinkedIn: [@JasemValencia](https://www.linkedin.com/in/jasem-duncan-valencia/)


## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](../../issues/).

## Show your support

Give a ⭐️ if you like this project!

## Acknowledgments

- Hat tip to anyone whose code was used
- Inspiration
- etc

## 📝 License

This project is [MIT](./MIT.md) licensed.
