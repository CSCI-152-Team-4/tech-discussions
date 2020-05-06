# Tech-Discussions

### Running Environment:
1. MERN
    1. MongoDB
    2. Express
    3. ReactJS
    4. NodeJS

#### Note:
**Public** folder contains the root html and setup information for the service worker. **src** folder contains the application. All screens, navigation, logic, data, testing, styling and everything else is located in this subdirectory.

## How to Run:
Have everything downloaded listed above as MERN or they can be found in Specifications in the wiki under MERN STACK. Other tools used are included there as well. Once these tools have been downloadeded, you are then able to clone this repository (tech-discussions) and the td-backend respository. Open both directories (tech-discussions and td-backend) in any code editor of your choice, preferrably Visual Studio Code. 

Once you have both of these directories open, launch the terminal (Ctrl + `) or have both terminals open (Ctrl + Shift + 5) and run the command  "yarn" in each respective directory. This will download all the neccessary dependencies to launch this project locally on your home web browser. Note: These files are also publicly behind hosted on netlify. The terminals will notify you when these dependecies are downloaded. The dependencies are also listed in the package.json sub-directory which is located directly on tech-discussions. Once all the dependencies are downloaded, run the command "yarn start" in td-backend to launch a localhost server. Run the same command in the terminal in tech-discussions to run the browser. Once this has been completed you will be able to see the tech-discussions websites. To stop local host and web app (Ctrl + C) in both terminals and enter "Y" command to stop program. 

Any changes made to the code, when saved (Ctrl + S) will be updated real-time on your browser. In the td-backend terminal nodemon will track database changes real time whenever you login, signup or add new schemas/values.
