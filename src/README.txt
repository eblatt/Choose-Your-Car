In order to run the code, change the directory to src and run npm start in the terminal to open React.

How Interface Relates to Design Principles:
Layout
 Looking at the layout of my website, I wanted to grab the user's attention by including a gif at the top of the website of a sleek car drifting. I found this gif to sell the product well and grab the user's attention. Since I filled the top margin with a gif, I was very intentional about creating white space on the left and right margins of the site, to not overwhelm the user. To make the website responsive and able to adjust to a user's screen, I also included flex box to my site, utilizing the skills I learned from the last project to improve the layout of my website.
Visual
 Wherever there was text, I made sure that the text contrasted the background. For instance, at first, when I included the "Buy Your Car" header  against the gif, it was difficult to see and hard to focus on. To solve this problem, I created a border to surround the header and filled the border with white to contrast the black text. In addition, to make the border contrast the gif, I added a dark shadow around it to make it more visible against the car gif and to create the illusion that it was "floating" over the gif. I also added slight shadows to the buttons to follow this pattern. I would also argue that there is a simplicity to the site.
Typography
 I chose the font type family Sans-Serif, since this typography is proven to have high legibility among users based on statistics. More specifically, I chose Copperplate because I felt like it added a sleekness to the website. To further increase legibility, I added spacing between each letter. 


How data is Passed Down through the Components:
Components are the primary way for defining visuals and interactions that make up what people see. Data is passed down from parent to child by importing components and utilizing props to refer to components. Everything starts in the app class. The app gains reference to the filtered list by importing it and then calling it. Within the filtered list component, the list component is called within the filtered list component. In this way, we see that components have this hierarchical organization that keeps projects structured and logical. The three components that I used were, the FilteredList, List, and App.

How User Interactions can Trigger changes in State of Components:
In this project, we see how user interactions trigger changes in state components through filtering. For instance, if I a user selects the category "enviornmentally-friendly" and then a price range that is $25,000 or less, than the objects listed will be limited by both conditions versus if "enviornmentally-friendly" was just selected. In other words, the list component will be adjusted when it is filtered through the filtered list component, which is dependent on user interaction. 