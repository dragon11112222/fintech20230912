var jwt = require('jsonwebtoken');
var token = jwt.sign({ foo: 'bar' }, 'shhhhh');

let madeToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmb28iOiJiYXIiLCJwaG9uZSI6IjAxMDkxNjE1ODA4IiwiaWF0IjoxNjk0NzUxMDkyfQ.0PVs8onQwc0P4y02i9yTHHf4eNfeD7LjPTKMhcvnZ7E";
// console.log(madeToken);
jwt.verify(madeToken, "shhhhh", function (err, decoded) {
  if (err) {
    console.log(err);
  } else {
    console.log(decoded);
  }
});
