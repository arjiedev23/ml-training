/**
 * Write a function to display the current date and time in the format
 * 'MM-DD-YYYY HH:MM:SS'.
 * @return {string} The current date and time in the format 'MM-DD-YYYY HH:MM:SS'.
 */

function DisplayCurrentDate(){
    var currentdate = new Date(); 
    var datetime = String(currentdate.getMonth()+1).padStart(2, '0') + "-" + String(currentdate.getDate()).padStart(2, '0') + "-" + currentdate.getFullYear() + " "  
                + String(currentdate.getHours()).padStart(2, '0') + ":" + String(currentdate.getMinutes()).padStart(2, '0') + ":" + String(currentdate.getSeconds()).padStart(2, '0');
    console.log(datetime);
}

DisplayCurrentDate();