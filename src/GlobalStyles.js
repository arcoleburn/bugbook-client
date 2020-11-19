import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Nanum+Myeongjo:wght@400;700;800&family=Nanum+Pen+Script&display=swap');


:root{

/* font sizes     */
--fontSuperBig: 2.5rem;
--fontBig: 1.5rem;
--fontMed: 1.2rem;
--fontSmall: 1rem;

--fontSerif:'Nanum Myeongjo' ;
--fontHandwritten: 'Nanum Pen Script', cursive;


/* colors from coolors pallete */
--chocolateBrown: #1F1300;
--coffeeBrown: #8a7968;
--ivoryPaper: #FFFFf0;
--seaBlue: #2CA6a4;
--darkPurple: #381d2a;
--white: #fff;
--blueInk: #000022;

}

*{
    box-sizing: border-box;
}



`;
