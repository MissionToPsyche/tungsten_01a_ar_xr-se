# PROJECT CONCEPT OPTION 2

> # UI Basics
>> User Scans QR code
>> --
>> The browser takes the user to a page - "Home Page"
>> --
>>> Home Page has two actions "Play" & "How To Play" buttons.
>>>> - "Play" action routes the user to a another page called "Game Page
>>>> - "How To Play" action routes the user to another page called "How To Play Page"
>>>>
>> Play Page
>> --
>>> Play Page has two main sections "AR Screen" & "Component Selection Box"
>>>> - The "AR Screen" displays the camera output and the spacecraft
>>>> - The "Component Selection Box" conains a horizontal/vertical scrollable area that contains different pieces for the spacecraft assembly. User will be able to drag and drop components to their designated locations.
>>>>
>> How To Play Page
>> --
>>> How To Play Page shall have textual description of the game rules and some graphical diagrams that further explain the game rules and the interactions
>>> How To Play Page shall have two additiona buttons - "Go Back To Main Menu" & "Start Playing"
>>>> - Go Back To Main Menu redirects the user to the main menu
>>>> - Start Playing redirects the user to the Play Page.
>>>>
>> Final Page
>> --
>>> After the game is complete (the space craft is assembled), the game shall display a congradulatory and redirect the user to a "Final Page". The Final Page shall display a complete list of components and provide information about them with textual and graphical diagrams. We could come up with a storyline-ish type design for the "Final Page"

<br>

> # Game Logic
>> The user starts the game by hitting a "Play" button on the home page. The app redirects the user to a different page that contains two main sections. "AR Section" and "Component Selection Sections". In the "AR Section" the user is able to see the camera output and interact with the 3D model of the spacecraft. On the bottom of the screen, there shall be a section for component selection. That section shall be horizontally scrollable and contain all components of the spacecraft (3d Models). The user can place each component to their designated areas by touching and holding on the component and dragging it to its designated area. Once the user touches and holds the component, a highlighted area should appear on the screen guiding the user where to put the component. The highlight could be something like a circular ripple effect. Once the user drags the component to its designated area, the component shall snap and orient itself. 
>>
>> If there are component dependencies, such as a component needs to be placed on top of another component, then the depended component shall be grayed-out and unavailable for selection until the parent component is placed. 
>>
>> Next to each component, there shall be an "i" icon that will display a pop-up once clicked. The pop-up will display information to the user about the piece they selected (its functionality and purpose).
>>
>> After the game is complete (the space craft is assembled), the game shall display a congradulatory and redirect the user to a "Final Page"
>>
>> The Final Page shall display a complete list of components and provide information about them with textual and graphical diagrams. We could come up with a storyline-ish type design for the "Final Page"
