// Your code goes here

//Add colors to mouseover events for nav menu and change back to black upon mouseleave
let nav = document.querySelectorAll('.nav-link');
nav[0].addEventListener('mouseover', (event) => {
    event.target.style.color = 'red';
    event.stopPropagation();
    })
nav[0].addEventListener('mouseleave', (event) => {
    event.target.style.color = 'black';
    event.stopPropagation();
    })
    
nav[1].addEventListener('mouseover', (event) => {
    event.target.style.color = 'blue';
    event.stopPropagation();
    })
nav[1].addEventListener('mouseleave', (event) => {
    event.target.style.color = 'black';
    event.stopPropagation();
    })

nav[2].addEventListener('mouseover', (event) => {
    event.target.style.color = 'green';
    event.stopPropagation();
    })
nav[2].addEventListener('mouseleave', (event) => {
    event.target.style.color = 'black';
    event.stopPropagation();
    })

nav[3].addEventListener('mouseover', (event) => {
    event.target.style.color = 'orange';
    event.stopPropagation();
    })
nav[3].addEventListener('mouseleave', (event) => {
    event.target.style.color = 'black';
    event.stopPropagation();
    })

//scale bus image with mousewheel
function zoom(event) {
    event.preventDefault();
  
    scale += event.deltaY * -0.0001;
  
    // Restrict scale
    scale = Math.min(Math.max(.125, scale), );
  
    // Apply scale transform
    event.target.style.transform = `scale(${scale})`;
  }  
let scale = 1;
const image = document.querySelectorAll('img');

image.forEach((element) => {
    element.addEventListener('wheel', zoom);
  });

//change text background color on headers upon various types of selection

const headers = document.querySelectorAll('h2');

headers[0].addEventListener('contextmenu', (event) => {
    event.target.style.color = 'pink';
    event.stopPropagation();
    })

headers[1].addEventListener('dblclick', (event) => {
    event.target.style.color = 'purple';
    event.stopPropagation();
})

headers[2].addEventListener('mousedown', (event) => {
    event.target.style.color = 'purple';
    event.stopPropagation();
})
headers[2].addEventListener('mouseup', (event) => {
    event.target.style.color = 'black';
    event.stopPropagation();
})

//Create alert when content has been copied to the clipboard

const paragraphs = document.querySelectorAll('p');
// for (i = 0; i < paragraphs.length; ++i) {
//     paragraphs[i].addEventListener('copy', (event) => {
//         alert('Your text has been copied to the clipboard');
//     })
//   }

paragraphs.forEach( (para) => {
    para.addEventListener('copy', (event) => {
        alert('Your text has been copied to the clipboard');
    })})

//Use keypress to change background color
const footer = document.querySelector('footer');
const body = document.querySelector('body');
body.addEventListener('keypress', (event) => {
    footer.style.backgroundColor = 'black';
    event.stopPropagation();
})

//make destinations take up whole screen upon mouseover 
const destinations = document.querySelectorAll('div .destination');

destinations.forEach( (targetDestination, targetIndex) => {
    targetDestination.addEventListener('mouseover', (event) => {
        event.currentTarget.style.width = '100%';
        destinations.forEach( (nonTargetDestination, nonTargetIndex) => {
            if (targetIndex != nonTargetIndex) {
                nonTargetDestination.style.display = 'none';
            }
        })
        event.stopPropagation(); 
    })
})


