var house = 
{
    areas: [{
        livingRoom: {
            items: ['tv','sofa']
            },
        bedroomOne: {
            items: ['bed','washing machine'],
                windows: 3
            },
        bedroomTwo:{
            items: ['bed','bed','desk'],
                windows: 4
            },
        kitchen:{
            items: ['fridge','broken chair']
            }
            }],
    garden: [true, 'Red Rose'],
    garage: {
            car: {
                color: 'red',
                wheels: 4,
                honk: ()=>{alert("Beep")}
            }           
        }
}
//NOTE:  { } is an object; [ ] is an array
// 1. Find total number of areas in the house
let houseArray = Object.keys(house);
console.log('Total number of areas in the house:', houseArray.length);
console.log('Name of areas in the house:', houseArray);

// 2. Add a dining table to the living room
//let livingRoomArray = Object.keys(house.areas);
//console.log(livingRoomArray.length);
house.areas[0].livingRoom.items.push('dining table');
console.log('Items in the Living Room', house.areas[0].livingRoom.items);


// 3. Add a stove to the kitchen
house.areas[0].kitchen.items.push('dining table');
console.log('Items in the Kitchen', house.areas[0].kitchen.items);

// 4. Remove the washing machine from bedroomOne
house.areas[0].bedroomOne.items.pop();
console.log('Items in Bedroom One', house.areas[0].kitchen.items);

// 5. Find the total number of beds in all rooms
let bedCounter = 0;
Object.values(house.areas[0]).forEach(
    (area)=>{
        if(area.items.includes('bed')){
           // Find all items that are 'bed' and put it into an array
           let allTheBeds = area.items.filter(item=>item == 'bed');
           // Increase bedCounter
           bedCounter += allTheBeds.length;
        }
    }
);

// 6. Change the color of the car to blue
house.garage.car.color = "blue";
console.log('color of the car', house.garage.car.color );

// 7. Add a another car to the garage with a honk function
house.garage.newCar = {
    color: 'white',
    wheels: 4,
    honk: ()=>{alert("Beep")}
};
console.log('the new car', house.garage.newCar);

// 8. Make the new car honk
house.garage.newCar.honk();

// 9. Change the 'broken chair' in the kitchen to 'new chair'
let positionOfBrokenChair = house.areas[0].kitchen.items.indexOf('broken chair')
house.areas[0].kitchen.items[positionOfBrokenChair] = "new chair";
console.log(house.areas[0].kitchen.items);

// 10. If the house has a garden, console.log the name of the flower
if(house.garden[0]) {
    console.log('The name of the Flower',house.garden[1]);
}