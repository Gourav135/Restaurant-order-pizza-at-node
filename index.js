var inquirer = require('inquirer');

console.log("************************************")
console.log("********Welcome to Restaurant*******")
console.log("************************************")
console.log("*******First you have to Login*******")

inquirer.prompt([
    /* Pass your questions in here */
    {
        type:"input",
        message:"Enter your username",
        name:"username"
    },
    {
        type:"password",
        message:"Enter your username",
        name:"password"
    }
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    console.log("Account name and password", answers.username);
    
    inquirer.prompt([
      {
        type:"list",
        name:"Choose Pizza",
        message:"please choose your pizza",
        choices:[
          "capsicum",
          "paneer",
          "onion"
        ]
      },
      {
        type:"list",
        name:"choose size",
        message :"Choose the size of your pizza ",
        choices:[
          "Small",
          "medium",
          "large"
        ]
      },
      
        {
            type: "confirn",
            name: "For Delivery",
            message: "Do you want it to be delivered?",
            default: true,

        },
        {
            type:"input",
            message:"Please enter your address",
            name:"Address"
        },
        {
            type:"number",
            message:"Please enter your phone number",
            name:"Phone No."
        },
        {
            type:"input",
            message:"Please enter the quantity",
            name:"quantity",
            
        }
        
        
        
    ]).then((add) => {
      console.log("bill",add);
      console.log("Price is",(add.quantity)*59," with gst");
    })

  })

  // .then(answers => {
  //   console.log(answers);
  // })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });