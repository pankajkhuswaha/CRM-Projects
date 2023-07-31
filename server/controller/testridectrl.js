const asyncHandle = require("express-async-handler");
const TestRide = require("../models/textRideModel");
const bookTestRide = asyncHandle(async (req, res) => {
  const { email } = req.body;
  const test = await TestRide.findOne({ email });
  if (test) {
    if (test.status === "pending") {
      res.json("You already submit request for test bike please wait!");
    } else {
      res.json("ffdf");
      //   res.send(400);
    }
  } else {
    try {
      const newRide = await TestRide.create(req.body);
      res.json(newRide);
    } catch (error) {
      res.json(error.message);
    }
  }
});

const getallbookTestRide = asyncHandle(async (req, res) => {
  const test = await TestRide.find();
  const data =[]
  for (let i = 0; i < test.length; i++) {
    if(test[i].status!=="completed"){
        data.push(test[i])
    }
    
  }
  res.json(data);
});

module.exports = { bookTestRide, getallbookTestRide };
