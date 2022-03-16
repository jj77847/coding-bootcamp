# Revision

## Session 1:

### Concepts

- Variable declarations
- Function declarations
- Data types
- if/else
- Arrays
- Objects
- While
- String literals
- PseudoCode
- NodeJS

### Mini Project

Build a CLI-based strong password generator. The user must be prompted the following questions:

> Enter the length of your password:

> Would you like to add lowercase characters? (Y/n)

> Would you like to add uppercase characters? (Y/n)

> Would you like to add numeric characters? (Y/n)

> Would you like to add special characters? (Y/n)

When the user completes the answers, ensure that the user has said **YES** to at least 2 criteria and the length of the password is greater than 8.

- If the above conditions fail, then display the following message:

  `Please ensure you select a minimum of 2 criteria and a password length greater than 8 characters`

  Then present another question to the user prompting:

  > Would you like to retry? (Y/n)

  - If **YES** then cycle back to the first set of questions

  - If **NO** then quit the application

- If the above conditions pass, then generate the random password using the information provided by the user and display the password as follows and quit the application:

  `Your random password is <GENERATED_RANDOM_PASSWORD>`
