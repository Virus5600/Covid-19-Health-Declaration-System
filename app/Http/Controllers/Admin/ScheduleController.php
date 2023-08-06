<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;



class ScheduleController extends Controller
{
	protected function index() {
		return redirect()
			->back()
			->with("flash_info", "Currently work in progress (WIP)");
	}

	protected function show($uuid) {
		return redirect()
			->back()
			->with("flash_info", "Currently work in progress (WIP)");
	}
}