function MenuShow(){
    let MenuMobile = document.querySelector('.Mobile-Menu')
    if(MenuMobile.classList.contains('open')){
        MenuMobile.classList.remove('open')
        document.querySelector('.Icone').src="Imagens/menu_white_36dp.svg"
    }else{
        MenuMobile.classList.add('open')
        document.querySelector('.Icone').src="Imagens/close_white_36dp (1).svg"
    }
    console.log(MenuMobile)
}
function Clear(){
   
    document.getElementById('InputJS1').value = "";
    document.getElementById('InputJS2').value = "";
}