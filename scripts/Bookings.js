/* 
This module will  hold the function that creates the html list of bookings
and the event listener for when a booking name is clicked on

*/

//import the function the gets the bookings array (may also need venues and bands arrays?)
import { getBookings, getBands, getVenues } from "./database.js";

//invoke the getter functions and save them to a variable
const bookings = getBookings()
const bands = getBands()
const venues = getVenues()

//create and export a function that returns the html list of bookings
//example: "[band name(s)] are playing at [venue name] on [date of booking]"
export const BookingsList = () => {
    let bookingsHTML = `<ul class="bookings__list">`
    //iterate through booking objects
    for(const booking of bookings) {
        //create empty array to hold all the band names playing 
        let bandName = null
        //create empty variable for venueName
        let venueName = null

        //find the band object that corresponds with the booking object
        for(const band of bands) {
            if(booking.bandId === band.id) {
                bandName = band.name
            }
        }
        //fing the venue object that corresponds with the booking object
        for(const venue of venues) {
            if(booking.venueId === venue.id) {
                venueName = venue.name
            }
        }

        bookingsHTML += `<li
                    data-id="${booking.id}"
                    data-bandid="${booking.bandId}"
                    data-type="booking"
                    >
                    ${bandName} are playing at ${venueName} on ${booking.date}
                    </li>`
    }

    bookingsHTML += "</ul>"

    return bookingsHTML

}



//add an event listener that triggers a window alert when a booking is clicked
//display all the band info (name, genre, year formed, number of members)
document.addEventListener (
    "click",
    (clickEvent) => {
        const whatClicked = clickEvent.target

        //was a booking list item clicked on?
        if(whatClicked.dataset.type === "booking") {

            //get the bandId of booking clicked on
            const bandId = parseInt(whatClicked.dataset.bandid)

            //create a base object for the band info
            let baseBand = {
                name: "name",
                genre: "genre",
                yearFormed: 0,
                members: 0
            }

            //iterate through bands array to find the object with matching id
            for (const band of bands) {

                if(bandId === band.id) {
                    baseBand.name = band.name
                    baseBand.genre = band.genre
                    baseBand.yearFormed = `Formed in ${band.yearFormed}`
                    baseBand.members = `${band.members} band members`
                }
                
            }

            window.alert(`${baseBand.name}\n${baseBand.genre}\n${baseBand.yearFormed}\n${baseBand.members}`)


        }






    }
)