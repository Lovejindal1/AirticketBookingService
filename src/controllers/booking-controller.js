const {StatusCodes} = require('http-status-codes');

const {BookingService} = require('../services/index');

const bookingService = new BookingService();

const create = async (req, res) =>{
    try {
        const response = await bookingService.createBooking(req.body);
        return res.status(StatusCodes.OK).json({
            message: "Successfully completed booking",
            success: true,
            err: {},
            data: response
        })
    } catch (err) {
        return res.status(err.statusCode).json({
            message: err.message,
            success: false,
            err: err.explanation,
            data: {}
        })
    }
}
module.exports = {
    create
}