<?php
	include('Pagina.php');
	$p = new Pagina();
	$p->cabeza();
	$p->h1("Letra N");
	$p->iniform("miinform","Dibujo2.php");
	echo "N: ";	
	$p->caja("N",""); 
	$p->br();
	$p->botons("resolver");
	$p->finform();
	$p->pie();
?>
