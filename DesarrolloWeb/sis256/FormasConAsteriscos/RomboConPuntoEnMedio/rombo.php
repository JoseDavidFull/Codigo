<?php
class Dibujo{
    private $n;
    public function __construct($n){
        $this->n = $n;
    }
    
    public function setN($n){
        $this->n = $n;
    }
    
    public function getN(){
        return $this->n;
    }
    public function dibujo(){
        $m = $this->n * 2 - 1;
        $pattern = "";
        for($i = 1; $i <= $this->n-1; $i++){
            for($j = 1; $j <= $m; $j++){
                if($j == $this->n+1-$i || $j == $this->n+$i-1){
                    $pattern .= "*";
                }else{
                    $pattern .= "-";
                }
            }
            $pattern .= "\n";
        }
        for($k=$this->n;$k<=$this->n;$k++){
            for($j = 1; $j <= $m; $j++){
                if($j == $this->n+1-$k || $j == ($this->n+$k)/2 || $j == $this->n+$k-1){
                    $pattern .= "*";
                }else{
                    $pattern .= "-";
                }
            }
            $pattern .= "\n";
        }
        for($i = 2; $i <= $this->n; $i++){
            for($j = 1; $j <= $m; $j++){
                if($j == $i || $j == $m - $i + 1){
                    $pattern .= "*";
                }else{
                    $pattern .= "-";
                }
            }
            $pattern .= "\n";
        }

        echo "<pre>" . $pattern . "</pre>";
    }
}
?>