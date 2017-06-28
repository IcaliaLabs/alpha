import { injectGlobal } from 'styled-components';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  .row::before, .row::after {
  content: '';
  display: table;
}
.row::after {
  clear: both;
}

* {
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  -webkit-tap-highlight-color: transparent;
  box-sizing: border-box;
}

*:before,
*:after {
  box-sizing: inherit;
}

html {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
  overflow-x: hidden;
  overflow-y: scroll;
}

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}

a {
  background-color: transparent;
  color: inherit;
  display: inline-block;
  text-decoration: none;
  -webkit-text-decoration-skip: objects;
}
a:focus, a:hover, a:active {
  outline: 0;
  cursor: pointer;
}

article,
aside,
details,
figcaption,
figure,
footer,
header,
main,
menu,
nav,
section,
summary {
  display: block;
}

html {
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
}

input[type="text"],
input[type="email"],
input[type="number"],
input[type="password"],
input[type="button"],
fieldset {
  appearance: none;
}
input[type="text"]:focus,
input[type="email"]:focus,
input[type="number"]:focus,
input[type="password"]:focus,
input[type="button"]:focus,
fieldset:focus {
  outline: 0;
}

input[type="radio"],
input[type="checkbox"] {
  margin: 0;
  outline: 0;
  padding: 0;
}

input::-ms-clear {
  display: none;
}

input[type="number"],
[type="search"] {
  -moz-appearance: textfield;
}

[type="number"]::-webkit-inner-spin-button,
[type="number"]::-webkit-outer-spin-button {
  height: auto;
}

select:-moz-focusring {
  color: transparent;
  text-shadow: 0 0 0 #000;
}

button,
input[type="submit"] {
  outline: 0;
  background: 0;
}
button:hover, button:active, button:focus,
input[type="submit"]:hover,
input[type="submit"]:active,
input[type="submit"]:focus {
  cursor: pointer;
}

textarea {
  border: 1px solid;
  resize: none;
  outline: 0;
  overflow: auto;
}

ul {
  list-style: none;
}

blockquote, q {
  quotes: none;
}

blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}

audio,
canvas,
progress,
video {
  display: inline-block;
}

img,
embed,
object,
audio,
video {
  height: auto;
  max-width: 100%;
}

iframe {
  border: 0;
}

svg:not(:root) {
  overflow: hidden;
}

.row {
  display: block;
}
.row .col-1 {
  width: 8.33333%;
}
.row .col-2 {
  width: 16.66667%;
}
.row .col-3 {
  width: 25%;
}
.row .col-4 {
  width: 33.33333%;
}
.row .col-5 {
  width: 41.66667%;
}
.row .col-6 {
  width: 50%;
}
.row .col-7 {
  width: 58.33333%;
}
.row .col-8 {
  width: 66.66667%;
}
.row .col-9 {
  width: 75%;
}
.row .col-10 {
  width: 83.33333%;
}
.row .col-11 {
  width: 91.66667%;
}
.row .col-12 {
  width: 100%;
}
.row .offset-1 {
  margin-left: 8.33333%;
}
.row .offset-2 {
  margin-left: 16.66667%;
}
.row .offset-3 {
  margin-left: 25%;
}
.row .offset-4 {
  margin-left: 33.33333%;
}
.row .offset-5 {
  margin-left: 41.66667%;
}
.row .offset-6 {
  margin-left: 50%;
}
.row .offset-7 {
  margin-left: 58.33333%;
}
.row .offset-8 {
  margin-left: 66.66667%;
}
.row .offset-9 {
  margin-left: 75%;
}
.row .offset-10 {
  margin-left: 83.33333%;
}
.row .offset-11 {
  margin-left: 91.66667%;
}
.row .offset-12 {
  margin-left: 100%;
}
.row [class*="col-"] {
  float: left;
}
.row [class*="col-"].full-height {
  height: 100%;
}

