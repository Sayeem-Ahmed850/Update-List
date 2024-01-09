function Open() {
    let lodar = document.getElementById('icon');
    lodar.style.display = 'block';
    let a = document.getElementById('lodar');
    a.style.animation = 'lodar 2s infinite'


    setTimeout(() => {
        let x = document.getElementById('border');
        let button = document.getElementById('btn');
        x.style.display = 'block'
        button.style.display = 'none'
        lodar.style.display = 'none';
        let text = document.getElementById('h2');
        text.style.display = 'none'
    }, 9000);

}