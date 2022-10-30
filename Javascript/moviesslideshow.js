let movies =[
    "MEDIA/poster1.png",
    "MEDIA/poster2.png",
    "MEDIA/poster3.png",
    "MEDIA/poster4.png",
    "MEDIA/poster5.png",
    "MEDIA/poster6.png",
    "MEDIA/poster7.png",
    "MEDIA/poster8.png",
    "MEDIA/poster9.png",
    "MEDIA/poster10.png",
    "MEDIA/poster11.png",
    "MEDIA/poster12.png",
    "MEDIA/poster13.png",
    "MEDIA/poster14.png",
    "MEDIA/poster15.png",
    "MEDIA/poster16.png",
    "MEDIA/poster17.png",
    "MEDIA/poster18.png",
    "MEDIA/poster19.png",
    "MEDIA/poster20.png",
    "MEDIA/poster21.png",
    "MEDIA/poster22.png",
    "MEDIA/poster23.png",
    "MEDIA/poster24.png",
];


let index = 0;
const slideshow = document.getElementById("slideshow")

function slideshow_movies(){
     if (index == movies.length-1){
         index = 0;
     } else {
         index = index + 1;
     }
     slideshow.src=movies[index];
     setTimeout(slideshow_movies,2000)
}
