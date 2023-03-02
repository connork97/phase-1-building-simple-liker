// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

const emptyHeart = document.querySelectorAll('.like-glyph');
const modal = document.getElementById('modal');
const modalMessage = document.getElementById('modal-message');

emptyHeart.forEach((heart) => {
  heart.addEventListener('click', (event) => {
    mimicServerCall()
      .then((response) => {
        console.log(response);
        console.log(Promise.PromiseState);  // Trying to see if the Promise can NOT throw an Error but also NOT be Successful.
        // console.log(Promise.reject(response));
        fillHeart();
        // if(Promise.PromiseState == "Fulfilled" || Promise.PromiseState == "resolve"){
        //   fillHeart();
        //   console.log("filling heart");
        // } else {
        //   console.log("not filling heart");
        // }
      })
      .catch((error) => {
        console.error(error);
        modal.style.visibility = "visible";
        modalMessage.textContent = error;
        setTimeout(hideModal, 3000);
      })
  })
})

const hideModal = () => {
  modal.style.visibility = "hidden";
}

const fillHeart = (e) => {
  console.log("filling heart");
  emptyHeart.innerHTML = FULL_HEART;
}


// listItem.parentNode.replaceChild(newItem, listItem);

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}