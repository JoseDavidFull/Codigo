<?php
    class Ecuacion {
        private $a;
        private $b;
        private $c;

        public function __construct ($a,$b,$c) {
            $this->a = $a;
            $this->b = $b;
            $this->c = $c;
        }

        public function setA ($a) {$this->a = $a;}
        public function getA ($a) {return $this->a;}

        public function setB ($b) {$this->b = $b;}
        public function getB ($b) {return $this->b;}

        public function setC ($c) {$this->c = $c;}
        public function getC ($c) {return $this->c;}

        private function d() {
            return ($this->b*$this->b)-(4*$this->a*$this->c);
        }

        public function soluciones() {
            if ($this->d()==0) {
                $x1 = -$this->b/(2*$this->a);
                $x2 = $x1;
                echo "Raices iguales x1 = x2 = $x1";
            } else {
                if ($this->d()>0) {
                    $x1 = (-$this->b+sqrt($this->d()))/(2*$this->a);
                    $x2 = (-$this->b-sqrt($this->d()))/(2*$this->a);
                    echo "x1 = $x1, x2 = $x2";
                } else {
                    $preal = -$this->b/(2*$this->a);
                    $pimag = sqrt(abs($this->d()))/(2*$this->a);
                    echo "x1 = $preal + $pimag i , ";
                    echo "x2 = $preal - $pimag i";
                }
            }
        }
    }
?>