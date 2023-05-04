/* 
This module will  hold the function that creates the html list of band names
and the event listener for when a band name is clicked on

*/

//import the function the gets the bands array
import { getBands } from "./database.js"

const bands = getBands()

//create and export a function that returns the html list of band names
export const BandsList = () => {
    let bandsHTML = "<ul>"

    for(const band of bands) {
        bandsHTML += `<li>${band.name}</li>`
    }

    bandsHTML += "</ul>"

    return bandsHTML

}



//add an event listener that triggers a window alert when a band name is clicked