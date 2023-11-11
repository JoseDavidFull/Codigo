<?php
class Dibujo2 {
private $n;
public function dibujo($n) {
if($n%2==1){
$this->n = $n;
$mitad = ($this->n/2) + 0.5;
for($i=1; $i<=$this->n-1; $i++) {
echo "_";
}
echo "* <br>";
$aux = $this->n-1;
$esp = 1;
for($i=1; $i<=$this->n-1; $i++) {
$aux--;
for($j=1; $j<=$aux; $j++) {
echo "_";
}
echo "*";
if($i == $mitad-1) {
for($j=1; $j<=$esp; $j++) {
echo "*";
}
} else {
for($j=1; $j<=$esp; $j++) {
echo "_";
}
}
echo "* <br>";
$esp += 2;
}
}else{
echo "error, se tiene que ingresa un numero impar y no par";
}
}
}
?>