@media screen and (max-width: 768px) {
  .row:not(.fixed) [class*="col-"] {
    width: 100%;
  }
  .row:not(.fixed) [class*="offset-"] {
    margin-left: 0;
  }
}
.row-flex {
  display: flex;
}
.row-flex .col-1 {
  width: 8.33333%;
}
.row-flex .col-2 {
  width: 16.66667%;
}
.row-flex .col-3 {
  width: 25%;
}
.row-flex .col-4 {
  width: 33.33333%;
}
.row-flex .col-5 {
  width: 41.66667%;
}
.row-flex .col-6 {
  width: 50%;
}
.row-flex .col-7 {
  width: 58.33333%;
}
.row-flex .col-8 {
  width: 66.66667%;
}
.row-flex .col-9 {
  width: 75%;
}
.row-flex .col-10 {
  width: 83.33333%;
}
.row-flex .col-11 {
  width: 91.66667%;
}
.row-flex .col-12 {
  width: 100%;
}
.row-flex .offset-1 {
  margin-left: 8.33333%;
}
.row-flex .offset-2 {
  margin-left: 16.66667%;
}
.row-flex .offset-3 {
  margin-left: 25%;
}
.row-flex .offset-4 {
  margin-left: 33.33333%;
}
.row-flex .offset-5 {
  margin-left: 41.66667%;
}
.row-flex .offset-6 {
  margin-left: 50%;
}
.row-flex .offset-7 {
  margin-left: 58.33333%;
}
.row-flex .offset-8 {
  margin-left: 66.66667%;
}
.row-flex .offset-9 {
  margin-left: 75%;
}
.row-flex .offset-10 {
  margin-left: 83.33333%;
}
.row-flex .offset-11 {
  margin-left: 91.66667%;
}
.row-flex .offset-12 {
  margin-left: 100%;
}
.row-flex [class*="col-"] {
  display: inline-grid;
  flex: none;
  flex-grow: 1;
  flex-shrink: 1;
}
.row-flex [class*="col-"].full-height {
  height: 100%;
}

@media screen and (max-width: 768px) {
  .row-flex:not(.fixed) {
    flex-direction: column;
  }
  .row-flex:not(.fixed) [class*="col-"] {
    flex: 1;
    width: 100%;
  }
  .row-flex:not(.fixed) [class*="offset-"] {
    margin-left: 0;
  }
}
.pull-right {
  float: right;
}

.pull-left {
  float: left;
}

.text-right {
  text-align: right;
}

.text-left {
  text-align: left;
}

.text-justify {
  text-align: justify;
}

.text-center {
  text-align: center;
}

.display-block {
  display: block;
}

.display-flex {
  display: flex;
}

.display-inline {
  display: inline;
}

.display-inline-block {
  display: inline-block;
}

.display-inline-flex {
  display: inline-flex;
}

.display-table {
  display: table;
}

.display-none {
  display: none;
}

.align.vertical, .align.qt-chat__optionCard {
  position: relative;
  top: 50%;
  transform: translateY(-50%);
}
.align.horizontal {
  left: 50%;
  position: relative;
  transform: translateX(-50%);
}
.align.center {
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
}

