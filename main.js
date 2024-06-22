const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const array = [
    {
        filename: "images/pic1.jpg",
        alt: "Closeup of a human eye"
    },
    {
        filename: "images/pic2.jpg",
        alt: "A cat sitting on a table"
    },
    {
        filename: "images/pic3.jpg",
        alt: "A scenic view of a mountain range"
    },
    {
        filename: "images/pic4.jpg",
        alt: "A closeup of a flower"
    },
    {
        filename: "images/pic5.jpg",
        alt: "A cityscape at night"
    }

];
/* Looping through images */
array.map((item)=>{
    const newImage = document.createElement('img');
    newImage.src = item.filename;
    newImage.alt = item.alt;
    thumbBar.appendChild(newImage);
    newImage.addEventListener('click', ()=>{
        displayedImage.src = item.filename;
        displayedImage.alt = item.alt;
    });
});


/* Wiring up the Darken/Lighten button */

btn.addEventListener('click', ()=>{
    // console.log(btn.innerText);
    if(btn.innerText === 'Darken'){
        overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
        btn.innerText = 'Lighten';
    } else {
        overlay.style.backgroundColor = 'rgba(0,0,0,0)';
        btn.innerText = 'Darken';
        }
});  // End of button event listener