<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Log;
use App\Jobs\ProcessTestQueue;

class QueueTController extends Controller
{
    public function createQueue(Request $request) {
    	ProcessTestQueue::dispatch();
    	return response()->json(["status" => "okay"]);
    }
}
