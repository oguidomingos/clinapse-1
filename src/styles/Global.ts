import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root {

}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html, body { 
    height:100%;
    font-family: 'Overpass', sans-serif;
    overflow-x: hidden;
    overflow-y: auto;
}

body {
    /* ::-webkit-scrollbar {
      width:20px
    }

   

    ::-webkit-scrollbar-thumb {
     background: #802936;
     }

     ::-webkit-scrollbar-thumb:hover {
     background-color: #a3a3a3;
    } */
 } 

button {
    
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    font-weight: 700;
    font-family: 'Overpass', sans-serif;
}

`;

export default GlobalStyle;
