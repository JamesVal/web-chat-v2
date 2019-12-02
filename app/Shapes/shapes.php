<?php

namespace App\Shapes;

interface ShapesTemplate {
	public function getArea($params);
}

class Square implements ShapesTemplate {
	private $width;
	private $height;
	private $myCount = 0;

	public function __construct() {
		/*
		$this->width = $w;
		$this->height = $h;
		*/
	}

	public function incrementCnt() {
		$this->myCount++;
	}

	public function getCount() {
		return $this->myCount;
	}

	public function getArea($params) {
		/*return ($params["width"] * $params["height"]);*/
		return ($this->width * $this->height);
	}
}

class Circle implements ShapesTemplate {
	public function getArea($params) {
		/*return (M_PI * $params["radius"] * $params["radius"]);*/
		return 0;
	}
}

?>