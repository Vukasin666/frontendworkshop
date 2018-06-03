function zbir () {

    var broj1 = document.getElementById('br1').value;
    var broj2 = document.getElementById('br2').value;

    var zbir = parseInt(broj1) + parseInt(broj2);

    console.log(broj1);
    console.log(broj2);
    document.getElementById('br3').value = zbir;
    console.log(zbir);
}