import { createGlobalStyle } from 'styled-components'
const GlobalStyle = createGlobalStyle`
 
    // TODO : 다음에 할때는 styles.scss 내용들 여기서 정의하기 
    html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
}
// HTML5 display-role reset for older browsers
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
    display: block;
}
body {
    line-height: 1;
}
ol,
ul {
    list-style: none;
}
blockquote,
q {
    quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
    content: '';
    content: none;
}
table {
    border-collapse: collapse;
    border-spacing: 0;
}

img {
    display: block;
}

html,
body {
    height: 100%;
}

button{
    background: inherit ;
    border:none; 
    box-shadow:none; 
    border-radius:0; 
    padding:0; 
    overflow:visible; 
    cursor:pointer;
    white-space: nowrap;
    text-align: center;
}

html {
    font-size: 62.5%;
}
a {color: #fff; text-decoration: none; outline: none}
a:hover, a:active {text-decoration: none; color:#fff; }

* {
    box-sizing: border-box;
}
    
`

export default GlobalStyle