const jwt = require("jsonwebtoken");

const secret = "this is my secret";

const token = jwt.sign(
  { userIdx: 100, nickname: "진다영" }, // payload 정의
  secret // 서버 비밀키
);

console.log(token);

const verifiedToken = jwt.verify(
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWR4IjoxMDAsIm5pY2tuYW1lIjoi7KeE64uk7JiBIiwiaWF0IjoxNjk5MjYzNzgzfQ.K_sbqnW7Byq0HotonckfklIdx_yKkTu69Kq2d8gcHRo",
  secret
);

console.log(verifiedToken);