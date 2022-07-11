let state = 0;
let states = [0];
let timer = setTimeout(() => {
    document.getElementById('alert').className = 'position-absolute top-0 alert alert-primary d-none';
}, 15000);
setInterval(() => {
    states.push(state);
}, 1000)

async function hit() {
    const src = document.getElementById('bulb-img').getAttribute('src');
    if (src.match('off')) {
        document.getElementById('bulb-img').setAttribute('src', './on.jpg');
        document.getElementById('lights').setAttribute('class', 'position-absolute top-50 start-50 on');
        state = 1;
    } else {
        document.getElementById('bulb-img').setAttribute('src', './off.jpg');
        document.getElementById('lights').setAttribute('class', 'position-absolute top-50 start-50');
        state = 0;
    };
    console.log(document.getElementById('bulb-img').getAttribute('src'));
};


function calc() {
    clearTimeout(timer);
    let count = states.reduce((pre, curr, index, arr) => {
        if (arr[index - 1] !== curr) {
            return pre + 1;
        }
        return pre;
    });
    if (states[0] === 1) count--;
    document.getElementById('alert').innerText = `The state of bulb changed ${count} Times in respect to one second! Total seconds was ${states.length}`;
    document.getElementById('alert').className = 'position-absolute top-0 alert alert-primary';
    timer = setTimeout(() => {
        document.getElementById('alert').className = 'position-absolute top-0 alert alert-primary d-none';
    }, 5000);
    states = [state];
};