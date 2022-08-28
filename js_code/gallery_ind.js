let opneImgIndex = 1;
let numOfImg = document.getElementsByClassName('inf-content').length;

let hrf = document.location.href;
console.log(hrf);
opneImgIndex = Number(hrf[hrf.length - 1]) + 10 * Number(hrf[hrf.length - 2]);
console.log(opneImgIndex);
// url proccesing

let infContent = document.querySelector('.inf-content[data-num=\"' + opneImgIndex + '\"]');
let opmeImg = document.querySelector('img[data-num=\"' + opneImgIndex + '\"]');
console.log(opmeImg)

changeImg(opneImgIndex);

function changeImg(newIndex){
    let infList = document.getElementsByClassName('inf-content');
    let imgList = document.getElementsByClassName('large-img');

    for (let i=0; i < infList.length; i++){
        infList[i].style.display = 'none';
        imgList[i].style.display = 'none';
    }

    infList[newIndex - 1].style.display = 'block';
    imgList[newIndex - 1].style.display = 'inline';

    opneImgIndex = newIndex;
}

function leftImg(){
    if (opneImgIndex > 1){
        changeImg(opneImgIndex - 1);
    }
    else {
        changeImg(numOfImg);
    }
}

function rightImg(){
    if (opneImgIndex < numOfImg){
        changeImg(opneImgIndex + 1);
    }
    else {
        changeImg(1);
    }
}
