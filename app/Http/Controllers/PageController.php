<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PageController extends Controller {
	// FALLBACK
	protected function fallback() {
		return redirect()
			->route('home');
	}
	
	// UNAUTHENTICATED
	protected function index() {
		return view("index");
	}

	protected function tracker() {
	}

	// AUTHENTICATED - ADMIN
	protected function redirectDashboard() {
		return redirect()
			->route('admin.dashboard');
	}

	protected function dashboard() {
		return view("admin.dashboard");
	}
}