/*
This is where all the magic happens (aka the functions get invoked)
*/

//import functions from Venues.js, Bands.js, Bookings.js
import { BandsList } from "./Bands.js"
import { VenuesList } from "./Venues.js"

//Select a tag/container from index.html to put all the dynamically generated html 
const htmlContainer = document.querySelector(".main-container")

//Create a variable that saves all the html as a string (with all the functions invoked)
const htmlString = `
    <section>
        <h2>List of Venues</h2>
        ${VenuesList()}
    </section>
    <section>
        <h2>List of Bands</h2>
        ${BandsList()}
    </section>
`
//use innerhtml to update the selected html container with the string saved in the variable above
htmlContainer.innerhtml = htmlString