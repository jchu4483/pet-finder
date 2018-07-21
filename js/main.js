import fetchJsonp from 'fetch-jsonp';

const apiKey = '';
const petForm = document.querySelector('#petForm');
petForm.addEventListener('submit', handleForm);

function handleForm(e) {
  e.preventDefault();
  const petName = document.querySelector('#petName').value
  const zipcode = document.querySelector('#zipcode').value
  console.log(zipcode)
  fetchJsonp(`http://api.petfinder.com/pet.find?format=json&key=${apiKey}&animal=${petName}&location=${zipcode}&callback=callback`, 
    {
      jsonpCallbackFunction: 'callback'
    }
  )
  .then(res => res.json())
  .then(data => handlePetResponse(data.petfinder.pets.pet))
  .catch(err => console.log(err))
}

function handlePetResponse(pets) {
  const petListings = document.querySelector('#petsListings');
  console.log(petListings)
  const petsHTML = pets.map(pet => {
    return `
      <li>${pet.name.$t}</li>
    `
  }).join('')
  petListings.innerHTML = petsHTML
}