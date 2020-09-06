about = document.getElementsByClassName('about');
portfolio = document.getElementsByClassName('portfolio');
ask_me = document.getElementsByClassName('ask-me');

function nextImage(){
    var img1 = document.getElementById('image1')
    var img2 = document.getElementById('image2')
    var img3 = document.getElementById('image3')
    var img4 = document.getElementById('image4')
    var main = document.getElementById('main').getElementsByTagName('img')[0]

    if(main.src == img1.src){
        main.src = img2.src;
        main.id = img2.id;
    }
    else if(main.src == img2.src){
        main.src = img3.src;
        main.id = img3.id;  
    }
    else if(main.src == img3.src){
        main.src = img4.src;
        main.id = img4.id;
    }

}
function backImage(){
    var img1 = document.getElementById('image1')
    var img2 = document.getElementById('image2')
    var img3 = document.getElementById('image3')
    var img4 = document.getElementById('image4')
    var main = document.getElementById('main').getElementsByTagName('img')[0]
    
    if(main.src == img4.src){
        main.src = img3.src;
        main.id = img3.id;
        
    }
    else if(main.src == img3.src){
        main.src = img2.src;
        main.id = img2.id;
        
    }
    else if(main.src == img2.src){
        main.src = img1.src;
        main.id = img1.id;
    }

}

function goTo(name){
    name[0].scrollIntoView()
}