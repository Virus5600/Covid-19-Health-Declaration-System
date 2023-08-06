<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Models\HealthDeclaration;

class DeclarationController extends Controller
{
	protected function index() {
		$declarations = HealthDeclaration::get();

		return view("admin.declarations.index", [
			"declarations" => $declarations
		]);
	}

	protected function show($uuid) {
		return redirect()
			->back()
			->with("flash_info", "Currently work in progress (WIP)");
	}
}