/**
 * Open the current clicked menu and close the other menus
 * @param {object} event - The DOM event
 */

function openMenu(event) {
    event.stopPropagation();
    event.preventDefault();

    var currentDropDownButton = event.target;
    var currentDropDownMenu =
        currentDropDownButton.parentNode.querySelector('.dropdown-menu');
        aria=currentDropDownMenu.closest('li').querySelector('.nav-link')
    var isOpen = currentDropDownMenu.classList.contains('show');
    var dropDownMenus =
        document.querySelectorAll('#nav-bar-content .dropdown .dropdown-menu');
        /*var dropdownItem = currentDropDownButton.parentNode.querySelectorAll('.dropdown-menu .dropdown-item');*/
    for (var j = 0; j < dropDownMenus.length; j++) {
        dropDownMenus[j].classList.remove('show');
        aria.setAttribute('aria-expanded','false');
    }

    if (!isOpen) {
        currentDropDownMenu.classList.add('show');
        aria.setAttribute('aria-expanded','true');

        window.onkeyup = function (e) {
          if(e.keycode === ESCAPE_KEYCODE) {
            e.preventDefault();
            currentDropDownMenu.classList.remove('show');
          aria.setAttribute('aria-expanded','false');
          }
        }

        /*var items = [...dropdownItem]
        window.onkeyup = function (e){
          if(e.keyCode === 27) || e.keyCode === 27 && items.show(itm => itm ===document.activeElement)
          e.preventDefault();
          currentDropDownMenu.classList.remove('show');
          ariaLabel.setAttribute('aria-expanded','false')
        }
        window.onkeyup = function (e) {
          if(e.keyCode == 27)
          {
            document.getElementById('nav-bar-faculties').style.visibility="hidden"''
          }
        }*/
    }
}

/*$('.dropdown-toggle').dropdown()*/




/*document
.querySelector('#nav-bar-faculties') // Select the menu element
.addEventListener('click', function(event) { // Add event listener
if(this.parentNode.style.display==='none') {
// Open the menu if it is closed
this.parentNode.style.display='block’;
this.setAttribute('aria-expanded', "true");
} else{
// Close the menu it if is open
this.parentNode.style.display='closed';
this.setAttribute('aria-expanded', 'false');
}
event.preventDefault(); // Prevent default event handling
}, false);*/

/*document.addEventListener('keyup', function (e) {
  if(e.key === 'Tab') {
    var currentDropItems = [...dropdownItem];
    if(currentDropItems.some(itm => itm === document.activeElement)) {
      return;
    } else {
      currentDropDownMenu.classList.remove('show');
      ariaLabel.setAttribute('aria-expanded', false);
    }
  }
};
}*/

/**
 * Toggle the navigation content
 * @param {object} event - The DOM event
 */
function toggleNavigation(event) {
    event.stopPropagation();
    event.preventDefault();

    var content = document.getElementById('nav-bar-content');
    if (content.classList.contains('collapse')) {
        content.classList.remove('collapse');
    } else {
        content.classList.add('collapse');
    }
}

document.addEventListener('DOMContentLoaded', function() {
    var dropDownToggles =
        document.querySelectorAll('#nav-bar-content .dropdown-toggle');

        for (var i = 0; i < dropDownToggles.length; i++) {
        dropDownToggles[i].addEventListener('click', openMenu, false);
    }

    document.querySelector('.navbar-toggler').addEventListener('click', toggleNavigation, false);
        var dropdownItems = document.querySelectorAll('.dropdown-item');
    dropdownItems.forEach(item => {
      item.addEventListener('keydown', function (e) {
        if (e.keyCode === SPACE_KEYCODE) {
          e.preventDefault();
          e.target.click();
        }
      });
    });
}, false
);

$(document).ready(function(){
    var fontSize = parseInt($('#root').css('font-size'));
    $('[id ^=font-increase-button]').on("click", function(){
      if(fontSize <= 32)
        fontSize+=2;
        $('#root').css('font-size',fontSize+'px');
    })
    $('[id ^=font-decrease-button]').on("click", function(){
      if(fontSize >= 14)
        fontSize-=2;
        $('#root').css('font-size',fontSize+'px');
    })
})
