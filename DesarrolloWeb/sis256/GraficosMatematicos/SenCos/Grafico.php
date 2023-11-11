<?php
	class Grafico{
		var $img; 
			private function funx($x){
				return 1/tan($x);//secante
			}
			public function dibujar(){
				$ancho=500;
				$alto=500;
				$this->img = imagecreate(500,500);
				imagecolorallocate($this->img,255,255,0);
		
				$color_borde=imagecolorallocate($this->img,50, 180,250);

				imageline($this->img,0,$alto/2,$ancho,$alto/2,$color_borde);
				imageline($this->img,$ancho/2,0,$ancho/2,$alto,$color_borde);
				$infx=-50;
				$supx=50;
				$infy=-50;
				$supy=50;

					for($i=$infx; $i<=$supx; $i+=0.01){
						$y=$this->funx($i);
					
					$xt=(($i-$infx)/($supx-$infx))*$ancho;
					$yt=$alto-((($y-$infy)/($supy-$infy))*$alto);
					
					imageline($this->img,$xt,$yt,$xt,$yt, $color_borde);
					}
										
			
				header("Content-type: image/png");
				imagepng($this->img);
				imagedestroy($this->img);
				exit;
			}
		}
	
?>