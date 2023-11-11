<?php
	include('Pagina.php');

	$p = new Pagina ();
	
	$p->cabeza();
	$p->iniform("midibujo","Dibujo2.php");
	$p->h1("dibujar cuadrados");

		echo "N: ";	$p->caja("n",""); $p->br();	

	$p->botons("dibujar");
	$p->finform();
	$p->pie();
?>