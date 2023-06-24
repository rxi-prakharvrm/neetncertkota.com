// Variable Declaration
const hiddenHeaderTabsCtr = document.querySelector(".hidden-header-tabs-ctr");
const requestQuestionOverlayCtr = document.querySelector(".request-question-overlay-ctr");

// direct mail variables
const senderName = document.querySelector('.request-question-input-name');
const senderEmail = document.querySelector('.request-question-input-email');
const senderQuery = document.querySelector('.request-question-input-query');
const submitBtn = document.querySelector('.request-question-submit-btn');

// Header
function toggleHiddenHeaderTabsCtr() {
    hiddenHeaderTabsCtr.classList.toggle("hide");
}

// Request Question
function openRequestQuestionOverlay() {
    requestQuestionOverlayCtr.classList.add("flex");
    requestQuestionOverlayCtr.classList.remove("hide");
    document.body.style.overflow = "hidden";
    hiddenHeaderTabsCtr.classList.add("hide");
}

function closeRequestQuestionOverlay() {
    requestQuestionOverlayCtr.classList.add("hide");
    requestQuestionOverlayCtr.classList.remove("flex");
    document.body.style.overflow = "auto";
}

// Copyright current year
const date = new Date();
document.querySelector('.copyright-current-year').innerHTML = date.getFullYear();

submitBtn.addEventListener('click', () => {
    submitBtn.href = `mailto:prakharverma1022@gmail.com?subject=${senderName.value}, ${senderEmail.value}&body=${senderQuery.value}`
})
