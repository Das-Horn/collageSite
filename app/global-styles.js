import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  body.fontLoaded {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    background-color: #fafafa;
    min-height: 100%;
    min-width: 100%;
  }

  h1,p,h2,span {
    font-family: Arial;
    color:#fff;
    mix-blend-mode:difference;
  }
  /* Automatic image collaging W3SCHOOLS*/
  .row {
    display: flex;
    flex-wrap: wrap;
    padding: 0 4px;
  }
  
  /* Create four equal columns that sits next to each other */
  .column {
    flex: 25%;
    max-width: 25%;
    padding: 0 4px;
  }
  
  .column img {
    vertical-align: middle;
    width: 100%;
    border-radius: 5px;
  }
  
  /* Responsive layout - makes a two column-layout instead of four columns */
  @media screen and (max-width: 800px) {
    .column {
      flex: 50%;
      max-width: 50%;
    }
  }
  
  /* Responsive layout - makes the two columns stack on top of each other instead of next to each other */
  @media screen and (max-width: 600px) {
    .column {
      flex: 100%;
      max-width: 100%;
    }
  }

  /* scrollbar css */
  /* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #5e5e6e;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #3e3e4e;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #6e6e7e;
}
`;

export default GlobalStyle;
