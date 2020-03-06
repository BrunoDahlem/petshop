function mudaImg () {
    var newImg = this.src;
    var caminho = document.querySelectorAll('#imgPrinc')[0];
    caminho.src = newImg;
    nomes.innerHTML = this.alt;
}

var minis = document.querySelectorAll('.miniaturas img')
for (var pos = 0; pos < minis.length;pos++){
    minis[pos].onclick = mudaImg;
    minis[pos].onmouseover = mudaImg;
}
var nomes = document.querySelectorAll('#nome')[0];