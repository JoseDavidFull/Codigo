<?php
	include('Pagina.php');
	include('Dibujo2.php');
	
	$p = new Pagina();
	$p->cabeza();
	$p->h1("Letra N");
	$p->iniform("miinform", "index.php");
	echo "N: ";	
	$p->caja("N", ""); 
	$p->br();
	$p->botons("resolver");
	$p->finform();
	
	if(isset($_POST['N'])) {
		$n = $_POST['N'];
		$ecu = new Dibujo2();
		$ecu->dibujo($n);
	}
	
	$p->pie();
?>
