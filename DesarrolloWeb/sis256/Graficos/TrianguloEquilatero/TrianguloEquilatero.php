<?php
class TrianguloEquilatero {
    var $img;
    public function dibujar() {
        $this->img = imagecreate(666, 666);
        imagecolorallocate($this->img, 73, 206, 211); 
        for($i = 20; $i <= 100; $i += 2) {
            $color_borde = imagecolorallocate($this->img,30+$i*2,30+$i*2,30+$i*2);
            $base = 300 + $i; 
            $x1 = 330;
            $y1 = 100 + $i; 
            $x2 = $x1 - $base / 2; 
            $y2 = $y1 + $base * sqrt(3) / 2; 
            $x3 = $x1 + $base / 2; 
            $y3 = $y1 + $base * sqrt(3) / 2;
            imageline($this->img, $x1, $y1, $x2, $y2, $color_borde); 
            imageline($this->img, $x2, $y2, $x3, $y3, $color_borde);
            imageline($this->img, $x3, $y3, $x1, $y1, $color_borde); 
        }

        header("Content-type: image/png");
        imagepng($this->img);
        imagedestroy($this->img);
        exit;
    }
}

$triangulo = new TrianguloEquilatero();
$triangulo->dibujar();
?>
 
