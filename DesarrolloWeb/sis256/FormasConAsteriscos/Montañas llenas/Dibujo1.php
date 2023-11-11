<?php
	include('Pagina.php');

		$p= new Pagina();
		
		$p->cabeza();
		$p->iniform("midibujo","objmv.php");
		$p->h1("GRAFICAR MONTANAS VACIAS");

			echo "N: ";	
			$p->caja("n",""); 
			$p->br();	

		$p->botons("HAGA CLICK");
		$p->finform();
		$p->pie();
?>