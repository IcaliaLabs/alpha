[![Made with Love by Icalia Labs](https://img.shields.io/badge/With%20love%20by-Icalia%20Labs-ff3434.svg)](https://github.com/IcaliaLabs) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md#pull-requests)

![Alpha ChatBot](https://s3.amazonaws.com/icalialabs/alpha/alpha-01.png)
### ***Craft your own (fully customizable) web-based chatbot***
[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)
#### **Check out our [live demo](https://try-alpha.herokuapp.com)**
#### **Real life implementation as [Icalia Labs](http://www.icalialabs.com) Virtual Sales Assisstant [here](http://quotient.icalialabs.com)**
Alpha is a bot, or rather a base to craft your own web-based **chatbot**.
We started this project because we think chatbots can be super helpful and quite fun, however the current state of affairs has most chatbots limited to existing messaging platforms such as Facebook, which is quite OK, **but what if you want your bot to live elsewhere on the web**?

You can build your own bot and **define your own visual styles and rules** as well as have **unlimited control for customization and logic**. Various solutions already exist, but they can be limiting, costly and hard to implement.

***This is where Alpha comes handy.*** This library is designed to let you build your own bot in a very simple way. You just have to:


1. **Download**
2. **Insert your own Q&A tree** 
3. **Insert your own colors and images**


Alpha takes care of the whole UI rendering and handling of the *application state*. **You don't really need to know any React** (or Javascript for that matter). However, if you know your way around React and Redux you can further customize the rendering of the bot-app, and even **connect it to any back-end or AI engine of your choice.** 

### **Table of Contents**

 1. [Installation](https://github.com/IcaliaLabs/alpha#installation)
 2. [Customizing the Dialogue](https://github.com/IcaliaLabs/alpha#customizing-the-dialogue)
 3. [Making Recommendations](https://github.com/IcaliaLabs/alpha#making-recommendations-to-users-choose-dialogue-path-based-on-accumulated-dialogue-history)
 4. [Customizing the UI](https://github.com/IcaliaLabs/alpha#customizing-the-ui)
 5. [Customizing the React app](https://github.com/IcaliaLabs/alpha#customizing-the-react-app)
 6. [Sending Emails (TBD)](Sending%20Emails%20%28TBD%29)
 7. [Connecting to any Back-End (TBD)](Connecting%20to%20any%20Back-End%20%28TBD%29)
 8. [Connecting to AI Engines (TBD)](https://github.com/IcaliaLabs/alpha#connecting-to-ai-engines-tbd)
 

## **Installation**
Alpha is built to run on **[Docker](https://www.google.com.mx/url?sa=t&rct=j&q=&esrc=s&source=web&cd=1&cad=rja&uact=8&ved=0ahUKEwisgvjWuOTUAhVFQiYKHUTRB84QFggmMAA&url=https://www.docker.com/&usg=AFQjCNHuzQZ0w4cpXaM93txh2HBVWjeFaA)**. However you can run it locally as long as you have **[NodeJS](https://nodejs.org)** as well as **[npm](https://www.google.com.mx/url?sa=t&rct=j&q=&esrc=s&source=web&cd=1&cad=rja&uact=8&ved=0ahUKEwju9_rV3-XUAhXHSyYKHWW0CvwQFggmMAA&url=https%3A%2F%2Fwww.npmjs.com%2F&usg=AFQjCNHcRudvKKNX4eMuQBtERCMyaPp85w)** or **[yarn](https://www.google.com.mx/url?sa=t&rct=j&q=&esrc=s&source=web&cd=1&cad=rja&uact=8&ved=0ahUKEwiB-L-tuuTUAhXEyyYKHfXWASsQFggiMAA&url=https://yarnpkg.com/&usg=AFQjCNFroCU9gpWAHS2N0ZdHNYurDzRu_w)** (preferred!) in your system.

#### **Development**
To install and run in your computer just run the following commands in your terminal. You'll need to have Docker installed (See below for instructions without docker):

 1.  Clone this repo:  `git clone https://github.com/IcaliaLabs/alpha.git`
 2. Navigate into directory: `cd alpha` 
 3. Install dependencies: `docker-compose run --rm alpha yarn install`
 4. Then you can lift the server: `docker-compose up alpha`

**That's it!** you should see the demo bot up and running in your browser if you open **[localhost:3000](http://localhost:3000/)*** in your browser.

A couple of important points when running on development mode:

 - The bot app will have **[Hot Reloading](https://github.com/webpack/docs/wiki/hot-module-replacement-with-webpack)** enabled, so that you can experience the benefits of Webpack + React.
 - **[Redux DevTools](https://www.google.com.mx/url?sa=t&rct=j&q=&esrc=s&source=web&cd=3&cad=rja&uact=8&ved=0ahUKEwjm7K-HueTUAhWG4yYKHbzKBRYQFggwMAI&url=https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en&usg=AFQjCNFg4ldS78uapjCGBaNjL9NvIwZGhg)** are enabled by default so that you can inspect the app's actions/state chages in real time.
 - *The time between each bot message **is set to 0***. This is to minimize developers' frustration when they go over the conversation flow again and again, however you can change this behavior if you wish at `app/containers/BotContainer/sagas.js`.

#### **Production**

 - **Heroku:**
	 Just run `git push heroku master`. This bot is Heroku-ready!

 - **Local with Docker:**
  If you can to compile the image to see how it will behave on
production, we put a build together as well. Just run:

  ```
    docker-compose up release
  ```

It will build the image and lift the production server.

#### **Without Docker**
If you wish to install and run without Docker you'll have to install all the dependencies directly in your directory:

**For Development:**
 1. Clone this repo:  `git clone https://github.com/IcaliaLabs/alpha.git`
 2. Navigate into directory: `cd alpha` 
 3. Run either `npm install` or `yarn install` to install the dependencies
 4. Run `npm start` to fire up the server
 5. Visit **[localhost:3000](http://localhost:3000/)** in your browser

**For Production:**

 - This repo is Heroku ready, just do `git push heroku master`
 - If for some reason you alter your `package.json`'s scripts, be sure to consider [these steps](https://github.com/react-boilerplate/react-boilerplate/blob/master/docs/general/deployment.md) before deploying to a production server.
 - For AWS you can follow the same steps listed [here](https://github.com/react-boilerplate/react-boilerplate/blob/master/docs/general/deployment.md#aws-s3)
 - For Azure/Softlayer/other servers you'll have to ssh to the server, pull the repo, install the dependencies using `yarn` and then do `npm run build` in order to create the `./build` folder. Finally you can start the server using `start:prod`. Alternatively just run `start:production` and it'll run these steps together in sequence, plus tests. 
 
## **Customizing the Dialogue**
All the logic behind what the bot says, including the Q&A logic live inside **the BotMind** which lives at `app/BotMind/`.
We call each individual bot or user input as **Bubbles** because they are renderd as such in the chat UI.
>*In order to customize the dialogue you just need to understand and edit **app/BotMind/_initialBubble.js** and **app/BotMind/BotMindFlows/index.js**.*
#### **The BotMind**
The main file for the BotMind is **BotMind.js**, but this file only acts as the collector and exporter of the functions living at **_initialBubble.js**, **_nextBubble.js**, and **_recommendationBubbles.js**.
These three files in turn carry out their logic based on the Q&A trees that live inside `app/BotMind/BotMindFlows/`.
#### **_initialBubble.js**
Here you can set at which point in the conversation tree does your bot start when initialized or when the user selects to restart the conversation.
#### **_nextBubble.js**
This file contains the logic of which bubble or dialogue should the bot jump to based on the last message from the bot or from the user. 
You don't really need to alter this file, unless you wish to dig into much finer customization. *Proceed at your own risk.*
#### **_recommendationBubbles.js**
This file carries out the logic of choosing a path when `shouldEstimateRecommendation: true` is passed in a dialogue bubble. This file acts based on the points accumulated by the **Bags System** during the conversation.
You don't really need to alter this file, unless you wish to dig into much finer customization. *Proceed at your own risk.*
#### **The BotMindFlows**
The BotMindFlows live at `app/BotMind/BotMindFlows/`. By default here you will find just an `index.js` file, but if your conversation tree starts to get too big you can create your own files and use the `index.js` to combine them using the spread operator like this.
```
import greetings from './conversation1';
import designSprint from './conversation2';
import designSprintQuestions from './conversation3';

const questions = {
	...conversation1,
	...conversation2,
	...conversation3,
}

export default questions;
```
Each time the BotMind analyses where to go (inside `_nextBubble.js`) it expects to find a hash of questions inside `app/BotMind/BotMindFlows/index.js`. Questions is made up of... you guessed it, individual question-answer hashes. Here you can start laying down the logic and the flow of the conversation. For instance [in our demo](https://try-alpha.herokuapp.com) you'll find the following:
```javascript
const questions = {
	start:{
		botPrompt: "Hello Human, my name is <strong>Alpha</strong>, I am an awesome <strong>chatbot</strong>",
		answers: [
			{
				nextId: "myPurpose"
			}
		]
	},
	myPurpose:{
		botPrompt: "My purpose is to be a simple chatbot that <strong>guides users</strong> and <strong>is able to make decisions and make recommendations.</strong>",
		answers: [
			{
				nextId: "yourName"
			}
		]
	},
	yourName:{
		botPrompt: "So, What is your name?",
		input: textField(),
		answers: [
	      {
	        answer: common_greetings,
	        nextId: "greetings_notAName",
	      },
	      {
	        answer: common_greetings_negative,
	        catchName: true,
	        nextId: "asYouCanSee",
	      },
	    ],
	},
	...
}
export default questions;
```
Each question hash **must have it's own unique ID**. We recommend that you make these IDs *as self-explanatory as possible*, even if it means writing a little bit more, because as your bot's conversation library grows, remembering which ID does what can become a pain in the A.
Every question hash takes up the following options:

 - **botPrompt ([String] required):** The message from the bot
 -  **answers ([Array] required):** The different responses the bot may have based on what the user answers. The array is made up of hashes, each representing a possible conversation-flow outcome. The hashes inside [**answers**] take the following options:
	 - **nextId ([String] required)**: Determines which dialogue ID the bot will navigate to if this answer is met. On the last message from your bot or before you jump to *estimate a recommendation (**see below**)*, then you should pass `null`.
	 - **answer ([String | RegEx])**: The user answer that will trigger this hash. If you are using `selectField` or `tagsField` to pre-define answers for the user, you'll be fine using strings, otherwise you may want to use RegEx (see examples).
	 - **sumToBags ([Array])**: here you can start adding points to the **BagsSystem** in order to make more advanced flow-controls and/or emit recommendations if that's your bot's purpose. **sumToBags** will usually look like this: `sumToBags:[{name: "recommendation1", points: 1}, {name: "recommendation2", points: 3}]`
	 - **catchName ([Boolean])**: Will signal React to store the user's name from the users message into the app state.
	 - **catchCompanyName ([Boolean])**: Same as above but for a company name.
	 - **catchMail ([Boolean])**: Same as above but for email addresses.
	 - **catchPhone ([Boolean])**: Same as above but for phone numbers.
	 - **shouldEstimateRecommendation ([Boolean])**: Will signal the *BotMind* to break the regular flow and analyze the **Recommendation Bags** in order to move the conversation forward (see examples).
	 - **finishConversation ([Boolean])**: Will signal the bot to finish the conversation on the next dialogue. When this happens user input will disable and the bot will "go offline" until the user selects "Restart".

		**NOTE – if your botPrompt for this dialogue part does not expect ramification, you can just pass `nextId` like this :**
		
		```
		answers: [
			{
				nextId: "hello"
			}
		]
		``` 

 - **input ([Object])**: This determines what type of input is available to the user during this *botPrompt* (text field, tags, select, disabled, etc.). By default inputs are disabled text fields. We recommend that you use the **StateFormatter** helpers included at the beginning of the `index.js` file.
 - **type ([String])**: What kind of message is the bot transmitting ("text", "media", "link", or "transformedText").
 - **varName ([String])**: If you choose "transformedText" as your input type, you can write `@varName` in the *botPrompt*, which will refer to this option. When the bot renders the message it will look for the variable stored in the *React state* (**see below**) and replace `@varName` for the value of that variable.

## **Making 'Recommendations' to Users (*choose dialogue path based on accumulated dialogue history*)**
As mentioned above, you can choose to store some values in the React state, and later on compute a reaction/flow/recommendation based on these values. We call this the Bags System.

#### **The Bags System**
The concept of the bags system is that we pre-define some "**bags**" which we can fill with "**points**" as the conversation progresses. Finally when you decide to call `shouldEstimateRecommendation: true` on one of your question-answer hashes, **_recommendationBubbles.js** will be called into action to decide what to show next based on how many points each bag has accumulated.

The first step is to define the bags you'll be using at `/app/BotMind/recommendationBags.js`. If you do not define these bags, the bot will work, but won't know what to do when you call `addToBags` or `shouldEstimateRecommendation`. The bags look like this:
```
const recommendationBags = [
	{
		name: "redWine",
		defaultValue: 0,
		goToBubbleId: "redWine_start",
	},
	{
		name: "whiteWine",
		defaultValue: 0,
		goToBubbleId: "whiteWine_start",
	},
	{
		name: "roseWine",
		defaultValue: 0,
		goToBubbleId: "roseWine_start",
	},
]

export default recommendationBags;
```
Afterwards you can define when to add using `addToBags` in your question-answer flows, for instance:
```
question1:{
	botPrompt: "Which of these are you having?",
	input: selectField(["Red Meat", "Sea Food", "Chicken", "Pasta"]),
	answers: [
			...
			{
				answer: "Red Meat",
				nextId: "question2",
				sumToBags:[{name: "redWine", points: 4}, {name: "roseWine", points: 1}]
			},
			...
		]
	}
```
And when you're ready just call `shouldEstimateRecommendation` like this:
```
question2:{
	botPrompt: "What will you serve for dessert?",
	input: selectField(["Chocolate", ...]),
	answers: [
		...
		{
			answer: "Chocolate",
			shouldEstimateRecommendation: true,
			nextId: null,
			sumToBags:[{name: "redWine", points: 3}, {name: "whiteWine", points: 1}, {name: "roseWine", points: 2}]
		},
		...
	]
},
```
In this example `_recommendationBubbles.js` will be called, and thus the next bot bubble will probably be the one at `redWine_start`.

## **Customizing the UI**
We've taken the liberty to predefine a UI to save you some time.

The vast majority of the Bot's styles are ruled by a single file, `/app/customization/styleVariables.js`, here you can change pretty much all the colors used for all the elements, as well as the background of the UI.

If you wish to make further changes to the UI, you can dig right into the **stylesheet** files. There is a global file at `/app/global-styles.js` and some components or containers have their own `styledComponents.js` files in their respective folders for particular, modular components. These files use [**Styled-Components**](https://www.styled-components.com/), a pretty awesome library for React/ES6 (which is officialy considered as a best-practices aid). These files use Javascript's [tagged template literals](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Template_literals) to interpolate JS vars with CSS, but **don't freak out**, these can be treated pretty much as regular CSS/SCSS.

**NOTE - Our intention is to gradually migrate to 100% independent, modularly styled components such as the ones found at `/app/components/UserInput/styledComponents.js` and get rid of pretty much all the code at `/app/global-styles.js`**

If your customization wishes are not satisfied just by fiddling with the CSS of the coponents, you can customize pretty much everything else at your will, but beyond this point you'll have to deal with the React (+Redux) side of the app (**see below**).

## **Customizing the React app**
The whole React side of Alpha has been refactored taking [this awesome repo as a base](https://github.com/react-boilerplate/react-boilerplate). Leveraging the most well-established best practices for React, namely the use of:

 - Redux
 - ImmutableJS
 - Reselect
 - Redux-Saga
 - Styled-Components
 
 If you wish to fiddle with the React side of Alpha, then you better take a look at **[these docs](https://github.com/react-boilerplate/react-boilerplate/tree/master/docs)** first.

## **Sending Emails (TBD)**
We're sure that you'd like to send automated emails to the Bot's owner and end-users with recap of their conversation or such, and we're working on a way to offer the most flexible and back-end agnostic solution that'll allow to virtually just "Plug & Play".

Right now your best bet is hooking this up to some Node or Express (or Rails 5.1.x) server and leveraging their own mailer solutions. You can take a look at the file `/app/BotMind/BotMailer.js` which we use for our Rails-based implementation, but as of now we have removed all the send-Email logic from the `/app/containers/BotContainer/sagas.js`, so you'd have to write your own sagas.

## **Connecting to any Back-End (TBD)**
This bot is based on React + Webpack only, meaning that you should be able to plug it in with any framework, back-end, etc., as long as it works with Webpack. 

At the moment the Bot can seamlessly connect with any API, but you'll have to write down your own action creators and sagas to get your desired behavior.

We'll add documentation here along the way as we adapt this bot for different implementations.

## **Connecting to AI Engines (TBD)**
Same as above, we intend to allow this bot to connect to other Artificial Intelligence Engines such as [Api.ai](https://api.ai/) and [IBM's Watson](https://www.ibm.com/watson/) in order to enhance interactions. This is one of our top to-do's.
