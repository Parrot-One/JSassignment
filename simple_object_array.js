//Counting elements in an object
let areas = [{
    livingRoom: "12 ft.sq", //key: "value"
    kitchen: "10 ft.sq", //key: "value"
    bedroom: "5 ft.sq" //key: "value"
}];


Object.keys(areas[0]); // ['livingRoom','kitchen','bedroom']
Object.values(areas[0]); // ["12 ft.sq","10 ft.sq","5 ft.sq"]
Object.keys(areas[0]).length = 3;


//Counting elements in an array
let areas2 = [
    {livingRoom: "12 ft.sq"},
    {kitchen: "10 ft.sq"},
    {bedroom: "5 ft.sq"}
];

areas2.length = 3