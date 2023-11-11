<?php
class Ellipse{
    var $img;
    public function dibujar(){
        $this->img=imagecreate(600,600);
        imagecolorallocate($this->img,0,162,255);//
        for($i=20;$i<=100;$i+=2){
            $color_borde = imagecolorallocate($this->img,20+$i*2,20+$i*2,20+$i*2);
            imageellipse($this->img,80+$i+2,120+$i+2,50+$i+2,50+$i+2,$color_borde);
        }
        header("Content-type: image/png");//
        imagepng($this->img);
        imagedestroy($this->img);
        exit;
    }
}
?>