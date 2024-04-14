# Backend for BankID in Flutter and Firebase demo

Compatible Flutter app source code:
[activout/bankid-demo-flutter-firebase](https://github.com/activout/bankid-demo-flutter-firebase)

This project is a Firebase Functions project, which allows you to run backend code in response to events triggered by Firebase features and HTTPS requests.

It depends on the [anyfin/bankid](https://www.npmjs.com/package/bankid) npm package.


## Prerequisites

Before you can deploy your Firebase Functions, you need to have the following:

- A Firebase project setup on the Blaze (paid) plan. Firebase Functions requires the Blaze plan, which is a pay-as-you-go plan. You can learn more about Firebase pricing [here](https://firebase.google.com/pricing).
- Node.js and npm installed on your local development machine. You can download Node.js [here](https://nodejs.org/en/download/) and npm is included in the Node.js installation.
- Firebase CLI installed. You can install it by running `npm install -g firebase-tools` in your terminal.

## Setup

1. Clone this repository to your local machine.
2. Navigate to the functions subdirectory in your terminal.
3. Run `npm install` to install the project dependencies.
4. Log in to Firebase using the Firebase CLI by running `firebase login`.
5. Connect your local project to your Firebase project using `firebase use --add` and select your Firebase project.

## Deployment

To deploy your Firebase Functions, run `firebase deploy --only functions` in your terminal. This will deploy all your Firebase Functions to the Firebase servers.

## TODO

- [ ] Make /collect create a Firebase Auth custom token login session and return a JWT
- [ ] Add protected API that uses Firebase Auth

## Need help implementing BankID?

Contact [david@activout.se](mailto:david@activout.se) to order a support package.

## License

This project is licensed under the [MIT License](LICENSE).