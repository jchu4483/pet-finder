const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');
const apiKey = '97e3f6aacd9490ea9406074d72195328';

// Do work here
router.get('/', (req, res) => {

  function handleForm() {
    const petName = 'dog'
    const zipcode = '11370'

    fetch(`http://api.petfinder.com/pet.find?format=json&key=${apiKey}&animal=${petName}&location=${zipcode}`)
      .then(res => res.json())
      .then(data => handlePetResponse(data.petfinder.pets.pet))
      .catch(err => console.log(err))
  }
  handleForm();
  function handlePetResponse(pets) {
    console.log(pets)

  }
  res.render('index')
});

module.exports = router;