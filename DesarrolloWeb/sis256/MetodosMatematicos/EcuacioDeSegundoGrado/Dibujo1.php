<?php
    include("Pagina.php");

    $p = new Pagina();

    $p->cabeza();
    $p->iniform("miform","objec2.php");
    $p->h1("EUACION DE 2do GRADO INICIAR");

        echo "A: "; $p->caja("a",""); $p->br();
        echo "B: "; $p->caja("b",""); $p->br();
        echo "C: "; $p->caja("c",""); $p->br();
    
    $p->botons("HAGA CLICK PARA RESOLVER");
    $p->finform();
    $p->pie();
?>