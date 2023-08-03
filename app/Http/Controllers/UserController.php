<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class UserController extends Controller {
	//* ----- AUTHENTICATION RELATED ----- *//

	protected function login() {
		return view("login");
	}

	protected function register() {
	}

	protected function submit(Request $req) {
	}

	//* ----- AUTHENTICATION RELATED END ----- *//
}