const CustomError = require("./custom-error");
const chalk = require("chalk");

const errorHandler = (err, req, res, _next) => {
  console.log(chalk.bgRed("[ERR-HANDLER]"), chalk.inverse(err));
  if (err instanceof CustomError) {
    res.status(err.statusCode);
    return res.json({ ok: false, errors: err.serializeErrors() });
  }

  res.status(500); // Default to 500 if the error is not a CustomError
  return res.send({
    ok: false,
    errors: [{ message: "Unhandled Server Error", err }],
  });
};

module.exports = errorHandler;

// const errorHandler = (err, req, res, next) => {
//     console.log(chalk.bgRed('[ERR-HANDLER]'),chalk.inverse(err))
//     let error = 404
//     let message = 'Not found'
//     if (err instanceof CustomError) {
//         // return res.status(err.statusCode).json({ ok: false, errors: err.serializeErrors() })
//         error = err.statusCode
//         message = err.serializeErrors()
//     }
//     // res.status(400).send({ ok: false, errors: [{ message: 'Unhandled Server Error', err }]  })
//     res.render('404', { layout: false, error, message })
// }
