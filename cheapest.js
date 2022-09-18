function minInArray(numbers){
    console.log(numbers);
    let cheapest = 234;
    for(let i = 0; i < numbers.length; i++){
        const index = i;
        const element = numbers[index];
        console.log(element);

        if(element < cheapest){
        cheapest = element;
        }
    }
    return cheapest;
}

const heights = [167, 190, 120, 165, 137, 345];
const cheapest = minInArray(heights);
console.log('the cheapest number is: ',cheapest);