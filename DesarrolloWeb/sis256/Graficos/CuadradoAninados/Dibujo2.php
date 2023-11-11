<?php

	include('NCuadrados.php');

	$n = $_POST['n'];	 
	$Dib = new NCuadrados ($n);

	$Dib->dibujar();

?>