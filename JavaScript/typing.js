// typing js
var typeText = document.querySelector(".typeText")
var textArr = ["Han Gwonhui", "Abookhui"]  // list
var idx = 0;
var isAdding = true, textIndex = 0

function Func() {
  setTimeout(
    function () {
    typeText.innerText = textArr[textIndex].slice(0, idx)
    if (isAdding) {
      if (idx > textArr[textIndex].length) {
        isAdding = false
        setTimeout(function () {
          Func()
        }, 2000)
        return
      } 
      else {
        idx++
      }
    } 
    else {
      if (idx === 0) {
        isAdding = true
        textIndex = (textIndex + 1) % textArr.length
      } 
      else {
        idx--
      }
    }
    Func()
  }, isAdding ? 120 : 60)
}
Func()
