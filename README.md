    ___    ______________________  __    ________________
   /   |  / ____/_  __/ ____/ __ \/ /   /  _/ ____/ ____/
  / /| | / /_    / / / __/ / /_/ / /    / // /_  / __/   
 / ___ |/ __/   / / / /___/ _, _/ /____/ // __/ / /___   
/_/  |_/_/     /_/ /_____/_/ |_/_____/___/_/   /_____/   
                                                         

# Afterlife Remix

*For Demo Purposes Only.*

Project Created With : 

- create-react-app
- react-redux
- bootstrapcss
- tailwindcss (animation classes)


The Project uses React-App Rewired for some work arounds. After pulling the repo, getting started is easy :

```
nvm use 16 && yarn && yarn start

```

#Notes

Some observations while working on this project : 
...Redux was the most flexible option at the end of the day when it came to handling the wallet and transaction state since we need 1 single source of truth to determine if the users wallet is unlocked or not, and other variable states during the transaction process. ..

...Had some issues with a few of the Web3 dependencies including @walletconnect which gave many polyfill errors and needed workarounds. It would be great to create a custom boilerplate for these projects that we can pull right out of the box and get started. ..


Thank you for giving me the opportunity to work on this project. 


**Erik**
