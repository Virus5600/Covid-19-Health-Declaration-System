<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\User;

class UserController extends Controller {
	//* ----- AUTHENTICATION RELATED ----- *//

	protected function login() {
		return view("login");
	}

	protected function authenticate(Request $req) {
		$user = User::where('email', '=', $req->email)->first();

		if ($user == null)
			return redirect()
				->back()
				->with('flash_error', 'Wrong email/password!')
				->withInput(array('email' => $req->email));

		$authenticated = false;
		if (!$user->locked) {
			$authenticated = auth()->attempt([
				'email' => $req->email,
				'password' => $req->password
			]);
		}
		
		if ($authenticated) {
			if ($user) {
				try {
					DB::beginTransaction();
			
					$user->login_attempts = 0;
					$user->last_auth = Carbon::now()->timezone('Asia/Manila');
					$user->save();
			
					DB::commit();
				} catch (Exception $e) {
					DB::rollback();
					Log::error($e);
				}
			}

			$route = $user->isType("admin") ? route('admin.dashboard') : route('home');

			return redirect()
				->intended($route)
				->with('flash_success', 'Logged In!');
		}
		else {
			$msg = "";
			if ($user) {
				try {
					DB::beginTransaction();

					if ($user->login_attempts < 5) {
						$user->login_attempts = $user->login_attempts + 1;
						$msg = 'Wrong email/password!';
					}
					else {
						$user->locked = 1;
						$user->locked_by = User::getIP();
						$msg = 'Exceeded 5 tries, account locked';
					}
					$user->save();
					
					DB::commit();
				} catch (Exception $e) {
					DB::rollback();
					Log::error($e);
				}
			}

			auth()->logout();
			return redirect()
				->back()
				->with('flash_error', $msg)
				->withInput(array('email' => $req->email));
		}
	}

	protected function register() {
	}

	protected function submit(Request $req) {
	}

	//* ----- AUTHENTICATION RELATED END ----- *//
}