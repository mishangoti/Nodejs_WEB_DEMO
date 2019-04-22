const fs = require("fs");
let shell = require("shelljs");
const cron = require("node-cron");
const express = require("express");
let nodemailer = require("nodemailer");

app = express();

// deleting error.log files from server on the 21st of every month
cron.schedule("* * 21 * *", function() {
  console.log("---------------------");
  console.log("Running Cron Job");
  fs.unlink("./error.log", err => {
    if (err) throw err;
    console.log("Error file succesfully deleted");
  });
});

// sending emails at periodic intervals

// create mail transporter
let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "mishan2512@gmail.com",
    pass: "gdnyoastdlrywynk"
  }
});

cron.schedule("* * * * Wednesday", function() {
  console.log("---------------------");
  console.log("Running Cron Job");
  let mailOptions = {
    from: "mishan2512@gmail.com",
    to: "mishan2512@gmail.com",
    subject: `Not a GDPR update ;)`,
    text: `Hi there, this email was automatically sent by us`
  };
  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      throw error;
    } else {
      console.log("Email successfully sent!");
    }
  });
});

// To backup a database
cron.schedule("59 23 * * *", function() {
  console.log("---------------------");
  console.log("Running Cron Job");
  if (shell.exec("sqlite3 database.sqlite  .dump > data_dump.sql").code !== 0) {
    shell.exit(1);
  } else {
    shell.echo("Database backup complete");
  }
});

app.listen("3128", function(err, res){
  console.log('3128');
});