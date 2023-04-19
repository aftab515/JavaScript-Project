//Messages
const step = async (message, time) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`${message}`);
    }, time)
  });
}

let email = "@username_email";
let instagram = "@username_instagram";
let fb = "@username_facebook";
let contact = "0123456789";

const hack = async () => {

  const msg = [
    "Initializing process...",
    "Installing setup and enviroments...",
    "Fetching your information...",
    "Trying to access your email id...",
    email + " Successfully accessed !!",
    "Trying to access your facebook account...",
    fb + " Successfully accessed !!",
    "Trying to access your instagram account...",
    instagram + " Successfully accessed !!",
    "Trying to access your phone messages...",
    contact + " Successfully accessed !!",
    "Successfully accessed your all sensitive informations!!",
    "------Alpha Hacking!!!-----"

  ];
  const time = [1000, 2000, 2000, 2000, 1000, 2000, 1000, 2000, 1000, 2000, 1000, 1000, 1000];

  document.getElementById("hack").style.padding = "20px 20px 20px 20px";


  for (let i = 0; i < msg.length; i++) {
    let txt = await step(msg[i], time[i]);
    document.querySelector("#hack").innerHTML += (txt) + "<br>";
  }
}
hack();



//Background

function background() {
  document.getElementById("container").style.padding = "";
  document.getElementById("hack").style.padding = "";

  function binary() {
    return num = parseInt(Math.random() * 2);
  }

  function textchange() {
    document.getElementById('hack').innerHTML = "";
    for (let i = 0; i < 1500; i++) {
      document.getElementById('hack').innerHTML += binary() + " ";
    }
  }
  setInterval(textchange, 100);
}

setTimeout(background, 20000);