import { injectGlobal } from 'styled-components';
import * as variables from './customization/styleVariables';
import LinkIcon from './customization/linkIcon2.svg';
import { boilerplateCSS } from './customization/boilerplateCSS';
/* eslint no-unused-expressions: 0 */
injectGlobal`

${boilerplateCSS}

body {
  font-family: sans-serif;
  font-size: 14px;
  position: relative;
  background: ${variables.background};
  background-size: cover;
  height: 100vh;
}

.qt-frame {
  position: relative;
}

.qt-chat {
  background: ${variables.chatBGColor};
  position: fixed;
  transition: all 0.2s ease;
  display: flex;
  flex-direction: column;
}
.qt-chat.is-mini {
  bottom: 0;
  box-shadow: 0 -0.625rem 0.625rem rgba(0, 0, 0, 0.1);
  right: 0;
  top: 0;
  transform: translateX(110%);
  width: 31.25rem;
}
@media screen and (max-width: 768px) {
  .qt-chat.is-mini {
    bottom: 10%;
    width: 100%;
  }
}
.qt-chat.is-large {
  border-radius: 0.375rem;
  bottom: 10%;
  box-shadow: 0 0 6.25rem rgba(0, 0, 0, 0.1);
  left: 10%;
  top: 5%;
  width: 80%;
}
@media (max-width: 992px) {
  .qt-chat.is-large {
    width: 90%;
    left: 5%;
    top: 3%;
    bottom: 5%;
  }
}
@media (max-width: 640px) {
  .qt-chat.is-large {
    width: 94%;
    left: 3%;
    top: 2%;
    bottom: 3%;
  }
}

.qt-chat.is-active {
  transform: translateX(0%);
}


.qt-chat__dialogue + .qt-chat__dialogue {
  margin-top: 1.25rem;
}

.qt-chat__bubbles {
  flex: 1;
}

.qt-chat__media {
  border-radius: 0.625rem;
  margin: 0.625rem 0;
  overflow: hidden;
  width: 60%;
}
@media (max-width: 640px) {
  .qt-chat__media {
    width: 85%;
  }
}
.qt-chat__media img {
  max-width: 36.25rem;
}
@media (max-width: 640px) {
  .qt-chat__media img {
    width: 100%;
  }
}

.qt-chat__bubble a {
  font-weight: bold;
  text-decoration: underline;
}
.qt-chat__bubble div {
  border-radius: 1.5625rem;
  display: inline-block;
  max-width: 36.25rem;
  padding: 1rem;
  position: relative;
  -webkit-transition: width 2s;
  transition: width 2s;
}
.qt-chat__bubble strong {
  font-weight: bold;
  color: ${variables.strongTextColor};
}
.qt-chat__bubble em {
  font-style: italic;
}
.qt-chat__bubble + .qt-chat__bubble {
  margin-top: 0.625rem;
}
.qt-chat__bubble.is-link div:after {
  background: ${variables.primaryColor} url(${LinkIcon}) no-repeat center center;
  border-radius: 50%;
  content: '';
  display: inline-block;
  padding: 1rem;
  position: absolute;
  right: -20px;
  top: 0;
  transform: translate(50%, 50%);
}

.qt-chat__specialText {
  color: ${variables.bubbleTextColorBot};
  display: block;
  margin: 0.375rem 0;
}

.qt-avatar {
  border-radius: 50%;
  display: inline-block;
  height: 1.875rem;
  width: 1.875rem;
}
@media (max-width: 640px) {
  .qt-avatar {
    display: none;
  }
}

.qt-chat__dialogue.from-bot .qt-avatar {
  background: url(${variables.botAvatarIcon}) no-repeat center center ${variables.botAvatar};
  background-size: 50%;
}
.qt-chat__dialogue.from-bot .qt-chat__bubble div {
  background: ${variables.bubbleBGBot};
}
.qt-chat__dialogue.from-bot p {
  color: ${variables.bubbleTextColorBot};
}
.qt-chat__dialogue.from-bot .qt-avatar + .qt-chat__bubbles {
  margin-left: 1.25rem;
}
@media (max-width: 640px) {
  .qt-chat__dialogue.from-bot .qt-avatar + .qt-chat__bubbles {
    margin-left: 0;
  }
}
.qt-chat__dialogue.from-bot .qt-chat__bubble:first-child:not(.is-link) div {
  border-radius: 50px 50px 50px 0;
}
@media (max-width: 640px) {
  .qt-chat__dialogue.from-bot .qt-chat__bubble:first-child:not(.is-link) div {
    border-radius: 40px 50px 50px 0;
  }
}
.qt-chat__dialogue.from-bot .qt-chat__bubble:last-child div {
  border-radius: 0 50px 50px 50px;
}
@media (max-width: 640px) {
  .qt-chat__dialogue.from-bot .qt-chat__bubble:last-child div {
    border-radius: 0 50px 50px 40px;
  }
}

.qt-thinking, .qt-thinking:before, .qt-thinking:after {
  animation: loader 1s ease infinite;
  background: ${variables.primaryColor};
  border-radius: 50%;
  display: block;
  opacity: 0;
  padding: 0.125rem;
  position: relative;
  -webkit-transition: all 0.2s ease;
  transition: all 0.2s ease;
}
.qt-thinking:before {
  animation-delay: 0.1s;
  content: '';
  left: -140%;
  position: absolute;
  top: 0;
}
.qt-thinking:after {
  animation-delay: 0.2s;
  content: '';
  position: absolute;
  right: -140%;
  top: 0;
}

@keyframes loader {
  0% {
    opacity: 0;
    transform: translateY(100%);
  }
  50% {
    opacity: 1;
    transform: translateY(0%);
  }
  100% {
    opacity: 0;
    transform: translateY(-100%);
  }
}
.qt-chat__reply {
  padding: 0.625rem;
  background: ${variables.selectReplyColor};
  border-radius: 50px 50px 0 50px;
  color: ${variables.selectReplyTextColor};
  margin: 0.375rem;
  transition: all 0.2s ease;
}
.qt-chat__reply:hover {
  background: ${variables.selectReplyColorOnHover};
  color: ${variables.selectReplyTextColorOnHover};
}

.qt-chat__dialogue.from-user .qt-avatar {
  background: ${variables.userAvatar};
}
.qt-chat__dialogue.from-user .qt-chat__bubbles {
  text-align: right;
}
.qt-chat__dialogue.from-user .qt-chat__bubble div {
  background: ${variables.bubbleBGUser};
}
.qt-chat__dialogue.from-user p {
  color: ${variables.bubbleTextColorUser};
}
.qt-chat__dialogue.from-user .qt-chat__bubbles + .qt-avatar {
  margin-left: 1.25rem;
}
.qt-chat__dialogue.from-user .qt-chat__bubble:first-child div {
  border-radius: 50px 50px 0 50px;
}
@media (max-width: 640px) {
  .qt-chat__dialogue.from-user .qt-chat__bubble:first-child div {
    border-radius: 40px 50px 50px 0;
  }
}
.qt-chat__dialogue.from-user .qt-chat__bubble:last-child div {
  border-radius: 50px 0 50px 50px;
}
@media (max-width: 640px) {
  .qt-chat__dialogue.from-user .qt-chat__bubble:last-child div {
    border-radius: 0 50px 50px 40px;
  }
}

.qt-chat__optionCard {
  border-radius: 0.375rem;
  border: 1px solid rgba(93, 105, 117, 0.15);
  padding: 1.25rem;
  transition: all 0.1s ease-in;
}

.qt-chat__help {
  background: rgba(134, 156, 178, 0.1);
  border-radius: 6.25rem;
  color: ${variables.helpBGColor};
  padding: 0.625rem 1.25rem;
}

.qt-avatar.is-user {
  align-items: center;
  background: ${variables.userAvatar};
  color: ${variables.userAvatarTextColor};
  display: flex;
  justify-content: center;
}
@media (max-width: 640px) {
  .qt-avatar.is-user {
    display: none;
  }
}

.qt-chat__footer {
  margin-top: 0.625rem;
  width: 100%;
}

.qt-chat__field {
  width: 100%;
}

.qt-chat__input,
.qt-chat__select {
  background: ${variables.inputBGColor};
  border-radius: 0.125rem;
  border: 1px solid ${variables.inputBorderColor};
  color: ${variables.textColor};
  font-size: 0.875em;
  font-weight: 400;
  outline: 0;
  padding: 1rem;
  width: 100%;
  transition: background-color 1s ease;
}
@media (max-width: 640px) {
  .qt-chat__input,
  .qt-chat__select {
    border-radius: 1.25rem;
  }
}
.qt-chat__input[disabled],
.qt-chat__select[disabled] {
  background: ${variables.inputBorderColor};
}

@media (max-width: 640px) {
  .qt-chat__refresh {
    display: none;
  }
}

.qt-chat__tagsContainer {
  position: relative;
  width: 100%;
}
@media (max-width: 640px) {
  .qt-chat__tagsContainer {
    overflow-x: scroll;
    display: block;
    position: relative;
  }
}

.qt-chat__tags {
  padding: 0.625rem 0;
  position: relative;
}
@media (min-width: 641px) {
  .qt-chat__tags {
    width: 100% !important;
  }
}
@media (max-width: 640px) {
  .qt-chat__tags:after, .qt-chat__tags:before {
    z-index: 1;
    content: '';
    display: block;
    height: 100%;
    width: 0.625rem;
    top: 0;
    position: fixed;
  }
  .qt-chat__tags:after {
    right: 0.625rem;
    background: linear-gradient(to right, rgba(255, 255, 255, 0) 0%, white 100%);
  }
  .qt-chat__tags:before {
    left: 0.625rem;
    background: linear-gradient(to left, rgba(255, 255, 255, 0) 0%, white 100%);
  }
}
.qt-chat__tag {
  display: inline-block;
  margin: 0.25rem;
  position: relative;
}
.qt-chat__tag input[type="checkbox"] {
  height: 100%;
  left: 0;
  opacity: 0;
  position: absolute;
  top: 0;
  width: 100%;
}
.qt-chat__tag input[type="checkbox"]:hover {
  cursor: pointer;
}
.qt-chat__tag input[type="checkbox"]:checked + label {
  color: ${variables.buttonTextColor};
  background: ${variables.primaryColor};
}
.qt-chat__tag label {
  background: rgba(220, 42, 35, 0.2);
  border-radius: 6.25rem;
  color: ${variables.primaryColor};
  display: inline-block;
  font-weight: 600;
  padding: 0.625rem;
  transition: all 0.2s ease;
}

.qt-chat__result {
  border-radius: 0.375rem;
  border: 1px solid #ccc;
  color: ${variables.textColor};
  margin: 1.25rem auto;
  padding: 1.25rem;
  text-align: center;
  width: 80%;
}
.qt-chat__resultTitle {
  font-weight: 600;
}
.qt-chat__resultDesc {
  font-size: 0.8125em;
  margin: 0.625rem 0;
}
.qt-chat__resultPrice {
  display: block;
  font-size: 1.375em;
  margin-bottom: 0.625rem;
}
.qt-chat__resultAction {
  color: ${variables.primaryColor};
  display: block;
}

`;
