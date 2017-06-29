export const boilerplateCSS = `
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

.align-flex, .qt-chat__dialogue, .qt-chat__bubbles, .qt-chat__optionCard, .qt-chat__footer, .qt-chat__field {
  display: flex;
}
.align-flex.is-column, .is-column.qt-chat__dialogue, .qt-chat__bubbles, .is-column.qt-chat__optionCard, .is-column.qt-chat__footer, .is-column.qt-chat__field {
  flex-direction: column;
}
.align-flex.is-column.vertical, .is-column.vertical.qt-chat__dialogue, .vertical.qt-chat__bubbles, .qt-chat__bubbles.qt-chat__optionCard, .is-column.qt-chat__optionCard, .is-column.vertical.qt-chat__footer, .is-column.vertical.qt-chat__field {
  justify-content: center;
}
.align-flex.is-column.vertical-end, .is-column.vertical-end.qt-chat__dialogue, .vertical-end.qt-chat__bubbles, .is-column.vertical-end.qt-chat__optionCard, .is-column.vertical-end.qt-chat__footer, .is-column.vertical-end.qt-chat__field {
  justify-content: flex-end;
}
.align-flex.is-column.horizontal, .is-column.horizontal.qt-chat__dialogue, .horizontal.qt-chat__bubbles, .is-column.horizontal.qt-chat__optionCard, .is-column.horizontal.qt-chat__footer, .is-column.horizontal.qt-chat__field {
  align-items: center;
}
.align-flex.is-column.horizontal-end, .is-column.horizontal-end.qt-chat__dialogue, .horizontal-end.qt-chat__bubbles, .is-column.horizontal-end.qt-chat__optionCard, .is-column.horizontal-end.qt-chat__footer, .is-column.horizontal-end.qt-chat__field {
  align-items: flex-end;
}
.align-flex.wrap, .wrap.qt-chat__dialogue, .wrap.qt-chat__bubbles, .wrap.qt-chat__optionCard, .wrap.qt-chat__footer, .wrap.qt-chat__field {
  flex-wrap: wrap;
}
.align-flex.vertical:not(.is-column):not(.qt-chat__bubbles):not(.is-column):not(.qt-chat__bubbles), .vertical.qt-chat__dialogue:not(.is-column):not(.qt-chat__bubbles), .vertical.qt-chat__bubbles:not(.is-column):not(.qt-chat__bubbles), .qt-chat__optionCard:not(.is-column):not(.qt-chat__bubbles), .vertical.qt-chat__footer:not(.is-column):not(.qt-chat__bubbles), .vertical.qt-chat__field:not(.is-column):not(.qt-chat__bubbles) {
  align-items: center;
}
.align-flex.vertical:not(.is-column):not(.qt-chat__bubbles).end:not(.is-column):not(.qt-chat__bubbles).end, .vertical.qt-chat__dialogue:not(.is-column):not(.qt-chat__bubbles).end, .vertical.qt-chat__bubbles:not(.is-column):not(.qt-chat__bubbles).end, .qt-chat__optionCard:not(.is-column):not(.qt-chat__bubbles).end, .vertical.qt-chat__footer:not(.is-column):not(.qt-chat__bubbles).end, .vertical.qt-chat__field:not(.is-column):not(.qt-chat__bubbles).end {
  justify-content: flex-end;
}
.align-flex.horizontal:not(.is-column):not(.qt-chat__bubbles):not(.is-column):not(.qt-chat__bubbles), .horizontal.qt-chat__dialogue:not(.is-column):not(.qt-chat__bubbles), .horizontal.qt-chat__bubbles:not(.is-column):not(.qt-chat__bubbles), .horizontal.qt-chat__optionCard:not(.is-column):not(.qt-chat__bubbles), .horizontal.qt-chat__footer:not(.is-column):not(.qt-chat__bubbles), .horizontal.qt-chat__field:not(.is-column):not(.qt-chat__bubbles) {
  justify-content: center;
}
.align-flex.horizontal:not(.is-column):not(.qt-chat__bubbles).end:not(.is-column):not(.qt-chat__bubbles).end, .horizontal.qt-chat__dialogue:not(.is-column):not(.qt-chat__bubbles).end, .horizontal.qt-chat__bubbles:not(.is-column):not(.qt-chat__bubbles).end, .horizontal.qt-chat__optionCard:not(.is-column):not(.qt-chat__bubbles).end, .horizontal.qt-chat__footer:not(.is-column):not(.qt-chat__bubbles).end, .horizontal.qt-chat__field:not(.is-column):not(.qt-chat__bubbles).end {
  align-items: flex-end;
}
.align-flex.center, .center.qt-chat__dialogue, .center.qt-chat__bubbles, .center.qt-chat__optionCard, .center.qt-chat__footer, .center.qt-chat__field {
  align-items: center;
  justify-content: center;
}
.align-flex.between, .between.qt-chat__dialogue, .between.qt-chat__bubbles, .qt-chat__optionCard, .qt-chat__footer, .qt-chat__field {
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
`;
