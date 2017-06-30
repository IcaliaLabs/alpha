# **Alpha**
### ***Craft your own (fully customizable) web-based chatbot***
####**Check out our [live demo](https://try-alpha.herokuapp.com)**
Alpha is a bot, or rather a base to craft your own web-based **chatbot**.
We started this project because we think chatbots can be super helpful and quite fun, however the current state of affairs has most chatbots limited to existing messaging platforms such as Facebook, which is quite OK, **but what if you want your bot to live elsewhere on the web**?

You can build your own bot and **define your own visual styles and rules** as well as have **unlimited control for customization and logic**. Various solutions already exist, but they can be limiting, costly and hard to implement.

***This is where Alpha comes handy.*** This library is designed to let you build your own bot in a very simple way. You just have to **1) Download, 2) Insert your own Q&A tree, 3) Insert your own colors and images**. Alpha takes care of the whole UI rendering and handling of the *application state*. **You don't really need to know any React** (or Javascript for that matter). However, if you know your way around React and Redux you can further customize the rendering of the bot-app, and even **connect it to any back-end or AI engine of your choice.** 
## **Installation**
Alpha is built to run on **[Docker](https://www.google.com.mx/url?sa=t&rct=j&q=&esrc=s&source=web&cd=1&cad=rja&uact=8&ved=0ahUKEwisgvjWuOTUAhVFQiYKHUTRB84QFggmMAA&url=https://www.docker.com/&usg=AFQjCNHuzQZ0w4cpXaM93txh2HBVWjeFaA)**. However you can run it locally as long as you have **[NodeJS](https://nodejs.org)** as well as **npm** or **[yarn](https://www.google.com.mx/url?sa=t&rct=j&q=&esrc=s&source=web&cd=1&cad=rja&uact=8&ved=0ahUKEwiB-L-tuuTUAhXEyyYKHfXWASsQFggiMAA&url=https://yarnpkg.com/&usg=AFQjCNFroCU9gpWAHS2N0ZdHNYurDzRu_w)** (preferred!) in your system.
#### **Development**
To install and run in your computer just run the following commands in your terminal. You'll need to have Docker installed (See below for instructions witout docker):

 1.  Clone this repo:  `git clone https://github.com/IcaliaLabs/alpha.git`
 2. Navigate into directory: `cd alpha` 
 2. Start with Docker: `docker-compose up web`

***That's it!** you should see the demo bot up and running in your browser if you open **[localhost:3000](http://localhost:3000/)*** in your browser.

A couple of important points when running on development mode:

 - The bot app will have **[Hot Reloading](https://github.com/webpack/docs/wiki/hot-module-replacement-with-webpack)** enabled, so that you can experience the benefits of Webpack + React.
 - **[Redux DevTools](https://www.google.com.mx/url?sa=t&rct=j&q=&esrc=s&source=web&cd=3&cad=rja&uact=8&ved=0ahUKEwjm7K-HueTUAhWG4yYKHbzKBRYQFggwMAI&url=https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en&usg=AFQjCNFg4ldS78uapjCGBaNjL9NvIwZGhg)** are enabled by default so that you can inspect the app's actions/state chages in real time.
 - *The time between each bot message **is set to 0***. This is to minimize developers' frustration when they go over the conversation flow again and again, however you can change this behavior if you wish at `app/containers/BotContainer/sagas.js` .

#### **Production**

 - **Heroku: **
	 Just run `git push heroku master`. This bot is Heroku-ready!


#### **Without Docker**
If you wish to install and run without Docker you'll have to install all the dependencies directly in your directory:

**For Development**:
 1. Clone this repo:  `git clone https://github.com/IcaliaLabs/alpha.git`
 2. Navigate into directory: `cd alpha` 
 3. Run either `npm install` or `yarn install` to install the dependencies
 4. Run `npm start` to fire up the server
 5. Visit **[localhost:3000](http://localhost:3000/)** in your browser

**For Production**:

 
## **Customizing the Dialogue**
All the logic behind what the bot says, including the Q&A logic live inside **the BotMind** which lives at `app/BotMind/`:
#### **The BotMind**
The main file for the BotMind is **BotMind.js**, but this file only acts as the collector and exporter of the functions living at **_initialBubble.js**, **_nextBubble.js**, and **_recommendationBubbles.js**.
These three files in turn carry out their logic based on the Q&A trees that live inside `app/BotMind/BotMindFlows/`.
## **Customizing the UI**
## **Changing React app behavior (refer to RBP documentation)**
## **Sending Emails (TBD)**
## **Connecting to any Back-End (TBD)**
## **Connecting to AI Engines (TBD)**