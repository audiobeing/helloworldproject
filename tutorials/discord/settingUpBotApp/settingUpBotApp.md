# setting up your first bot application

1. sign in the the [discord website](https://discord.com/) 
<img src="images/1.signin.png" alt="drawing" width="70%" />
<br/>
<br/>

1. go to the `developers` portal at the bottom of the page
<img src="images/2.devPortal.png" alt="drawing" width="70%" />
<br/>
<br/>

1. and then click the `applications` tab
<img src="images/3.chooseApp.png" alt="drawing" width="70%" />
<br/>
<br/>

1. choose new application
<img src="images/4.chooseNewAPp.png" alt="drawing" width="70%" />
<br/>
<br/>

1. give your bot application a name and hit `create`
<img src="images/5.nameBot.png" alt="drawing" width="70%" />
<br/>
<br/>

1. go to the `bot` tab, hit `add bot`, and click `yes,do it!`
<img src="images/6.goToBotTab.png" alt="drawing" width="70%" />
<img src="images/7.addBot.png" alt="drawing" width="70%" />
<img src="images/7a.clickYes.png" alt="drawing" width="70%" />
<br/>
<br/>

1. make sure public bot is turned on so others can see it
<img src="images/8..png" alt="drawing" width="70%" />
<br/>
<br/>
- make sure REQUIRES OAUTH2 CODE GRANT is not checked unless you know you need it - if you don't know - start with it off!!
- notice the copy token - and the warning -- KEEP THIS TOKEN PRIVATE - we will handle this in the upcoming section - let's finish by adding our bot to a server. 
    - copy the token 
        - create a config.json file or .env file to and save the token there - if that is unfamiliar save the token in a new file or you can come back and copy it again

- ADDING THE BOT TO A SERVER
- you will need to be part of a server/guild with "Administrative" or “Manage Server” permissions. If you created the server you have Admin permissions. 
    - creating a servers is simple (link to create server)
- go back to the developers portal and click on your new bot
- click on the tab OAuth2 and then the URL generator
- choose bot and application.commands 
- you will see a list of permissions allowing you to configure your bots permissions - we will come back to this in later tutorials when needed
    - check out: https://discord.com/developers/docs/topics/permissions to see what this permissions allow
- click copy 
- go to a new tab in your browser and past the URL
- you will see window pop up with  a list of the discord servers you have administrative permissions for (if you created the server you got the permissions)
- choose the server you want to add the bot too
- and the bot show up in the server!!


- CREATING A DISCORD SERVER (at least for test purposes)
- click the + at the bottom of the left panel in discord 
- choose create your own
- choose type or skip for now
- give it a name