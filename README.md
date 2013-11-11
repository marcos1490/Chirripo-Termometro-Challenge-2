Chirripo-Termometro-Challenge-2
=================================
Create a NodeJS-based single-page web application that will have two elements: a color picker and a grid (table); the grid should be a 10x10 grid (10 columns and 10 rows). When the user clicks a cell of the grid, the color of that cell will change to the color currently selected in the color picker, once the cell color is changed the page should send a message to the node.js server to notify about the change; then all clients (users) currently connected to/viewing the page should display the cell color change; in other words, the grid colors should be kept in sync with all connected clients in real time.

## Considerations
The client code refers to localhost, this has to be changed for the IP of your server machine in order to work properly.
