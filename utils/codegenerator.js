const voucherCodes = require('voucher-code-generator');
const codeGenerator = () => {
  const code = voucherCodes.generate({
    length: 5,
    count: 1
  })
  return code
}

module.exports = codeGenerator