<?php
class Dibujo2{
	private $n;
	public function __construct($n){
			$this->n=$n;
			}
			public function setN($n){$this->n=$n;}
			public function getN($n){return $this->n;}
	
		public function mostrar(){
			
				$mitad=($this->n/2)+0.5;
			
				for($i=1; $i<=$this->n-1; $i++){
					echo "_";
				}
				echo "*";
				
				$esp2 = $this->n*2-3;
				
				for ($i=1; $i<=$this->n-1; $i++){
					for($j=1; $j<=$esp2; $j++){
					echo "_";
					}
					echo "*";
				}
				echo "<br>";
				$aux=$this->n-1; $esp=1;
			
				for($i=1; $i<=$this->n-2; $i++){
					$aux--;
					$esp2-=2;
					for($j=1; $j<=$aux; $j++){
						echo "_";
					}
					for($k=1; $k<=$this->n; $k++){
						echo "*";					
						for($l=1; $l<=$esp; $l++){
							echo"_";
						}					
						echo"*";
						for($m=1; $m<=$esp2; $m++){
							echo"_";
						}					
					}
					echo"<br>";					
					$esp+=2;
					
				}	
				for($k=1; $k<=$this->n; $k++){											
						echo"*";
						for($m=1; $m<=$esp; $m++){
							echo"_";
						}					
					}
					echo"*<br>";
		} 
}
?>
