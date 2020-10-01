var express = require("express");
var app = express();
const fetch = require("node-fetch");
app.use(express.json());
// store contacts in an arrays
var contacts = [
  // {
  //   name: "peter parker",
  //   age: 21,
  //   email: "peter@mit.edu",
  //   courses: [
  //     { number: "1.00", name: "engr comp" },
  //     { number: "3.00", name: "intro bio" },
  //   ],
  // },
  // {
  //   name: "bruce wayne",
  //   age: 32,
  //   email: "bruce@mit.edu",
  //   courses: [
  //     { number: "2.00", name: "intro ME" },
  //     { number: "3.00", name: "intro MS" },
  //   ],
  // },
  // {
  //   name: "diana prince",
  //   age: 25,
  //   email: "diana@mit.edu",
  //   courses: [
  //     { number: "2.00", name: "intro arch" },
  //     { number: "1.00", name: "intro chem" },
  //   ],
  // },
];

const getData = async () => {
  let url = "https://pollysnips.s3.amazonaws.com/users.json";
  try {
    let res = await fetch(url)
    contacts = await res.json();
    console.log('success')
    console.log(contacts);
  } catch (error) {
    console.log("error");
  }
 };
//  getData()
 
app.get("/", function (req, res) {
  res.send("<h1> Hello Routes: try POST to /contact and GET /contacts </h1>");
});
// list all contacts
app.get("/contacts", function (req, res) {
  // getData()
  res.json(contacts);
});
// add a contact
app.post("/contact", (req, res) => {
  contacts.push({ name: req.body.name, email: req.body.email });
  res.json(req.body);
});

app.listen(3000);
console.log("Running on port 3000");
