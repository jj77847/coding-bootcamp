Folder Structure

- index.html
- assets
  - images
    - screenshot.png
  - css
    - styles.css
  - js
    - script.js
- README.md

(change your src attr on HTML to get the script.js)

How do you select the criteria?

- prompt (for text inputs)
- confirm (for Yes/No)
- alert (display info messages)

What is the criteria?

- Choose password length? (prompt)
  - User can choose length >= 8 and less than 128 (what type of data is stored here)
    - check if you can convert the text from user to integer
    - validate if in range else display an alert message and break
- Do you want to include lowercase characters? (confirm) What type of data will this store
  - User can select Yes or No (true/false)
    - no validation here
- Do you want to include uppercase characters? (confirm)
  - User can select Yes or No (true/false)
    - no validation here
- Do you want to include numeric characters? (confirm)
  - User can select Yes or No (true/false)
    - no validation here
- Do you want to include special characters? (confirm)
  - User can select Yes or No (true/false)
    - no validation here
- Before proceeding check if all at least one confirm is YES
  - validate if all false then display alert message and break

DO NOT DO THIS:

- DO NOT change HTML layout
- DO NOT change CSS

User Flow

- Click on generate password button
- Presented with criteria
- Fill in the criteria
- Password should appear on the page

Steps

- Declare a function `generatePassword`
- Declare const for lowercase
  abcdefghijklmnopqrstuvwxyz
- Declare const for uppercase
  ABCDEFGHIJKLMNOPQRSTUVWXYZ
- Declare const for numeric
  1234567890
- Declare const for specialCharacters
  " !"#$%&'()\*+,-./:;<=>?@[\]^\_`{|}~"
