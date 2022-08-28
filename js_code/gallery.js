let imgContainers = document.getElementsByClassName('img-con');

for (let i = 0; i < imgContainers.length; i++){
    imgContainers[i].addEventListener('click', evt => {
        let bigId = evt.currentTarget.getAttribute('data-big-img');
        let bigImg = document.getElementById(bigId);

        bigImg.showModal();

        let closeModal = document.querySelector('dialog[open] .close-img');
        closeModal.addEventListener('click', evt => {
            let openModal = document.querySelector('dialog[open]');
            if (openModal != null){
                openModal.close();
            }
        }, {once: true});

        let openModal = document.querySelector('dialog[open]');
        openModal.addEventListener('click', evt => {
            if (evt.target.nodeName == 'DIALOG'){
                openModal.close();
            }
        })
    });
};