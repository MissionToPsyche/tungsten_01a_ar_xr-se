# PROJECT CONCEPT

## UI Basics

- User Scans QR code
    - The browser takes the user to a page - "Home Page"

## Home Page


- The "Home Page" has three actions "Play", "How To Play", and "Settings" buttons.
    - The "Play" action routes the user to another page called "Game Page"
    - The "Help" action routes the user to another page called "Help"
    - The "Settings" action routes the user to another page called "Settings"

## Play Page

- Page begins with a 'mission start' popup
    - Mission start popup shall prompt the user with a 'mission' to help NASA complete the satellite
    - Mission start popup has a 'start button' that clears the 'mission start' popup and begins the game
- Play Page has two main sections "AR Screen" & "Component Selection Box"
    - The "AR Screen" displays the camera output and the spacecraft
    - The "Component Selection Box" contains a horizontal scrollable area that contains different pieces for the spacecraft assembly. Users can drag and drop components to their designated locations.
    - Play Page has two additional buttons - "Go Back To Main Menu" and "Help"
    - Play Page has one toggle button that controls "AR Screen" to 'on' and 'off'
        - AR Screen ON: The user uses their phone camera for the AR screen background
        - AR Screen OFF: The user is given a space backdrop for the AR screen background

## Setting Page

- The "Settings" page has two toggle buttons - one for 'music' and another for 'sound'
- The "Settings" page has one "Credits" popup
    - Credits popup provides users with information about the team
- The "Settings" page has one button - "Go back to the main menu"

## Help Page

- Help Page shall have textual descriptions of the game rules and some graphical diagrams that further explain the game rules and the interactions
- Help Page shall have one additional button - "Go Back To Home Page" or "Go Back to Play Page" depending on where the user is prior to opening the help button
    - Go Back To Main Menu redirects the user to the main menu or back to play page

## Final Page

- After the game is complete (the spacecraft is assembled), the game shall display a congratulatory message and redirect the user to a "Final Page"
- The Final Page shall display a complete list of components and provide information about them with textual and graphical diagrams. Consider a storyline-like design for the "Final Page"

# Game Logic

- The user starts the game by hitting a "Play" button on the home page. The app redirects the user to a different page that contains two main sections: "AR Section" and "Component Selection Sections".
- In the "AR Section," the user can see the camera output and see the missing satellite pieces floating across the screen.
- At the bottom of the screen, there shall be a section for the missing components. That section shall be horizontally scrollable and contain all components of the spacecraft (3D Models). The components are greyed out until the user finds the piece on the "AR Section".
- The user uses their phone camera to look around and find the missing pieces. Tapping on the floating piece puts the missing component in the "Component selection box" and ungreys the object.
  - If the user is using the game with AR OFF, the pieces will slowly 'popup' for the user to select the components
- After the game is complete (all the pieces are found), the game shall display a congratulatory message and redirect the user to a "Final Page".
