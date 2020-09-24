function stolpeValgt(barNo) {
    chosenBar = barNo == chosenBar ? null : barNo;
    show();
}

function removeChoice() {
    numbers.splice(chosenBar - 1, 1);
    show();
}

function changeChoice() {
    numbers.splice(chosenBar - 1, 1, inputValue);
    if (inputValue > 10) {
        return alert("Stolpe verdien kan kun være 10 eller lavere");
    }
    show();
}

function addChoice() {
    numbers.push(inputValue);
    if (inputValue > 10) {
        return alert("Stolpe verdien kan kun være 10 eller lavere");
    }
    show();
}
