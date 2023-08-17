/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

// myarray.map crear un map apra todos los li

window.onload = function() {
  //write your code here
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let domain = [".com", ".net", ".us", ".io"];
  // let myArray = [];
  let HTMLtext = "";
  for (let i in pronoun) {
    for (let j in adj) {
      for (let k in noun) {
        for (let h in domain) {
          let element =
            "<li>" + pronoun[i] + adj[j] + noun[k] + domain[h] + "</li>";
          HTMLtext += element;
          // myArray.push(element);
        }
      }
    }
  }
  // console.log(myArray);

  // let HTMLtext = myArray.map(item => {return `<li>${item}</li>`; });
  let myList = document.querySelector("#domains");
  myList.innerHTML = HTMLtext;
};
