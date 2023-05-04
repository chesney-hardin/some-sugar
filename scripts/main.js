/*
This is where all the magic happens (aka the functions get invoked)
*/

//import functions from Venues.js, Bands.js, Bookings.js
import { BandsList } from "./Bands.js"
import { VenuesList } from "./Venues.js"
import { BookingsList } from "./Bookings.js"

//Select a tag/container from index.html to put all the dynamically generated html 
const htmlContainer = document.querySelector("#main-container")

//Create a variable that saves all the html as a string (with all the functions invoked)
const htmlString = `
    <section class="bookings">
        <h2>List of Boookings</h2>
        ${BookingsList()}
    </section>
    <div class="venues-bands">
        <section class="venues">
            <h2>List of Venues</h2>
            ${VenuesList()}
        </section>
        <section class="bands">
            <h2>List of Bands</h2>
            ${BandsList()}
        </section>
    </div>
`
//use innerhtml to update the selected html container with the string saved in the variable above
htmlContainer.innerHTML = htmlString