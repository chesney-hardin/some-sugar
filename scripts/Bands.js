/* 
This module will  hold the function that creates the html list of band names
and the event listener for when a band name is clicked on

*/

//import the function the gets the bands array
import { getBands, getBookings, getVenues } from "./database.js"

const bands = getBands()

//create and export a function that returns the html list of band names
export const BandsList = () => {
    let bandsHTML = "<ul>"

    for(const band of bands) {
        bandsHTML += `<li
            data-type = "band"
            data-id = "${band.id}"
            >${band.name}</li>`
    }

    bandsHTML += "</ul>"

    return bandsHTML

}



//add an event listener that triggers a window alert when a band name is clicked
//displays all of the venues at which the band is playing
document.addEventListener(
    "click",
    (clickEvent) => {
        const whatClicked = clickEvent.target
        
        //was a band name clicked on?
        if(whatClicked.dataset.type === "band") {

            //get the id of band clicked on
            const bandIdClicked = whatClicked.dataset.id
            
            //create an empty array that holds all of the booking objects with a matching bandId
            let matchingBookings = []
            
            //create an empty array that will hold all of the venue names where the band that was clicked is playing
            let thisBandsVenues = []
            
            //get the venues and bookings arrays from the database
            const venues = getVenues()
            const bookings = getBookings()
            
            //find all the venues that have booked that band
            //iterate through the bookings to find which ones have the matching bandId
            for(const booking of bookings) {

                //check if the bandId of each booking object matches the bandIdClicked
                if(booking.bandId === parseInt(bandIdClicked)) {
    
                    //if it matches, push that booking object to a new array called matchingBookings
                    matchingBookings.push(booking)
                    
                }
            }
            
            // iterate through the matchingBookings array and the venues array to find each venue object where the bandId matches
            for (const matchingBooking of matchingBookings) {
              
                //check if the venueId on the booking matches the venue id of each object in the venue array
                for(const venue of venues) {

                    if(matchingBooking.venueId === venue.id) {
    
                        //push the venue name to the empty thisBandsVenues array
                        thisBandsVenues.push(venue.name)
                        
                    }
                }
            }
                //create window alert
                window.alert(`${thisBandsVenues.join()}`)
        }
            
    }
        
)