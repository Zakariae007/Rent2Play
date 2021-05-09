const express = require('express')
const router = express.Router()
const bookingController = require('../controllers/bookingController');

router.post('/bookings', bookingController.createBooking);
router.get('/bookings', bookingController.bookingsList);
router.delete('/booking/:id', bookingController.cancelBooking);


module.exports = router;