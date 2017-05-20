# TELL ME, WHO ARE YOU?

## Summary

“Tell Me, Who ARE You?” is a social, get-to-know you web application built using Node.js, Express.js, Sequelize.js with a MYSQL database, Passport.js (for authentication), Javascript, jQuery, HTML, CSS, and express-handlebars.

Players are required to create an account and login before playing. Users can play in a NSFW (Not Safe for Work) or SFW (Safe for Work) mode. Players are automatically given access to template questions after registering, which they can then modify or delete as they like, or they can create their own cards for game play.

If you have questions, feel free to contact any of the contributors to this project.

## Registering and Signing In

Upon accessing the site, the application will prompt users to create an account. Passport will use the encrypted user information in the database to authenticate the user. With a validated and authenticated username/password combination, questions from a “template deck” will automatically be added to the user’s management page. From here, players can enter a game mode (NSFW vs. SFW) or update their card deck questions.

## Game Mode

Safe for Work (SFW) mode prompts players to answer basic get-to-know-you questions. They are perfect for getting to know someone you just met or someone you don’t know well. 

Not Safe for Work (NSFW) mode asks more personal, embarrassing, and/or difficult questions from the players. You probably wouldn’t want to ask these questions to folks you just met, but they are perfect for friends you want to get to know a little better. 

While there are no formal rules for playing “Tell Me, Who Are You?”, the general aim is to inspire conversation among a group. We encourage players to create their own unique set of rules for playing the game.

## Adding, Updating, or Deleting Cards

After logging in or exiting the game play, users can tailor the questions within their deck to their own interests, humor, or taste level. On the Update page, users can create a card by typing the question in the text field and select whether it is safe for work or not. Users will also see a visual representation of all the cards currently in their deck. Edit and delete buttons are associated with each question to help manage their questions.

Visiting "/cart" or clicking "Shopping Cart" will display the user's shopping cart with the products they added. At this stage, the user can modify quantities again if they choose or remove products all together before proceeding to checkout.

