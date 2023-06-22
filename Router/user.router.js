const express = require("express");
const route = express.Router();
const path = require("path");
const fs = require("fs");

const dataPath = path.join(__dirname, "../data/dataPlayer.json");
console.log("đường dẫn", dataPath);

route
  .route("/")
  .post((req, res) => {
    console.log(req.body);
    fs.readFile(dataPath, (err, data) => {
      if (err) {
        return res.status(500).send({ message: err });
      }
      const convertData = JSON.parse(data);
      // console.log("Dữ liệu ====> ", convertData);
      convertData.push(req.body);
      fs.writeFile(dataPath, JSON.stringify(convertData), (err) => {
        if (err) {
          return res.status(500).send({ message: err });
        }
        return res.status(200).send({ message: "Đã thêm thành công" });
      });
    });
  })
  .get((req, res) => {
    fs.readFile(dataPath, (err, data) => {
      if (err) {
        return res.status(500).send("ko co data");
      }
      const convertData = JSON.parse(data);
      return res.status(200).json(convertData);
    });
  });

// lấy toàn bộ data method get , trả về data , ở userpoint.js sẽ thực hiện lấy api vs method get
// so sánh id , lấy object render ra table

module.exports = route;
