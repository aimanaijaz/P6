Feedreader

To run this application you can  
- Download the zip file from https://github.com/aimanaijaz/P6  
- Extract it and open the index.html file in a web browser that supports HTML5 and Javascript  
- Alternatively you can also click on this link to test the site http://aimanaijaz.github.io/P6/FeedReader/  

This project uses Jasmine and performs the following tests
  
1)RSS feed  
 - Checks if allFeeds is defined and is not empty.  
 - Checks if allFeeds object has a URL defined and it is not empty.  
 - Checks if allFeeds object has a name defined and it is not .  
 
2) The menu
 - Ensures that the menu is hidden by default.  
 - Ensures that if the menu icon is clicked once the menu appears.  
 - Ensures that if the menu icon is clicked again the menu disappears.  
 
3) Intial entries  
 - Ensures that there is atleast a single .entry within the .feed container.  
 
4) New feed Selection  
 - Ensures that the content actually changes when a new feed is loaded.  
