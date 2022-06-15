const logger = (req, res, next) => {
  console.log({
    method: req.method,
    url: req.url,
    time: new Date().getFullYear().toString(),
  });

  next();
};
module.exports = { logger };
