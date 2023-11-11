<?php
    include('Pagina.php');
    include('rombo.php');
    $p= new Pagina();
    $n = $_POST['n'];
    $d = new Dibujo($n);
    $p-> cabeza();
    $p->h1("Dibujo Rombo");
    $d-> dibujo();
    $p->pie();
?>