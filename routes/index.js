const express = require('express');
const router = express.Router();
const fetch = require('node-fetch')

// Do work here
router.get('/search', (req, res, next) => {
  const apiKey = '97e3f6aacd9490ea9406074d72195328';
  const petName = req.query.petName;
  const zipcode = req.query.zipcode

  fetch(`http://api.petfinder.com/pet.find?format=json&key=${apiKey}&animal=${petName}&location=${zipcode}`)
    .then(res => res.json())
    .then(data => handlePetResponse(data.petfinder.pets.pet))
    .catch(err => console.log(err)
  )
  function handlePetResponse(pets) {
    console.log(pets)
    res.render('show', {
      pets: pets
    })
  }

})


router.get('/', (req, res) => {
  res.render('index')
});



module.exports = router;