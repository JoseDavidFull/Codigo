<?php
    class Dibujo2 {
        private $n;
        public function dibujo($n) {
            $this->n = $n;
            $mitad = ($this->n/2) + 0.5;
            for($i=0; $i<=$this->n-1; $i++) {
                echo "_";
            }
            echo "* <br>";
            $aux = $this->n-1; 
            $esp = 0;
            for($i=0; $i<=$this->n-1; $i++) {
                if ($i != $mitad) { 
                    $aux--;
                    for($j=0; $j<=$aux; $j++) {
                        echo "_";
                    }
                    echo "*";
                    if($i < $mitad) {
                        for($j=0; $j<=$esp; $j++) {
                            echo "_";
                        }
                    } else {
                        for($j=0; $j<=$esp; $j++) {
                            echo "_";
                        }
                    }
                    echo "* <br>";
                    $esp += 2;
                }
            }
        }
    }
?>

