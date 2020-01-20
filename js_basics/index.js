// Workspace to test code in browser

// FACTORY FUNCTIONS
function createCircle(radius) {
    return {
        radius, //if our key and value are the same we can remove the value
        draw(){
            console.log('draw');
        }
    }; 
}

const circle1 = createCircle(1);
console.log(circle1);
