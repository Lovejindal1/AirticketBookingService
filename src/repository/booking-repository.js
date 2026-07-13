const {StatusCodes} = require('http-status-codes')
const {Booking} = require('../models/index');
const { ValidationError, AppError } = require('../utils/errors/index');

class BookingRepository {
    async create(data){
        try {
            const booking = await Booking.create(data);
            return booking;
        } catch (err) {
            if(err.name == 'SequelizeValidationError'){
                throw new ValidationError(err);
            }
            throw new AppError('RepositoryError', 'Cannot create Booking', 'There was issue creating the booking, please try again later', StatusCodes.INTERNAL_SERVER_ERROR);
        }
    }

    async update(data) {
        
    }
}

module.exports = BookingRepository;