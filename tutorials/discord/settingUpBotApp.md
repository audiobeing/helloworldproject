# setting up your first bot application
- sign in the the discord website 
- go to the developers portal and then click the applications tab
- give name and hit create
- go to the bot tab and hit add bot
- make sure public bot is turned on so others can see it
- make sure REQUIRES OAUTH2 CODE GRANT is not checked unless you know you need it - if you don't know - start with it off!!
- notice the 
    - copy the token 
        - create a config.json file or .env file to and save the token there - if that is unfamiliar save the token in a new file or you can come back and copy it again
- WARNING RE THE TOKEN AS THIS MUST REMAIN PRIVATE

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