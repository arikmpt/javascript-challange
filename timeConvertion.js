// convert 12 hour format to 24 hour
function timeConversion(s) {
    // Write your code here
    // get am or pm
    const ampm = s.slice(-2);
    // get hour
    const hours = Number(s.slice(0,2));
    let time = s.slice(0, -2);
    if(ampm === 'AM') {
        if(hours === 12) {
            return time.replace(s.slice(0,2), '00');
        }
        
        return time
    } else if(ampm === 'PM') {
        if(hours !== 12) {
            return time.replace(s.slice(0,2), String(hours + 12));
        }
        
        return time
    }
    
    return 'Error'
}

console.log(timeConversion("12:00:45PM"))