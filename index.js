
const cardHolderNumber = []

function cardDistribution(info){

    const dist = (info.distric.split('')[0]+info.distric.split('')[1]).toUpperCase()
    let year = ((info.currentYear.toString()).split(''));
        year = year[year.length-1]+year[year.length-2];
    let postCode = ((info.postNo.toString()).split(''));
        postCode = postCode[0]+postCode[1];

    let cardPriority;
    const priorityLength = info.priority.toString().length

    if(priorityLength === 1){
        cardPriority = '00000'+info.priority;
    }else if(priorityLength === 2){
        cardPriority = '0000'+info.priority;
    }else if(priorityLength === 3){
        cardPriority = '000'+info.priority;
    }else if(priorityLength === 4){
        cardPriority = '00'+info.priority;
    }else if(priorityLength === 5){
        cardPriority = '0'+info.priority;
    }else if(priorityLength === 6){
        cardPriority = info.priority;
    }else{
        cardPriority = info.priority;
    }


    const generate = dist+year+postCode+info.birtYear+cardPriority;


    return {cardNumber: generate, gitft: info.priority %2 === 0 ? "R": "W", priority: info.priority};
}

const cardPerson = {
name: "Ariful Islam",
birtYear: 1994,
currentYear: (new Date()).getFullYear(),
distric: "Dhaka",
postNo: 1200,
priority: 123
}

const cardPerson2 = {
name: "Sadiqul Islam",
birtYear: 2000,
currentYear: (new Date()).getFullYear(),
distric: "Dhaka",
postNo: 1210,
priority: 2
}
const cardPerson3 = {
name: "Johirul Islam",
birtYear: 1997,
currentYear: (new Date()).getFullYear(),
distric: "Dhaka",
postNo: 1214,
priority: 3
}
cardHolderNumber.unshift(cardDistribution(cardPerson))
cardHolderNumber.unshift(cardDistribution(cardPerson2))
cardHolderNumber.unshift(cardDistribution(cardPerson3))

console.log(cardHolderNumber);