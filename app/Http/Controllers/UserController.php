<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
	function usernameAvailable($username): bool {
		$dbResults = DB::select("SELECT * from users where username='" . $username . "'");
		return (count($dbResults) == 0);
	}

    public function createUser(Request $request) {
    	$data = $request->input();
    	$result = false;
    	$error = "";

    	if ($this->usernameAvailable($data["username"])) {
    		$passwordhash = Hash::make($data["password"]);
    		DB::insert("INSERT INTO users (username, password) VALUES ('" . $data["username"] . "','" . $passwordhash . "')");
    		$result = true;
    		Log::debug("Created Username: " . $data["username"]);
    	} else {
    		$error = "Name already taken"
			Log::debug("Could not create username: " . $data["username"]);
    	}

		return response()->json(["result" => $result, "error" => $errorMsg]);
    }
}