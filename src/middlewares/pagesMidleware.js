const { arrayForFiveCase } = require("../../utils/functions");
const statusCodes = require("../../utils/statusCodes");
const { invalidEntries } = require("../../utils/statusMessages");
const { checkNumberOfPages } = require("./schemasValidation");

module.exports = async (req, res) => {
  const { numberOfpages } = req.body;
  console.log(numberOfPages);
  const { error } = checkNumberOfPages.validate({ numberOfpages });
  console.log(error);
  if (!error) return res.status(statusCodes.OK).json(arrayForFiveCase(numberOfPages));
  return res.status(statusCodes.BAD_REQUEST).json({ message: invalidEntries });
}