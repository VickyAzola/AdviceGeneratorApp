const ADVICE_API = 'https://api.adviceslip.com/advice';

const ADVICEAPI_REQUEST_HEADERS = {
    'Content-Type': 'application/json'
};

const counter = document.getElementById("counter");
const advice = document.getElementById("advice");

function generateAdvice() {
    axios.get(ADVICE_API)
    .then(function(response) {
        advice.textContent = '"' + response.data.slip.advice + '"' 
        counter.textContent = response.data.slip.id
        console.log(response.data)
    } )
    .catch(function(error) {
        console.log(error)
    } );
}