.align-flex, .qt-chat__header, .qt-chat__dialogue, .qt-chat__bubbles, .qt-chat__optionCard, .qt-chat__footer, .qt-chat__field {
  display: flex;
}
.align-flex.is-column, .is-column.qt-chat__header, .is-column.qt-chat__dialogue, .qt-chat__bubbles, .is-column.qt-chat__optionCard, .is-column.qt-chat__footer, .is-column.qt-chat__field {
  flex-direction: column;
}
.align-flex.is-column.vertical, .is-column.vertical.qt-chat__header, .is-column.vertical.qt-chat__dialogue, .vertical.qt-chat__bubbles, .qt-chat__bubbles.qt-chat__optionCard, .is-column.qt-chat__optionCard, .is-column.vertical.qt-chat__footer, .is-column.vertical.qt-chat__field {
  justify-content: center;
}
.align-flex.is-column.vertical-end, .is-column.vertical-end.qt-chat__header, .is-column.vertical-end.qt-chat__dialogue, .vertical-end.qt-chat__bubbles, .is-column.vertical-end.qt-chat__optionCard, .is-column.vertical-end.qt-chat__footer, .is-column.vertical-end.qt-chat__field {
  justify-content: flex-end;
}
.align-flex.is-column.horizontal, .is-column.horizontal.qt-chat__header, .is-column.horizontal.qt-chat__dialogue, .horizontal.qt-chat__bubbles, .is-column.horizontal.qt-chat__optionCard, .is-column.horizontal.qt-chat__footer, .is-column.horizontal.qt-chat__field {
  align-items: center;
}
.align-flex.is-column.horizontal-end, .is-column.horizontal-end.qt-chat__header, .is-column.horizontal-end.qt-chat__dialogue, .horizontal-end.qt-chat__bubbles, .is-column.horizontal-end.qt-chat__optionCard, .is-column.horizontal-end.qt-chat__footer, .is-column.horizontal-end.qt-chat__field {
  align-items: flex-end;
}
.align-flex.wrap, .wrap.qt-chat__header, .wrap.qt-chat__dialogue, .wrap.qt-chat__bubbles, .wrap.qt-chat__optionCard, .wrap.qt-chat__footer, .wrap.qt-chat__field {
  flex-wrap: wrap;
}
.align-flex.vertical:not(.is-column):not(.qt-chat__bubbles), .vertical.qt-chat__header:not(.is-column):not(.qt-chat__bubbles), .vertical.qt-chat__dialogue:not(.is-column):not(.qt-chat__bubbles), .vertical.qt-chat__bubbles:not(.is-column):not(.qt-chat__bubbles), .qt-chat__optionCard:not(.is-column):not(.qt-chat__bubbles), .vertical.qt-chat__footer:not(.is-column):not(.qt-chat__bubbles), .vertical.qt-chat__field:not(.is-column):not(.qt-chat__bubbles) {
  align-items: center;
}
.align-flex.vertical:not(.is-column):not(.qt-chat__bubbles).end, .vertical.qt-chat__header:not(.is-column):not(.qt-chat__bubbles).end, .vertical.qt-chat__dialogue:not(.is-column):not(.qt-chat__bubbles).end, .vertical.qt-chat__bubbles:not(.is-column):not(.qt-chat__bubbles).end, .qt-chat__optionCard:not(.is-column):not(.qt-chat__bubbles).end, .vertical.qt-chat__footer:not(.is-column):not(.qt-chat__bubbles).end, .vertical.qt-chat__field:not(.is-column):not(.qt-chat__bubbles).end {
  justify-content: flex-end;
}
.align-flex.horizontal:not(.is-column):not(.qt-chat__bubbles), .horizontal.qt-chat__header:not(.is-column):not(.qt-chat__bubbles), .horizontal.qt-chat__dialogue:not(.is-column):not(.qt-chat__bubbles), .horizontal.qt-chat__bubbles:not(.is-column):not(.qt-chat__bubbles), .horizontal.qt-chat__optionCard:not(.is-column):not(.qt-chat__bubbles), .horizontal.qt-chat__footer:not(.is-column):not(.qt-chat__bubbles), .horizontal.qt-chat__field:not(.is-column):not(.qt-chat__bubbles) {
  justify-content: center;
}
.align-flex.horizontal:not(.is-column):not(.qt-chat__bubbles).end, .horizontal.qt-chat__header:not(.is-column):not(.qt-chat__bubbles).end, .horizontal.qt-chat__dialogue:not(.is-column):not(.qt-chat__bubbles).end, .horizontal.qt-chat__bubbles:not(.is-column):not(.qt-chat__bubbles).end, .horizontal.qt-chat__optionCard:not(.is-column):not(.qt-chat__bubbles).end, .horizontal.qt-chat__footer:not(.is-column):not(.qt-chat__bubbles).end, .horizontal.qt-chat__field:not(.is-column):not(.qt-chat__bubbles).end {
  align-items: flex-end;
}
.align-flex.center, .center.qt-chat__header, .center.qt-chat__dialogue, .center.qt-chat__bubbles, .center.qt-chat__optionCard, .center.qt-chat__footer, .center.qt-chat__field {
  align-items: center;
  justify-content: center;
}
.align-flex.between, .qt-chat__header, .between.qt-chat__dialogue, .between.qt-chat__bubbles, .qt-chat__optionCard, .qt-chat__footer, .qt-chat__field {
  justify-content: space-between;
}

.is-disabled {
  pointer-events: none;
}

.is-unselectable {
  user-select: none;
}

.is-hidden.is-hidden {
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
}

.testmode * {
  background: rgba(255, 0, 0, 0.1) !important;
}

.bordermode * {
  border: 1px solid red !important;
}

@media screen and (max-width: 768px) {
  .hide-on-s {
    display: none !important;
  }
}

@media screen and (max-width: 1024px) {
  .hide-on-m {
    display: none !important;
  }
}

@media screen and (max-width: 1140px) {
  .hide-on-l {
    display: none !important;
  }
}

@media screen and (max-width: 4096px) {
  .hide-on-w {
    display: none !important;
  }
}

@media screen and (min-width: 768px) and (max-width: 1024px) {
  .hide-on-s-only {
    display: none !important;
  }
}

@media screen and (min-width: 768px) and (max-width: 1140px) {
  .hide-on-m-only {
    display: none !important;
  }
}

@media screen and (min-width: 1024px) and (max-width: 4096px) {
  .hide-on-l-only {
    display: none !important;
  }
}

