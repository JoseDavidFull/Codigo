<?php
    class NCuadrados {
        var $img;
        var $n;

        public function __Construct($n) {
            $this->n=$n;
        }

        public function setN($n) {$this->n=$n;}
        public function getN($n) {return $this->n;}

        public function dibujar () {
            $this->img = imagecreate (500,500);
            imagecolorallocate ($this->img,255,255,255);

            for ($i=1; $i<=$this->n; $i++) {
                $color_borde=imagecolorallocate($this->img, 100+$i, 120+$i, 13+$i);
                imagerectangle($this->img, 10+$i+5, 10+$i+5, $i*100, $i*100, $color_borde);
            }

            header ("Content-type: image/png");
            imagepng ($this->img);
            imagedestroy ($this->img);
            exit;
        }
    }
?>