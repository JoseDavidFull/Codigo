<?php
    include("Pagina.php");
    include("Ecuacion.php");

    $p = new Pagina();

        $a = $_POST['a'];
        $b = $_POST['b'];
        $c = $_POST['c'];

    $ecu = new Ecuacion($a,$b,$c);
    $p->cabeza();
    $p->h1("SOLUCIONES NO NETENDER:");
    $ecu->soluciones();
    $p->pie();
?>