let k = 0;

function showBar() {
    const sidebar = document.querySelector('.sidebar');
    const lAr = document.querySelector('#lArea'); 
    sidebar.style.display = 'flex';
    k = k + 1;
    if (k == 0) {
        lAr.style.display = 'none';
    }else{
        lAr.style.display = 'block';
    }
}

function hideBar() {
    const sidebar = document.querySelector('.sidebar');
    const lAr = document.querySelector('#lArea'); 
    sidebar.style.display = 'none';
    k = k - 1;
    if (k == 0) {
        lAr.style.display = 'none';
    }else{
        lAr.style.display = 'block';
    }
}

let loader = document.getElementById('preloader');
window.addEventListener("load", function () {
    loader.style.display = "none";
});
