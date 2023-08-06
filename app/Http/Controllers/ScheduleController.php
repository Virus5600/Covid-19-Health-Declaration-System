<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ScheduleController extends Controller
{
	protected function index() {
		return redirect()
			->back()
			->with("flash_info", "Currently work in progress (WIP)");
	}

	protected function submit() {
		return redirect()
			->back()
			->with("flash_info", "Currently work in progress (WIP)");
	}
}