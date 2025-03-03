// Nav
let menuList = document.getElementById("menuList");
let menuIconOpen = document.getElementById("openListIcon")
let menuIconClose = document.getElementById("closeListIcon")

if (window.matchMedia("(max-width:767px)").matches) {
    function openMenu() {
    if(menuList.style.clipPath = "inset(0% 0% 100% 0%)") {
        menuList.style.clipPath = "inset(0% 0% 0% 0%)"
        menuIconOpen.style.fontSize = "0px"
        menuIconClose.style.fontSize = "28px"
        document.body.style.overflowY = "hidden"
    }   
}
function closeMenu() {
    if(menuList.style.clipPath = "inset(0% 0% 0% 0%)") {
        menuList.style.clipPath = "inset(0% 0% 100% 0%)"
        menuIconOpen.style.fontSize = "26px"
        menuIconClose.style.fontSize = "0px"
        document.body.style.overflowY = "auto"
    }     
}




function liclickB() {
    menuList.style.clipPath = "inset(0% 0% 100% 0%)"
        menuIconOpen.style.fontSize = "26px"
        menuIconClose.style.fontSize = "0px"
        document.body.style.overflowY = "auto"
}

}







// Slider title btn

// function bckg() {
//     document.body.style.backgroundImage = `url(imgs/img1.jpg)`;
// }
// bckg()


let slides = document.querySelectorAll(".slides .slide");
let slideIndex = 0;
let intervalId = null;


// initialzeSlider()
document.addEventListener("DOMContentLoaded", initialzeSlider)

function initialzeSlider() {

    if(slides.length > 0) {
        slides[slideIndex].classList.add("displaySlide");
        intervalId = setInterval(nextSlide, 7500);
    }
    
}

function showSlide(index) {

    if(index >= slides.length) {
        slideIndex = 0;
    }else if(index < 0) {
        slideIndex = slides.length - 1;
    }
    slides.forEach(slide => {
        slide.classList.remove("displaySlide");
    });
    slides[slideIndex].classList.add("displaySlide");
}



function nextSlide() {
    slideIndex++; 
    showSlide(slideIndex);
}







// Filter Foods Menu
let mainMenu = `<div id="AllFoodsAndPrices" >
            <hr>
            <div id="foodAndPrice" >
                <h2 class="foodName" >Herb-Crusted Rack of Lamb</h2>
                <p class="foodPrice" >$38</p>
            </div>
            <hr>
            <div id="foodAndPrice" >
                <h2 class="foodName" >Pan-Seared Pacific Salmon</h2>
                <p class="foodPrice" >$28</p>
            </div>
            <hr>
            <div id="foodAndPrice" >
                <h2 class="foodName" >Table Burger</h2>
                <p class="foodPrice" >$15</p>
            </div>
            <hr>
            <div id="foodAndPrice" >
                <h2 class="foodName" >Roasted Butternut Squash Risotto</h2>
                <p class="foodPrice" >$22</p>
            </div>
            <hr>
            <div id="foodAndPrice" >
                <h2 class="foodName" >Braised Short Ribs</h2>
                <p class="foodPrice" >$30</p>
            </div>   
            <hr>
        </div>`

        let saladsMenu = `<div id="AllFoodsAndPrices" >
            <hr>
            <div id="foodAndPrice" >
                <h2 class="foodName" >Caesar Salad</h2>
                <p class="foodPrice" >$12</p>
            </div>
            <hr>
            <div id="foodAndPrice" >
                <h2 class="foodName" >Greek Salad</h2>
                <p class="foodPrice" >$14</p>
            </div>
            <hr>
            <div id="foodAndPrice" >
                <h2 class="foodName" >Caprese Salad</h2>
                <p class="foodPrice" >$13</p>
            </div>
            <hr>
            <div id="foodAndPrice" >
                <h2 class="foodName" >Kale & Quinoa Salad</h2>
                <p class="foodPrice" >$15</p>
            </div>   
            <hr>
        </div>`

        let soupsMenu = `<div id="AllFoodsAndPrices" >
        <hr>
        <div id="foodAndPrice" >
            <h2 class="foodName" >Tomato Basil Soup</h2>
            <p class="foodPrice" >$10</p>
        </div>
        <hr>
        <div id="foodAndPrice" >
            <h2 class="foodName" >French Onion Soup</h2>
            <p class="foodPrice" >$12</p>
        </div>
        <hr>
        <div id="foodAndPrice" >
            <h2 class="foodName" >Spicy Pumpkin Soup</h2>
            <p class="foodPrice" >$11</p>
        </div>
        <hr>
        <div id="foodAndPrice" >
            <h2 class="foodName" >Creamy Mushroom Soup</h2>
            <p class="foodPrice" >$11</p>
        </div>
        <hr>
        <div id="foodAndPrice" >
            <h2 class="foodName" >Lobster Bisque</h2>
            <p class="foodPrice" >$16</p>
        </div>   
        <hr>
    </div>`

    let pastasMenu = `<div id="AllFoodsAndPrices" >
    <hr>
    <div id="foodAndPrice" >
        <h2 class="foodName" >Spaghetti Carbonara</h2>
        <p class="foodPrice" >$20</p>
    </div>
    <hr>
    <div id="foodAndPrice" >
        <h2 class="foodName" >Penne Arrabbiata</h2>
        <p class="foodPrice" >$18</p>
    </div>
    <hr>
    <div id="foodAndPrice" >
        <h2 class="foodName" >Truffle Mushroom Fettuccine</h2>
        <p class="foodPrice" >$22</p>
    </div>
    <hr>
    <div id="foodAndPrice" >
        <h2 class="foodName" >Fettuccine Alfredo</h2>
        <p class="foodPrice" >$22</p>
    </div>
    <hr>
    <div id="foodAndPrice" >
        <h2 class="foodName" >Seafood Linguine</h2>
        <p class="foodPrice" >$25</p>
    </div>   
    <hr>
</div>`

