/* 
This module will  hold the function that creates the html list of venue names
and the event listener for when a venue name is clicked on

*/
//import the function the gets the venues array
import { getVenues, getBands, getBookings } from "./database.js";

const venues = getVenues()

//create and export a function that returns the html list of venue names
export const VenuesList = () => {
    let venuesHTML = "<ul>"

    for(const venue of venues) {
        venuesHTML += `<li
                data-type="venue"
                data-id="${venue.id}"
                >${venue.name}</li>`
    }

    venuesHTML += "</ul>"

    return venuesHTML

}



//add an event listener that triggers a window alert when a venue name is clicked
document.addEventListener (
    "click",
    (clickEvent) => {
        const whatClicked = clickEvent.target

        //was a venue name clicked on?
        if(whatClicked.dataset.type === "venue") {

            //get the id of venue clicked on
            const venueIdClicked = whatClicked.dataset.id

            //create an empty array that holds all of the booking objects with a matching venueId
            let matchingBookings = []
            //create an empty array that will hold all of the band names that play at the venue clicked on
            let bandPlaysHere = []

            //get the bands and bookings arrays from the database
            const bookings = getBookings()
            const bands = getBands()

            //find all the bands that have booked that venue
            //iterate through the bookings to find which ones have the matching venueId
            for (const booking of bookings) {
                
                //check if the venueId of each booking object matches the venueIdClicked
                if(booking.venueId === parseInt(venueIdClicked)) {

                    //if it matches, push that booking object to a new array called matchingBookings
                    matchingBookings.push(booking)
                }
            }
                // iterate through the matchingBookings array and the band array to find each band object where the the bandId matches
                for(const matchingBooking of matchingBookings) {

                    for(const band of bands) {

                        if(matchingBooking.bandId === band.id){

                            //push the band name to the empty bandPlaysHere array
                            bandPlaysHere.push(band.name)
                        }
                    }
                }
                window.alert(`${bandPlaysHere.join()}`)
            }
        }


)