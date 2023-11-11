<?php
	class Pagina{
		public function cabeza(){
            $p = new Pagina();
			echo"<!doctype html>
				<html>
					<head>
					<title>Forma Letra A</title>
					</head>
				</body>";
		}
		public function	pie(){
			echo "</body></html>";
		}
		public function	iniform($nombre,$url){
			echo "<form name='$nombre' method='POST' action='$url'>";
		}
		public function	finform(){
			echo "</form>";
		}
		
		public function	caja($nombre,$valor){
			echo "<input type='text' name='$nombre' id='$nombre' value='$valor'></br>";
		
		}
				
		public function	cajah($nombre,$valor){
			echo "<input type='hidden' name='$nombre' id='$nombre' value='$valor'></br>";
		}
		public function	botons($enviar){
			echo "<input type='submit' value='enviar'></br>";
		}
		public function br(){
			echo "</br>";
		}
		public function h1($mensaje){
			echo "<h1>".$mensaje."</h1>";
		}
		
	}
?>