let grillMenu = `<div id="AllFoodsAndPrices" >
            <hr>
            <div id="foodAndPrice" >
                <h2 class="foodName" >Grilled Ribeye Steak</h2>
                <p class="foodPrice" >$35</p>
            </div>
            <hr>
            <div id="foodAndPrice" >
                <h2 class="foodName" >BBQ Baby Back Ribs</h2>
                <p class="foodPrice" >$28</p>
            </div>
            <hr>
            <div id="foodAndPrice" >
                <h2 class="foodName" >Smoked Brisket Plate</h2>
                <p class="foodPrice" >$30</p>
            </div>
            <hr>
            <div id="foodAndPrice" >
                <h2 class="foodName" >Grilled Lamb Chops</h2>
                <p class="foodPrice" >$32</p>
            </div>   
            <hr>
        </div>`

        let dessertsMenu = `<div id="AllFoodsAndPrices" >
        <hr>
        <div id="foodAndPrice" >
            <h2 class="foodName" >New York Cheesecake</h2>
            <p class="foodPrice" >$10</p>
        </div>
        <hr>
        <div id="foodAndPrice" >
            <h2 class="foodName" >Chocolate Lava Cake</h2>
            <p class="foodPrice" >$12</p>
        </div>
        <hr>
        <div id="foodAndPrice" >
            <h2 class="foodName" >Tiramisu</h2>
            <p class="foodPrice" >$11</p>
        </div>
        <hr>
        <div id="foodAndPrice" >
            <h2 class="foodName" >Caramelized Banana Cheesecake</h2>
            <p class="foodPrice" >$14</p>
        </div>
        <hr>
        <div id="foodAndPrice" >
            <h2 class="foodName" >Crème Brûlée</h2>
            <p class="foodPrice" >$10</p>
        </div>   
        <hr>
    </div>`


let AllFoodsAndPrices = document.getElementById("AllFoodsAndPrices");

let main = document.getElementById("main");
let salads = document.getElementById("salads");
let soups = document.getElementById("soups");
let pastas = document.getElementById("pastas");
let grillBarb = document.getElementById("grillBarb");
let desserts = document.getElementById("desserts");
let AllFillterFoodsID = document.getElementById("AllFillterFoodsID")

function resetColors() {
    main.style.color = "rgba(0, 0, 0, 0.762)";
    salads.style.color = "rgba(0, 0, 0, 0.762)";
    soups.style.color = "rgba(0, 0, 0, 0.762)";
    pastas.style.color = "rgba(0, 0, 0, 0.762)";
    grillBarb.style.color = "rgba(0, 0, 0, 0.762)";
    desserts.style.color = "rgba(0, 0, 0, 0.762)";
}


function Fltr1() {
    AllFoodsAndPrices.innerHTML = mainMenu;
    resetColors();
    main.style.color = "Brown"
}
function Fltr2() {
    AllFoodsAndPrices.innerHTML = saladsMenu;
    resetColors();
    salads.style.color = "Brown"
}
function Fltr3() {
    AllFoodsAndPrices.innerHTML = soupsMenu;
    resetColors();
    soups.style.color = "Brown"
    
}
function Fltr4() {
    AllFoodsAndPrices.innerHTML = pastasMenu;
    resetColors();
    pastas.style.color = "Brown"
}
function Fltr5() {
    AllFoodsAndPrices.innerHTML = grillMenu;
    resetColors();
    grillBarb.style.color = "Brown"
}
function Fltr6() {
    AllFoodsAndPrices.innerHTML = dessertsMenu;
    resetColors();
    desserts.style.color = "Brown"
}








// Gallery Slide


let slidesGlr = document.querySelectorAll(".gallerySlides .slideGallery");
let slideIndexGlr = 0;
let intervalIdGlr = null;


// initialzeSlider()
document.addEventListener("DOMContentLoaded", initialzeSliderGlr)

function initialzeSliderGlr() {

    if(slidesGlr.length > 0) {
        slidesGlr[slideIndexGlr].classList.add("displaySlideGlr");
        intervalIdGlr = setInterval(nextSlideGlr, 4500);
    }
    
}

function showSlideGlr(indexGlr) {

    if(indexGlr >= slidesGlr.length) {
        slideIndexGlr = 0;
    }else if(indexGlr < 0) {
        slideIndexGlr = slidesGlr.length - 1;
    }
    slidesGlr.forEach(slideGlr => {
        slideGlr.classList.remove("displaySlideGlr");
    });
    slidesGlr[slideIndexGlr].classList.add("displaySlideGlr");
}

function prevSlideGlr() {
    slideIndexGlr--;
    showSlideGlr(slideIndexGlr);
}

function nextSlideGlr() {
    slideIndexGlr++; 
    showSlideGlr(slideIndexGlr);
}








// Contact
let fName = document.getElementById("fName");
let lName = document.getElementById("lName");
let email = document.getElementById("email");
let subject = document.getElementById("subject");
let num = document.getElementById("num");
let msg = document.getElementById("msg");



function clearInput() {
    fName.value = "";
    lName.value = "";
    email.value = "";
    subject.value = "";
    num.value = "";
    msg.value = "";
}





// Footer Email Btn
let inputGmailFooter = document.getElementById("inputGmailFooter");

function clearInputEmail() {
    inputGmailFooter.value = "";
}


