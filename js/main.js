import fetchJsonp from 'fetch-jsonp';
import { isValidZip } from './validate';

const apiKey = '';
const petForm = document.querySelector('#petForm');
petForm.addEventListener('submit', handleForm);

function handleForm(e) {
  e.preventDefault();
  const petName = document.querySelector('#petName').value
  const zipcode = document.querySelector('#zipcode').value
  isValidZip(zipcode);
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
  console.log(pets)
  const petsHTML = pets.map(pet => {
    return `
      <li>
        <div class="pet-container">
          <div class="info-card">
            <div class="pet-name">${pet.name.$t}</div>
            <div class="pet-age">${pet.contact.email.$t}</div>
            <div class="pet-shelterId">Shelter Id: ${pet.shelterId.$t}</div>
            <div class="pet-age">${pet.age.$t}</div>
          </div>
            <img class="pet-image" src="${Object.keys(pet.media).length !== 0 ? pet.media.photos.photo[3].$t : ""}">
        </div>
      </li>
    `
  }).join('')
  petListings.innerHTML = petsHTML
}