////////////////////////////////////////////////////////////////
// KEVIN TU CODE
////////////////////////////////////////////////////////////////

console.log('hello world');
// Set the classname to look for here! 
var g_classname = 'moneyDOM';

// Add bubble to the top of the page.
var bubbleDOM = document.createElement('div');
bubbleDOM.setAttribute('class', 'selection_bubble');
document.body.appendChild(bubbleDOM);

// listen to mouseup DOM events.
document.addEventListener('mouseup', function (e) {
	var selection = window.getSelection().toString();
	console.log(selection);
	// if (selection.length > 0) {
	//   renderBubble(e.clientX, e.clientY, selection);
	// }
}, false);

// Close the bubble when we click on the screen.
document.addEventListener('mousedown', function (e) {
	bubbleDOM.style.visibility = 'hidden';
}, false);

// Move that bubble to the appropriate location.
function renderBubble(mouseX, mouseY, selection) {
	// console.log('render this bubble');
	var bubbleDOM = document.getElementsByClassName('selection_bubble')[0];
	var top = parseInt(window.pageYOffset || document.documentElement.scrollTop,10);
	var left = parseInt(window.pageXOffset || document.documentElement.scrollLeft,10);
	bubbleDOM.innerHTML = selection;
	bubbleDOM.style.top = (mouseY + top) + 'px';
	bubbleDOM.style.left = (mouseX + left) + 'px';
	bubbleDOM.style.visibility = 'visible';
}
function processElement(class_list, e){
	// console.log('processing elements');
	if(class_list.indexOf(g_classname) > -1){
		renderBubble(e.clientX, e.clientY, "FOUND THE CLASS: " + g_classname);
	}
	else{
		bubbleDOM.style.visibility = 'hidden';
	}
}
// Be looking for ID's onmouseover
document.onmouseover = function(e) {
    var targ;
    if (!e) var e = window.event;
    if (e.target) targ = e.target;
    else if (e.srcElement) targ = e.srcElement;
    if (targ.nodeType == 3) // defeat Safari bug
        targ = targ.parentNode;
    // console.log(targ.id);
    console.log(targ.className);
    processElement(targ.className, e);     
}


////////////////////////////////////////////////////////////////
// CONNIE HUANG CODE
////////////////////////////////////////////////////////////////

$("body").html(function (_, word) {
    matches = word.match(/\$(([1-9]\d{0,2}(,\d{3})*)|(([1-9]\d*)?\d))(\.\d\d)?/g);

    var wrapped = $.map(matches, function (val, i) {
        $("body").html($("body").html().replace(/(\$(([1-9]\d{0,2}(,?\d{3})*)|(([1-9]\d*)?\d))(\.\d\d)?)/g, '<span class="moneyDOM"><span class="moneyDOM">$1</span></span>'));
    });

});
