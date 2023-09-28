const crypto = require("crypto");

// 일방향
const sha256Enc = (plainText, key) => {
  const secret = key;
  const hash = crypto
    .createHmac("sha256", secret)
    .update(plainText)
    .digest("hex");  // 'binary', 'base64', 'utf-8'도 가능
  return hash;
};

console.log(sha256Enc("1234", "fintech"));
