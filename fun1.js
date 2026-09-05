function createteamaker() {
    return function (teatype) {
        return "making " + teatype + " ";

    };
}

let teamaker = createteamaker();
console.log(teamaker("herbal tea"));