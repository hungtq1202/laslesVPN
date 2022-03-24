// signin-signup

var signIn = document.querySelectorAll(".signin")
var signUp = document.querySelector(".signup")
var form = document.querySelector(".form")
var formSignup = document.querySelector(".form-signup")
var formMain = document.querySelectorAll(".form-main")

signIn.forEach(function(element){
    element.onclick = function() {
        form.classList.add('form-active')
    }
})


signUp.onclick = function () {
    formSignup.classList.add('form-active')
}

formSignup.onclick = function () {
    formSignup.classList.remove('form-active')
}

formMain.forEach(function (element) {
    element.onclick = function (e) {
        e.stopPropagation()
    }
})

form.onclick = function () {
    form.classList.remove('form-active')
}

// buy-plan

var buyPlans = document.querySelectorAll(".plan-wrapper")
var btns = document.querySelectorAll(".plan-btn")


btns.forEach(function (btn, index) {

    const buyPlan = buyPlans[index]

    btn.onclick = function () {
        document.querySelector(".plan-wrapper.plan-active").classList.remove("plan-active")
        document.querySelector(".plan-btn.btn-active").classList.remove("btn-active")
        buyPlan.classList.add("plan-active")
        btn.classList.add("btn-active")
    }
})

//feedback

var next = document.querySelector(".feedback-btn__next")
var feedbackItems = document.querySelectorAll(".feedback-item")
var feedbackBtnSmalls = document.querySelectorAll(".feedback-btn__small")

feedbackBtnSmalls.forEach(function (btn, index) {
    
    const feedbackItem = feedbackItems[index]
    
    btn.onclick = function () {
        document.querySelector(".feedback-item.feedback-item__active").classList.remove("feedback-item__active")
        document.querySelector(".feedback-btn__small.feedback-btn-active").classList.remove("feedback-btn-active")
        feedbackItem.classList.add("feedback-item__active")
        btn.classList.add("feedback-btn-active")
    }
})