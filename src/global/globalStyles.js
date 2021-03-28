import {CreateGlobalStyle} from 'styled-components'

const GlobalStyles = createGlobalStyle ` 
*,
 *::before,
 *::after {
   box-sizing: border-box;
 }
 
 html {
   font-family: sans-serif;
   line-height: 1.15;
   -webkit-text-size-adjust: 100%;
   -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
 }
 /*! minireset.css v0.0.6 | MIT License | github.com/jgthms/minireset.css */
 html,
 body,
 p,
 ol,
 ul,
 li,
 dl,
 dt,
 dd,
 blockquote,
 figure,
 fieldset,
 legend,
 textarea,
 pre,
 iframe,
 hr,
 h1,
 h2,
 h3,
 h4,
 h5,
 h6 {
   margin: 0;
   padding: 0;
 }
 h1,
 h2,
 h3,
 h4,
 h5,
 h6 {
   font-size: 100%;
   font-weight: normal;
 }
 ul,ol,li {
   list-style: none;
 }
 button,
 input,
 select,
 textarea {
   margin: 0;
 }
 html {
   box-sizing: border-box;
 }
  
  img{
    vertical-align: middle;
  }
 video, img {
   height: auto;
   max-width: 100%;
 }
 iframe {
   border: 0;
 }
 table {
   border-collapse: collapse;
   border-spacing: 0;
 }
 td,
 th {
   padding: 0;
 }
`

export default GlobalStyles
 
  
 
  