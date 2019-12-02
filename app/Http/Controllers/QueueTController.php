<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Log;
use App\Jobs\ProcessTestQueue;

class QueueTController extends Controller
{
	private $shape;

	public function __construct(\App\Shapes\ShapesTemplate $shape) {
		$this->shape = $shape;
	}

    public function createQueue(Request $request) {
    	$this->shape->incrementCnt();
    	Log::debug("Pre Dispatch " . $this->shape->getCount());
    	ProcessTestQueue::dispatch($this->shape);
    	$this->shape->incrementCnt();
    	Log::debug("Post Dispatch " . $this->shape->getCount());
    	return response()->json(["status" => "okay"]);
    }
}