@media screen and (min-width: 1140px) and (max-width: 4096px) {
  .hide-on-w-only {
    display: none !important;
  }
}

.show-on-s {
  visibility: hidden;
}
@media screen and (min-width: 768px) and (max-width: 1024px) {
  .show-on-s {
    visibility: visible;
  }
}

.show-on-m {
  visibility: hidden;
}
@media screen and (min-width: 768px) and (max-width: 1140px) {
  .show-on-m {
    visibility: visible;
  }
}

.show-on-l {
  visibility: hidden;
}
@media screen and (min-width: 1024px) and (max-width: 4096px) {
  .show-on-l {
    visibility: visible;
  }
}

.show-on-w {
  visibility: hidden;
}
@media screen and (min-width: 1140px) and (max-width: 4096px) {
  .show-on-w {
    visibility: visible;
  }
}

body {
  font-family: sans-serif;
  font-size: 14px;
  position: relative;
  background: url("http://s3.amazonaws.com/icalialabs/assets/img/bg.png") no-repeat center center;
  background-size: cover;
  height: 100vh;
}

.qt-frame {
  position: relative;
}

.qt-chat__trigger {
  background: #dc2a23;
  border-radius: 6.25rem;
  bottom: 0.625rem;
  color: #fff;
  font-weight: 600;
  padding: 1rem 1.625rem;
  position: fixed;
  right: 0.625rem;
  transition: all 0.2s ease;
}
.qt-chat__trigger:hover {
  background: #e03f39;
}
.qt-chat__trigger:active {
  transform: translateY(3px);
}

.qt-chat__notification {
  background: rgba(0, 0, 0, 0.1);
  border-radius: 6.25rem;
  color: #fff;
  margin-left: 0.375rem;
  padding: 0.375rem 0.75rem;
}

.qt-frame.is-active .qt-chat__trigger {
  right: 32.5rem;
}

.qt-chat__mask {
  background: rgba(0, 0, 0, 0.8);
  bottom: 0;
  display: block;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
}

