<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    const LOGIN_NOT_FOUND = -1;
    const DUPLICATES = -2;
    const BAD_PASSWORD = -3;

	function usernameAvailable($username): bool {
		$dbResults = DB::select("SELECT * from users where username='" . $username . "'");
		return (count($dbResults) == 0);
	}

    function checkLogin($data): int {
        $dbResults = DB::select("SELECT * from users where username='" . $data["username"] . "'");

        if (count($dbResults) == 0) return self::LOGIN_NOT_FOUND;
        if (count($dbResults) > 1) return self::DUPLICATES;
        if (!Hash::check($data["password"], $dbResults[0]->password)) {
            return self::BAD_PASSWORD;
        }
        return 0;
    }

    public function createUser(Request $request) {
    	$data = $request->input();
    	$result = false;
    	$errorMsg = "";

    	if ($this->usernameAvailable($data["username"])) {
    		$passwordhash = Hash::make($data["password"]);
    		DB::insert("INSERT INTO users (username, password) VALUES ('" . $data["username"] . "','" . $passwordhash . "')");
    		$result = true;
    		Log::debug("Created Username: " . $data["username"]);
    	} else {
    		$errorMsg = "Name already taken";
			Log::debug("Could not create username: " . $data["username"]);
    	}

		return response()->json(["result" => $result, "error" => $errorMsg]);
    }

    public function loginUser(Request $request) {
        $data = $request->input();
        $result = false;
        $errorMsg = "";
        $errCode = $this->checkLogin($data);

        if ($errCode == 0) {
            $result = true;
        } else {
            $errorMsg = "Bad Login";
        }

        return response()->json(["result" => $result, "error" => $errorMsg]);
    }
}