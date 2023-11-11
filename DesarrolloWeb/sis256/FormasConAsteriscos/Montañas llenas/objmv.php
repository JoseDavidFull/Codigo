<?php
	include('pagina.php');
	include('Montanasvac.php');

		$n = $_POST['n'];	 

	$p = new Pagina(); 
	$Dib = new Montanasvac($n);
	$p->cabeza();
	$p->h1("DIBUJO");
	$Dib->dibujar();
	$p->pie();
?>