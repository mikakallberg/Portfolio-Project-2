# the Medico Quiz
Medico Quiz an interactive question game where the user can test their knowledge on human anatomy and physiology. 
The difficulty level is such that both beginners and professionals hopefully can enjoy it.
The target audience is international and for all ages.
The goal of the layout is to add a calm atmosphere for the user.
![Landing page for quiz](assets/images/amiresponsive-quiz.png) 

![Welcome page](assets/images/amiresponsive-index-medium.png)

### Features
An overview of the existing features and possible improvements
### Existing features

__The Welcome page__

- Heading

![heading](assets/images/heading.png)

Featured at the top of the page is the heading text, the design is meant to be fun, but clean and easy to understand and see.

- Description and Rules

![welcome text and rules](assets/images/rules.png)

As this is a game to do while relaxing, the rules are few and direct, to give the user quick but relevant information of what to expect when they press start quiz.

- Start Quiz area

![start button](assets/images/start-btn.png)

The start quiz button is is the focus of the page, it's styled to stand out from the background. 
When hovering over the area the item raises up slighty, with shadow and an increase in of size. The cursor changes from an arrow to a hand. All to signal to the user that there is something clickable here.
The size of the start quiz area changes size depending of which screen size this quiz is viewed.

-__The Quiz page__
- question area

![question area](assets/images/question-area.png)

When the user comes to the Quiz page, the over all design is the same, to continue the same feel of the Welcome page.The heading is the same.
The design is still clean, it's easy to find information and get going intuitivly.
The first question is dispalyed emediately and the has started. 
Since this game is to relax and not stress, but get a little bit of a challenge, there is no timer, the user can take all the time they want.
The questions are a bit challenging, in testing people who do not have a medical background have scored 5 out of 10. 
The question area changes size depending on the size of the screen.
The questions are rendered from JavaScript together with the options. 
The question area is also the target JavaScript uses to display the users score after the last question is answered.
The users total score is displayed together with three different message options, depending on the scoretotal. This is also rendered through JavaScript.
At the end of each sentence is the offer to play again, this transport the user back to the Welcome page, so they can initate to start the quiz again.


![scoremessage <4](assets/images/score-message-1.png)

![scoremessage >=5 && <=7](assets/images/score-message-2.png)

![scoremessage 7<](assets/images/score-message%20-3.png)

- options area

![options for quiz](assets/images/option-area.png)

There are four options for each question and they are displayed in their own box. These boxes change apperance and position with screen size, but do not overlap.
When hovered over the boxes are raised slightly, with a shadow, and increase in size and the cursor changes from an arrow to a hand. To indicate to the user that they can push something and what they are pushing. The option areas indiviual elements are rendered by JavaScript. Which is why the HTML only contains the outer Div to act as a target for JavaScript.

- score area



### Features left to implement

### Possible improvments

### Validator testing

### Bugs while working
- Thought about putting HTML files in a folder, but while this looks good organizing the files, it doesn't work when site is launched. So back the files out and removed html folder.

### Unfixed bugs

### credits
- color palette was picked from this source: https://colorswall.com/palette/6138 

### content (sources for questions)

### media

