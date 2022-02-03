# Setting up your project files for working with discord bots/apps
<!-- <p class="view"><a href="https://twitter.com/L_ab_o"><img src="../../../asset_p/twitt.png" width="25"></a></p> -->
1. If you haven't already - make sure to setup your discord bot and add it to your server. We will be using the PRIVATE TOKEN for the bot you made. If you have not done this yet you can find the how to [here](https://audiobeing.github.io/thehelloworldproject/tutorials/discord/settingUpBotApp/settingUpBotApp.html) 
1. In the terminal/console navigate to the directory that want to setup your discord bot application: 

    `mkdir discordbot`
    
    `cd discordbot`
1. Then intitialize you node project: 

    `npm init`

- go through the information - yes, etc

1. creating configuration files. There are two methods commonly used: 
    1. config.json
    1. or .env

    - we will briefly cover both
1. config.json: in the main directory for you bot create a new file `config.json` to hold your PRIVATE TOKEN. 
    
    
     `{"token": your-private-token}`

 - DON'T COMMIT THIS TO GIT - add the file name to your `.gitignore` file
2. .env 


    - if you are using git, you should not commit this config or .env file so ensure that it is ignored via the `.gitignore` file. If not aleady included as part of setting up git you will want to include the `node_modules` folder so you could add it to your `.gitignore` file as well. 
