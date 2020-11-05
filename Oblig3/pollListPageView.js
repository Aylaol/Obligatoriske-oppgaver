function updateViewPollList() {
    const pollList = model.polls;





    let html = '';
    for (let i = 0; i < pollList.length; i++) {
        html += `<ul>${pollList[i].question}</ul><button onclick="pollLink(${i})">Link</button>`;

        document.getElementById('app').innerHTML = `
                <h3> Liste over Polls </h3>
           
                  ${html}
       

            ` };
    return html;

}


function pollLink(pollList) {
    const input = model.inputs.createPoll;


    input.pollId = model.polls[pollList].pollId;
    input.newAlternative = model.polls[pollList].newAlternative;
    input.question = model.polls[pollList].question;
    input.options = model.polls[pollList].options;
    input.userCanAddAlternatives = model.polls[pollList].userCanAddAlternatives;

    changePage('createPoll');

}
