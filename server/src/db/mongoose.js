const mongoose = require("mongoose");
const { DB_PASSWORD, DB_NAME } = require("../config/config.js");

// const uri = `mongodb+srv://xmailclient:${DB_PASSWORD}@cluster0.znxwm.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`;
const uri = `mongodb://localhost:27017/xmail`;

mongoose.connect(
  uri,
  {
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true
  },
  (err) => {
    if (err) throw new Error(err);
  }
);
