# Passport strategy with NodeJS

A simple login system using Local and GitHub passport strategy

## Installation

1. Clone the project and do `npm install` to install Dependencies
2. Create a `.env` file inside `models` folder \
Save your GitHub id and GitHub secret by this template
    ```
    GITHUB_CLIENT_ID="Your ID"
    GITHUB_CLIENT_SECRET="Your Secret"
    ``` 
3. `npm i --save-dev nodemon` then go to `package.json` to set
    ```
    "scripts": {
        "nodemon": "nodemon app.js"
    },
    ```
4. Run the project by `npm run nodemon`

## Usage

Look at the simple database at `./models/userModel.js` \
If trying login as user or by GitHub, nothing special \
If logging in as admin, you will see every current sessions living on the server. Click `Revoke` to logout a specific user