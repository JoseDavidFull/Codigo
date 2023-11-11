<?php
    include('Pagina.php');
    $p= new Pagina();
    $p-> cabeza();
    $p->h1("Dibujar Rombo");
    $p-> iniform("miform","lab2.php");
    echo "N: "; $p->caja("n"," "); $p->br();
    $p->botons("GRAFICAR");
    $p->finform();
    $p->pie();
?>