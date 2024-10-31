// Error handler

const errorHandler = (err, req, res, next) => {
    console.log("Middleware error handling");
    const errStatus = err.statusCode || 500;
    const errMsg = err.message || 'error processing your request';
    res.status(errStatus).json({
        success: false,
        status: errStatus,
        message: errMsg,
        stack: process.env.NODE_ENV === 'development' ? err.stack : {}
    })
}

module.exports = errorHandler;