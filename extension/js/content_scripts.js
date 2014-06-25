////////////////////////////////////////////////////////////////
// KEVIN TU CODE
////////////////////////////////////////////////////////////////

console.log('hello world');

// Add bubble to the top of the page.
var bubbleDOM = document.createElement('div');
bubbleDOM.setAttribute('class', 'selection_bubble');
document.body.appendChild(bubbleDOM);

// Lets listen to mouseup DOM events.
document.addEventListener('mouseup', function (e) {
console.log('mouseup');	
  var selection = window.getSelection().toString();
  if (selection.length > 0) {
    renderBubble(e.clientX, e.clientY, selection);
  }
}, false);

// Close the bubble when we click on the screen.
document.addEventListener('mousedown', function (e) {
	console.log('mousedown');
  bubbleDOM.style.visibility = 'hidden';
}, false);

// Move that bubble to the appropriate location.
function renderBubble(mouseX, mouseY, selection) {
  bubbleDOM.innerHTML = selection;
  bubbleDOM.style.top = mouseY + 'px';
  bubbleDOM.style.left = mouseX + 'px';
  bubbleDOM.style.visibility = 'visible';
}

document.onmouseover = function(e) {
    var targ;
    if (!e) var e = window.event;
    if (e.target) targ = e.target;
    else if (e.srcElement) targ = e.srcElement;
    if (targ.nodeType == 3) // defeat Safari bug
        targ = targ.parentNode;
    console.log(targ.id);
    // CALL FUNCTION TO CHECK IF TARG.ID MATCHES THE ID OF OUR SPECIAL DOM'S 
}


////////////////////////////////////////////////////////////////
// CONNIE HUANG CODE
////////////////////////////////////////////////////////////////