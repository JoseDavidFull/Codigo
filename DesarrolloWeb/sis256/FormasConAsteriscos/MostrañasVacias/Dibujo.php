<?php
	include('Pagina.php');

	$p= new Pagina();
	
	$p->cabeza();
	$p->iniform("midibujo","dibujo1.php");
	$p->h1("graficar");
	echo "N: ";	$p->caja("n",""); $p->br();	
	$p->botons("dibujar");
	$p->finform();
	$p->pie();

?>