# Events and Debugging Assessment

Time to assess how well you have learned to use the debugging tools in Chrome Dev Tools, and writing click event listeners. This application is to show kids with illnesses and the memories the would like to make. Celebrities sign up to help kids make memories.

> 🧨 Make sure you answer the vocabulary and understanding questions at the end of this document before notifying your coaches that you are done with the project

## Event Listeners to Create

1. When the kid name is clicked, it should display their wish.
1. When the celebrity name is clicked, it should display their sport.
1. The pairings list should should contain the pairing in the following format.
    ```html
    {child name} will be making memories with {celebrity name}, a {celebrity sport} star, by {child wish}
    ```

Below is an animation showing how the application should look when complete and how the event listeners should work.

<img src="./images/debugging-events-assessment.gif" width="700px">

## Setup

Your instruction team will provide a link for you to create your assessment repository. Once your repo is created, clone it to your machine.

1. Make sure you are in your `workspace` directory.
1. `git clone {github repo SSH string}`.
1. `cd` into the directory it creates.
1. `code .` to open the project code.
1. Use the `serve` command to start the web server.
1. Open the URL provided in Chrome.

Make sure your Developer Tools are open at all times while working on this project. Use the messages provided in the Console to determine what code needs to be fixed or implemented, and use breakpoints in the Sources tab to step through your code as you debug.

## Vocabulary and Understanding

Before you click the "Complete Assessment" button on the Learning Platform, add your answers below each question and make a commit.

1. When a child is clicked on in the browser, which module contains the code that will execute on that event happening? Can you explain the algorithm of that logic?

   > The Kids.js module contains the code that has the event listener in it. The reason we keep the event listener within the Kids.js module is because we are assigning the data attributes of the html within that module, and for clarity it makes sense to call them within the same module. The algorithm is initializing the event listener with an if statement checking if the type is "child", and if its true, a window alert of the click event target's dataset of name and one of their wish.

2. In the **Pairings** module, why must the `findCelebrityMatch()` function be invoked inside the `for..of` loop that iterates the kids array?

   > The findCelebrityMatch function is invoked within the loop because we can then set one of our arguments to be a single kid to check against the id of a celebrity within the mentioned function to check for primary and foreign key matches.

3. In the **CelebrityList** module, can you describe how the name of the sport that the celebrity plays can be displayed in the window alert text?

   > The name of the celebrities sport can be displayed in the window alert by storing the state of that celebrity's sport within the html. we then call that state within oir event listener with the line ofo event.target.dataset.sport

4. Can you describe, in detail, the algorithm that is in the `main` module?

   > We first import our functions from each of the modules handling the html generation for each kid, celebrity and pairing of the two, then intialize a variable to select the container id within our index.html module  (mainContainer) , then create our generic HTML that we will be invoking each import within. we then set the variable (applicationHTML) that contains that html to the innerHTML data attribute of our mainContainer querySelector.
