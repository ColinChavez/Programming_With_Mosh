//Excercises

// Speed Limit = 40
// every 5  over 70 they get a point
//Math.floor(1.3)
// 12 points suspended

checkSpeed(109);

function checkSpeed(speed) {
    const speedLimit = 70;
    const kmPerPoint = 5;

    if (speed < speedLimit + kmPerPoint) {
        console.log('Ok');
        return;
    }
    
    const points = Math.floor((speed - speedLimit) / kmPerPoint);
    if (points >= 12)
     console.log('License Suspended');
    else
     console.log('Points', points); 
}