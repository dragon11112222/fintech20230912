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


// 양방향
const AESEncrypt = (plainText) => {
  const algorithm = 'aes-256-cbc';
  const key = 'H3uVnnOnNIXXsH63CsgswUsmICSCdVsn';
  const iv = 'dwUgwmwOndnJOmOX';
  const cipher = crypto.createCipheriv(algorithm, key, iv);
  let encrypted = cipher.update(plainText, "utf8", "base64");
  encrypted += cipher.final("base64");
  console.log(encrypted);
  return encrypted;
};

const AESDecrypt = (plainText) => {
  const algorithm = 'aes-256-cbc';
  const key = 'H3uVnnOnNIXXsH63CsgswUsmICSCdVsn';
  const iv = 'dwUgwmwOndnJOmOX';
  const decipher = crypto.createDecipheriv(algorithm, key, iv);
  let decrypted = decipher.update(plainText, "base64", "utf8");
  decrypted += decipher.final('utf8');
  console.log(decrypted);
  return decrypted;
};


AESEncrypt('!Kwic123테스트');
AESDecrypt('b3Bu7QBZ0q96+f2GY2NQmaT1XnZElI1+wRdSHBOY01s=');
