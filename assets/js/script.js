// ********************************
// Sidebar js start
// ********************************
function openNav() {
    document.getElementById("mySidepanel").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
  }

// ********************************
// Sidebar js end
// ********************************






// ********************************
// Hero counter js start
// ********************************
  const counters = document.querySelectorAll(".count");
  const speed = 200;
  
  counters.forEach((counter) => {
    const updateCount = () => {
      const target = parseInt(+counter.getAttribute("data-target"));
      const count = parseInt(+counter.innerText);
      const increment = Math.trunc(target / speed);
      console.log(increment);
  
      if (count < target) {
        counter.innerText = count + increment;
        setTimeout(updateCount, 1);
      } else {
        count.innerText = target;
      }
    };
    updateCount();
  });
// ********************************
// Hero counter js end
// ********************************




//  Tab js here
    function openTab(evt, tabName) {
        var i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }
        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
        document.getElementById(tabName).style.display = "block";
        evt.currentTarget.className += " active";
    }
    function buttonNext(event, nextName) {
        tabcontent = document.getElementsByClassName("tabcontent");
        tablinks = document.getElementsByClassName("tablinks");
        var divName = event.currentTarget.parentNode.parentNode.getElementsByTagName('div');
        for (var i = 0; i < tablinks.length; i++) {
            if (nextName == divName[i].id) {
                tablinks[i].className = "tablinks active";
                tabcontent[i].style.display = "block";
            }
            else {
                tablinks[i].className = "tablinks";
                tabcontent[i].style.display = "none";
            }
        }
    }
    // Get the element with id="defaultOpen" and click on it
    document.getElementById("defaultOpen").click();
