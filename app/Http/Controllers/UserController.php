<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

use App\Models\User;
use App\Models\UserType;

use Carbon\Carbon;

use DB;
use Exception;
use Hash;
use Log;
use Validator;

class UserController extends Controller {
	//* ----- AUTHENTICATION RELATED ----- *//

	protected function login() {
		return view("login");
	}

	protected function authenticate(Request $req) {
		$user = User::where('email', '=', $req->email)->first();

		if ($user == null) {
			return redirect()
				->back()
				->with('flash_error', 'Wrong email/password!')
				->withInput(array('email' => $req->email));
		}

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

	protected function logout() {
		if (auth()->check()) {
			auth()->logout();
			session()->flush();

			return redirect()
				->route('home')
				->with('flash_success', 'Logged out!');
		}

		return redirect()
			->back()
			->with('flash_error', 'Something went wrong, please try again.');
	}

	protected function register() {
		return view("register");
	}

	protected function store(Request $req) {
		$errMsg = "Please re-check your inputs...";
		
		$user = User::where("email", "=", $req->email)
			->first();

		if ($user != null) {
			$errMsg = "An account with similar email is already registered...";
		}

		$validator = Validator::make($req->all(), [
			"first_name" => ["required", "string", "max:255"],
			"middle_name" => ["nullable", "string", "max:255"],
			"last_name" => ["required", "string", "max:255"],
			"suffix" => ["nullable", "string", "max:255"],
			"email" => ["required", "email", "string", "unique:users,email", "max:255"],
			"password" => ["required", "string", "between:8,255", "same:password_confirmation", "confirmed", "regex:/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[\d\x])(?=.*[!@#$%^&*()-=_+\\|;:\'\",.\/?]).*$/"],
			"password_confirmation" => ["required", "same:password"],
		], [
			"first_name.required" => "First name is required",
			"first_name.string" => "First name must be a valid character",
			"first_name.max" => "First name must not exceed 255 characters",
			"middle_name.string" => "Middle name must be a valid character",
			"middle_name.max" => "Middle name must not exceed 255 characters",
			"last_name.required" => "Last name is required",
			"last_name.string" => "Last name must be a valid character",
			"last_name.max" => "Last name must not exceed 255 characters",
			"suffix.string" => "Suffix must be a valid character",
			"suffix.max" => "Suffix must not exceed 255 characters",
			"email.required" => "Email is required",
			"email.email" => "Email must be a valid email",
			"email.string" => "Email must be a valid character",
			"email.unique" => "An account with similar email is already registered",
			"email.max" => "Email must not exceed 255 characters",
			"password.required" => "Password is required",
			"password.string" => "Password must be a valid character",
			"password.between" => "Password must be between 8 to 255 characters long",
			"password.same" => "Password must be the same with confirmed password",
			"password.confirmed" => "Please confirm your password",
			"password.regex" => "Password must contain atleast one (1) uppercase, one (1) lowercase, one (1) number, and one (1) special character",
			"password_confirmation.required" => "Please confirm your password",
			"password_confirmation.same" => "Password does not match confirmed password",
		]);

		if ($validator->fails()) {
			return redirect()
			->back()
			->with("flash_error", $errMsg)
			->withErrors($validator)
			->withInput();
		}

		try {
			DB::beginTransaction();

			$user = User::create([
				// Personal Info
				"first_name" => $req->first_name,
				"middle_name" => $req->middle_name,
				"last_name" => $req->last_name,
				"suffix" => $req->suffix,

				// Credentials
				"email" => $req->email,
				"password" => Hash::make($req->password),

				// Account Info
				"user_type_id" => UserType::where("name", "=", "user")->first()->id,
				"uuid" => Str::orderedUuid()
			]);

			DB::commit();
		} catch (Exception $e) {
			DB::rollback();
			Log::error($e);

			return redirect()
				->back()
				->with("flash_error", "Something went wrong, please try again later.")
				->withInput();
		}

		return redirect()
			->route("home")
			->with("flash_success", "Successfully registered {$user->getName()}");
	}

	//* ----- AUTHENTICATION RELATED END ----- *//

	protected function show() {
		return redirect()
			->back()
			->with("flash_info", "Currently work in progress (WIP)");
	}
}