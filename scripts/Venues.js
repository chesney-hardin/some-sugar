/* 
This module will  hold the function that creates the html list of venue names
and the event listener for when a venue name is clicked on

*/
//import the function the gets the venues array
import { getVenues } from "./database.js";

const venues = getVenues()

//create and export a function that returns the html list of venue names
export const VenuesList = () => {
    let venuesHTML = "<ul>"

    for(const venue of venues) {
        venuesHTML += `<li>${venue.name}</li>`
    }

    venuesHTML += "</ul>"

    return venuesHTML

}



//add an event listener that triggers a window alert when a venue name is clicked