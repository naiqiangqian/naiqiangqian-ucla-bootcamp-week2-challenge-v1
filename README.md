# Password Generator Starter Code
# the following is the acceptance area
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page

# we can break it down to
Step 1 - when clicking the generate the password, getting a prompt on which criteria to choose among length of the password and character type of the password
Step 2 - if customers choose "the length of the password", then prompt the length option
         if customers choose the "charater type of the password, then prompt whetheror not to include lowercase, uppercase, numeric, and/or special characters
         customers choose both
Step 3 - run the following validation:
         the length of the password should be an integer number
         at least one character type should be selected
Step 4 - a password is randomly generated the match the criteria.
Step 5 - display the password in an alert or written to the page


