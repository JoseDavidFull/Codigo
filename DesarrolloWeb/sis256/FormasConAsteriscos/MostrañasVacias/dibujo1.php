<?php
	include('pagina.php');
	include('Dibujo2.php');

	$p= new pagina();
	$n = $_POST['n'];	 
	$Dib= new Dibujo2($n);
	
	$p->cabeza();
	$p->h1("Dibujo");
	$Dib->mostrar();
	$p->pie();

?>