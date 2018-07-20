import fetchJsonp from 'fetch-jsonp';

const apiKey = '97e3f6aacd9490ea9406074d72195328';
const petForm = document.querySelector('#petForm');
petForm.addEventListener('submit', handleForm);

function handleForm(e) {
  e.preventDefault();
  const petName = document.querySelector('#petName').value
  
  fetchJsonp(`http://api.petfinder.com/pet.find?format=json&key=${apiKey}&animal=${petName}&callback=callback`, 
    {
      jsonpCallbackFunction: 'callback'
    }
  )
  .then(res => res.json())
  .then(data => console.log(data))
}