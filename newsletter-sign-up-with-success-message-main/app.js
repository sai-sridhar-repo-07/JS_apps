const mainContainer = document.querySelector(".container");
const successContainer = document.querySelector(".success");

const emailId = document.querySelector(".email-id");
const mainBtn = document.querySelector(".main-btn");
const successBtn = document.querySelector(".success-btn");
const para = document.querySelector(".para");
// const addPara = document.querySelector(".add-para");
const addPara = document.querySelector(".message");

const regexEmail = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;

function emailValidator(email) {
  //   console.log("hello");
  if (regexEmail.test(email)) {
    console.log("success");
    return true;
  }
  console.log("fail");

  return false;
}

mainBtn.addEventListener("click", () => {
  if (emailValidator(emailId.value)) {
    console.log("hello");
    mainContainer.classList.toggle("active");
    // const paragraph = document.createElement("p");
    addPara.textContent = `Thanks for subscribing! A confirmation email 
    has been sent to ${emailId.value}. Please open it and click the button
    inside to confirm your subscription. Dismiss message`;

    successContainer.classList.toggle("active");
  } else {
    para.classList.add("active");
    emailId.classList.add("active");
  }
});

successBtn.addEventListener("click", () => {
  mainContainer.classList.toggle("active");
  successContainer.classList.toggle("active");
  emailId.value = "";
  addPara.textContent = "";
});
