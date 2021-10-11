
/*
 * Starter file 
 */
(function() {

  "use strict";

  /**
   * The starting point in our program, setting up a listener
   * for the "load" event on the window, signalling the HTML DOM has been constructed
   * on the page. When this event occurs, the attached function (init) will be called.
   */
  window.addEventListener("load", init);
  

  /**
   * TODO: Write a function comment using JSDoc.
   */
  function init() {
    // Note: In this function, we usually want to set up our event handlers
    // for UI elements on the page.
    document.getElementById("encrypt-it").addEventListener("click", handleClick);
  }
  function handleClick(){
    let inputText = document.getElementById("input-text").value
    inputText = inputText.toLowerCase()

    let outputText = []
    for(let i = 0; i < inputText.length; i ++){
      outputText.push(String.fromCharCode((inputText[i].charCodeAt() + 1)))
    }
    let res = outputText.join("").replace(/{/g, 'a');;
    document.getElementById('result').textContent = res;
  }

  // Add any other functions in this area (you should not implement your
  // entire program in the init function, for similar reasons that
  // you shouldn't write an entire Java program in the main method).

})();
