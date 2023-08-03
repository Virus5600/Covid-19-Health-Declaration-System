<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

//* ----- GENERAL ----- *//

// INDEX
Route::get("/", "PageController@index")->name('home');

// DECLARE (FORM)
Route::group(["prefix" => "declare"], function() {
	// Form Index
	Route::get("/", "DeclarationController@index")->name("declare");

	// Form Submit
	Route::post("/submit", "DeclarationController@submit")->name("declare.submit");
});

// TRACKER
Route::get("/tracker", "PageController@tracker")->name("tracker");

//* ----- GENERAL END ----- *//



//*  -----UNAUTHENTICATED ----- *//

Route::group(["middleware" => ["guest"]], function() {
	// AUTHENTICATION - LOGIN
	Route::get("/login", "UserController@login")->name("login");

	// AUTHENTICATION - REGISTER
	Route::group(["prefix" => "register"], function() {
		// Form Index
		Route::get("/", "UserController@register")->name("register");

		// Form Submit
		Route::get("/submit", "UserController@submit")->name("register.submit");
	});
});

//*  -----UNAUTHENTICATED END ----- *//



//* ----- AUTHENTICATED ----- *//

Route::group(["middleware" => ["auth"]], function() {
	// ADMIN SIDE
	Route::group(["prefix" => "admin", "middleware" => ["userType:admin"]], function() {
		// Dashboard
		Route::get("/", "PageController@redirectDashboard")->name('admin');
		Route::get("/dashboard", "PageController@dashboard")->name('admin.dashboard');
	});

	// SCHEDULE (FORM)
	Route::group(["prefix" => "schedule"], function() {
		// Form Index
		Route::get("/", "ScheduleController@index")->name("schedule");

		// Form Submit
		Route::post("/submit", "ScheduleController@store")->name("schedule.submit");
	});
});

//* ----- AUTHENTICATED END ----- *//