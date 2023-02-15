# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

  - [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
  - [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
  - [Author](#author)
  - [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Screenshot

![Here is a screenshot of my solution!](.//images/projectscreenshot.png)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- [Live Site URL](https://voluble-sprinkles-b12b23.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- BEM
- Sass
- Prettier formatter
- Vanilla JS

### What I learned

CSS
- I was super excited to add rotation on the little star icon as well as to make the results image float up and down. 

```
.starImg {
  animation: spin 3s infinite linear;
}

.results__img {
  animation: float 3s ease-in-out infinite;
}

@keyframes spin {
  from {
    transform: rotate(deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@keyframes float {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0);
  }
}
```

Javascript
- Iwas having a hard time making the hover states behave like I wanted to but here is my solution below 
```
cardItem.addEventListener("mouseenter", () => {
    if (!cardItem.classList.contains("clicked")) {
      cardItem.style.backgroundColor = "hsl(25, 97%, 53%)";
    }
  });
  cardItem.addEventListener("mouseleave", () => {
    if (!cardItem.classList.contains("clicked")) {
      cardItem.style.backgroundColor = "#363c44";
    }
  });
});
```

### Continued development

This was my first Javascript project, and I learned a lot! I can't wait to build my next project and hone my js skills.

## Author

- Frontend Mentor - [@garcialexco](https://www.frontendmentor.io/profile/garcialexco)