eventListeners = () => {
  const ui = new UI();
  window.addEventListener("load", () => {
    ui.hidePreloader();
  });

  // navBtn Event Listener
  document
    .querySelector(".navBtn")
    .addEventListener("click", () => ui.showNav());

  // Control the Video

  document
    .querySelector(".video__switch")
    .addEventListener("click", () => ui.videoControl());

  //handle Form Submit

  document.querySelector(".room-form").addEventListener("submit", event => {
    event.preventDefault();
    const name = document.querySelector(".input-name").value;
    const lastname = document.querySelector(".input-lastname").value;
    const email = document.querySelector(".input-email").value;

    let value = ui.checkEmpty(name, lastname, email);

    if (value) {
      let customer = new Customer(name, lastname, email);
      console.log(customer);
      ui.addCustomer(customer);
      ui.showFeedback("Customer added to the list", "success");
      ui.clearFields();
    } else {
      ui.showFeedback("some fields are empty", "error");
    }
  });
};

eventListeners();

function UI() {}

UI.prototype.hidePreloader = () =>
  (document.querySelector(".preloader").style.display = "none");

UI.prototype.showNav = () =>
  document.querySelector(".nav").classList.toggle("nav-show");

//play and pause the video
UI.prototype.videoControl = () => {
  let btn = document.querySelector(".video__switch-btn");
  if (!btn.classList.contains("btnSlide")) {
    btn.classList.add("btnSlide");
    document.querySelector(".video__item").pause();
  } else {
    btn.classList.remove("btnSlide");
    document.querySelector(".video__item").play();
  }
};

// Check for empty values

UI.prototype.checkEmpty = (name, lastname, email) => {
  let result;
  name === "" || lastname === "" || email === ""
    ? (result = false)
    : (result = true);

  return result;
};

// Show Feedback
UI.prototype.showFeedback = (text, type) => {
  const feedback = document.querySelector(".room-form-feedback");
  if (type === "success") {
    feedback.classList.add("success");
    feedback.innerText = text;
    setTimeout(() => {
      feedback.classList.remove("success");
    }, 3000);
  } else if (type === "error") {
    feedback.classList.add("error");
    feedback.innerText = text;
    setTimeout(() => {
      feedback.classList.remove("error");
    }, 3000);
  }
};

//Add Customer

UI.prototype.addCustomer = customer => {
  const images = [1, 2, 3, 4];
  random = Math.floor(Math.random() * images.length);
  const div = document.createElement("div");
  div.classList.add("person");
  div.innerHTML = ` <div class="person">
  <img
    src="./images/person${random}.jpg"
    alt="person"
    class="person-thumbnail"
  />
  <h4 class="person__name">${customer.name}</h4>
  <h4 class="person__last-name">${customer.lastname}</h4>
</div> `;
  document.querySelector(".room-card__list").appendChild(div);
};

//Clear Fields

UI.prototype.clearFields = () => {
  document.querySelector(".input-name").value = "";
  document.querySelector(".input-lastname").value = "";
  document.querySelector(".input-email").value = "";
};
function Customer(name, lastname, email) {
  this.name = name;
  this.lastname = lastname;
  this.email = email;
}
