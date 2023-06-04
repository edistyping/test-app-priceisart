# Re-creating the Backend using Node.js (Previous was Django for fun. Good stuff that is)

    // "start": "nodemon --exec babel-node index.js",
    //"pulpfiction": "node index.js",

# TO DOs
    Components
        - App
            - Start
            - Game
                - Result
            - Ranking

        * Everytime we toggle between Game and Ranking, we send data 
            Game/Ranking <-- artwork_image, etc --> App <-- artwork_image, etc --> Game/Ranking
            
        
        Ranking to App



# Different ways to show images
Images in frontend
*Images in backend (selected this one)
Use require()function
Images in the public folder
Images from HTTP
Local images
SVG as ReactComponent
Binary data as base64 string

# Resources
fly.io for hosting Web server
render.com for also hosting 

# Commands
1. Below one copies tables in a database to another database. 
=> pg_dump -U postgres -h localhost [dbname] | psql -h [remotehost] -U [remoteuser] [dbname]
    
## Packges Used
Node.js
    An enviornment that allows Javascript code to be run outside the browser. Historically, Javascript was purely for a browser. Node.js can be run on Windows, Linux, Unix, macOS, and more.  
Express
    A web application framework for Node.js. Express allows oyu to build a server applications in Node.js (So they are DIFFERENT!). 
Nodemon
    To allow automatic re-dployment whenever I make any changes to codes and save :D
Babel
    Allow Node.js to use recent/ Javascript Langauge features (EMCAScript) that might/is not in recent Node.js versions. 
dotenv
    Allow use of enviornmental variables
pg
    Connecinting to Postgres
Body-Parser
    A middleware that parses the request stream. 
