<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Redis;
use App\Events\QueuePost;
use App\Http\Middleware\CheckAccess;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/new-user', 'UserController@createUser');
Route::post('/login-user', 'UserController@loginUser');
Route::post('/create-test-queue', 'QueueTController@createQueue');
Route::middleware(['auth', CheckAccess::class])->post('/publish', function(Request $request) {
	/*
	*** This can bypass queue system ***
	Redis::publish('test-channel', json_encode(['event' => 'TEST', 'data' => (object)['key1' => 1234, 'key2' => "STRING!"]]));
	*/
	Log::debug("Global User Publishing: " . json_encode((array)Auth::user()));
	/*Log::debug("Request User Publishing: " . $request->user()->getAuthIdentifier());*/
	event(new QueuePost());
	return response()->json(["status" => "okayPub"]);
});;