.qt-chat {
  background: #fff;
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
.qt-chat.is-large .qt-chat__controlWindow {
  transform: rotate(-180deg);
}
.qt-chat.is-active {
  transform: translateX(0%);
}

.qt-chat__header {
  border-bottom: 1px solid rgba(226, 226, 226, 0.5);
  padding: 1.25rem;
  width: 100%;
}

.qt-chat__close,
.qt-chat__controlWindow {
  transition: all 0.2s ease;
  visibility: hidden;
}
.qt-chat__close svg g path,
.qt-chat__controlWindow svg g path {
  fill: #dc2a23;
}

.qt-chat__nameBot {
  color: #5d6975;
  display: inline-block;
  font-weight: 600;
  vertical-align: middle;
}
.qt-chat__nameBot:after {
  border-radius: 50%;
  content: '';
  display: inline-block;
  margin-left: 0.375rem;
  padding: 0.375rem;
  vertical-align: middle;
  background: #e5e5e5;
  transition: background-color 0.5s ease;
}
.qt-chat__nameBot.is-online:after {
  background: #7ed321 !important;
}

.qt-chat__conversation {
  height: 37.5rem;
  overflow-y: scroll;
  padding: 1.25rem;
  flex-grow: 2;
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
  color: #dc2a23;
}
.qt-chat__bubble em {
  font-style: italic;
}
.qt-chat__bubble + .qt-chat__bubble {
  margin-top: 0.625rem;
}
.qt-chat__bubble.is-link div:after {
  background: #dc2a23 url(linkIcon2.svg) no-repeat center center;
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
  color: black;
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
  background: url(botAvatar.png) no-repeat center center #dc2a23;
  background-size: 50%;
}
.qt-chat__dialogue.from-bot .qt-chat__bubble div {
  background: rgba(220, 42, 35, 0.1);
}
.qt-chat__dialogue.from-bot p {
  color: #2c0807;
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
  background: #dc2a23;
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
  background: rgba(82, 154, 255, 0.3);
  border-radius: 50px 50px 0 50px;
  color: #003785;
  margin: 0.375rem;
  transition: all 0.2s ease;
}
.qt-chat__reply:hover {
  background: #529aff;
  color: #fff;
}

.qt-chat__dialogue.from-user .qt-avatar {
  background: #529aff;
}
.qt-chat__dialogue.from-user .qt-chat__bubbles {
  text-align: right;
}
.qt-chat__dialogue.from-user .qt-chat__bubble div {
  background: rgba(82, 154, 255, 0.1);
}
.qt-chat__dialogue.from-user p {
  color: #003785;
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

.qt-chat__userOptions {
  background: #fff;
  border-top: 1px solid rgba(93, 105, 117, 0.1);
  padding: 1.25rem;
  width: 100%;
  position: relative;
}
@media (max-width: 640px) {
  .qt-chat__userOptions {
    padding: 0.625rem;
  }
}

.qt-chat__label {
  color: #5d6975;
  font-weight: 500;
  margin-bottom: 0.625rem;
  z-index: 10;
  position: relative;
}

.qt-chat__optionCard {
  border-radius: 0.375rem;
  border: 1px solid rgba(93, 105, 117, 0.15);
  padding: 1.25rem;
  transition: all 0.1s ease-in;
}
.qt-chat__optionCard p {
  color: #5d6975;
  padding: 0.625rem;
}
.qt-chat__optionCard:hover {
  border-color: transparent;
  box-shadow: inset 0 0 0 0.375rem rgba(220, 42, 35, 0.2);
}
.qt-chat__optionCardTitle {
  color: #dc2a23;
  font-weight: 600;
  padding: 0 1.25rem;
}
.qt-chat__optionCard + .qt-chat__optionCard {
  margin-top: 0.625rem;
}
.qt-chat__optionCardLink {
  color: #dc2a23;
  display: block;
  white-space: nowrap;
}

.qt-chat__help {
  background: rgba(134, 156, 178, 0.1);
  border-radius: 6.25rem;
  color: #869cb2;
  padding: 0.625rem 1.25rem;
}

.qt-avatar.is-user {
  align-items: center;
  background: #529aff;
  color: #fff;
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
  background: #fafafa;
  border-radius: 0.125rem;
  border: 1px solid #e5e5e5;
  color: #5d6975;
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
  background: #e5e5e5;
}

.qt-chat__submit {
  border: 0;
  color: #9c9c9c;
  font-size: 0.875em;
  font-weight: 500;
  outline: 0;
  padding: 1rem;
  -webkit-transition: all 0.5s ease;
  transition: all 0.5s ease;
  border-radius: 0.25rem;
  cursor: default;
}
@media (max-width: 640px) {
  .qt-chat__submit {
    display: none;
  }
}
.qt-chat__submit.submitEnabled {
  background: #dc2a23;
  color: #fff;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);
}

.qt-chat__submitSmall {
  -webkit-transition: all 0.5s ease;
  transition: all 0.5s ease;
  border: 0;
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  position: absolute;
  right: 0.625rem;
  background: url(sendWhite.svg) no-repeat center center #dc2a23;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);
}
@media (min-width: 641px) {
  .qt-chat__submitSmall {
    display: none;
  }
}
.qt-chat__submitSmall[disabled] {
  cursor: default;
  background-color: #bfbfbf;
}
.qt-chat__submitSmall.for-tags {
  top: 0;
  transform: translateY(-50%);
  z-index: 10;
}

.qt-chat__refresh {
  border: 0;
  background-color: #529aff;
  border-radius: 0.25rem;
  color: #fff;
  font-size: 0.875em;
  font-weight: 500;
  outline: 0;
  padding: 1rem;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);
}
@media (max-width: 640px) {
  .qt-chat__refresh {
    display: none;
  }
}

.qt-chat__refreshSmall {
  border: 0;
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  position: absolute;
  right: 0.625rem;
  background: url(refreshWhite.svg) no-repeat center center #529aff;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);
}
@media (min-width: 641px) {
  .qt-chat__refreshSmall {
    display: none;
  }
}
.qt-chat__refreshSmall[disabled] {
  background-color: #bfbfbf;
}
.qt-chat__refreshSmall.for-tags {
  top: 0;
  transform: translateY(-50%);
  z-index: 10;
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
.qt-chat__tags .qt-chat__submit {
  position: absolute;
  right: 0.625rem;
  bottom: 0;
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
  color: #fff;
  background: #dc2a23;
}
.qt-chat__tag label {
  background: rgba(220, 42, 35, 0.2);
  border-radius: 6.25rem;
  color: #dc2a23;
  display: inline-block;
  font-weight: 600;
  padding: 0.625rem;
  transition: all 0.2s ease;
}

.qt-chat__result {
  border-radius: 0.375rem;
  border: 1px solid #ccc;
  color: #5d6975;
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
  color: #dc2a23;
  display: block;
}

`;
