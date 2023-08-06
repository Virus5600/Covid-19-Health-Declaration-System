<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Validation\Rule;

use App\Models\HealthDeclaration;

use DB;
use Exception;
use Log;
use Validator;

class DeclarationController extends Controller
{
	protected function index() {
		return view("declare");
	}

	protected function store(Request $req) {
		$validator = Validator::make($req->all(), [
			"first_name" => ["required", "string", "max:255"],
			"middle_name" => ["nullable", "string", "max:255"],
			"last_name" => ["required", "string", "max:255"],
			"suffix" => ["nullable", "string", "max:255"],
			"age" => ["required", "numeric", "max:1000"],
			"nationality" => ["required", "string", "max:255", Rule::in(HealthDeclaration::nationality())],
			"body_temp" => ["required", "numeric", "between:-999.9,999.9"],
			"diagnosed" => ["required", "string", "between:2,3", Rule::in(HealthDeclaration::boolOpt())],
			"encountered" => ["required", "string", "between:2,3", Rule::in(HealthDeclaration::boolOpt())],
			"vaccinated" => ["required", "string", "between:2,3", Rule::in(HealthDeclaration::boolOpt())],
			"email" => ["nullable", "email", "string", "max:255"],
			"mobile_number" => ["required", "numeric", "regex:/^\d{10}$/"],
			"telephone_number" => ["nullable", "numeric", "regex:/^\d{7,8}$/"],
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
			"age.required" => "Age is required",
			"age.numeric" => "Age must be a \"number\"",
			"age.max" => "Age must not exceed 1000",
			"nationality.required" => "Nationality is required",
			"nationality.string" => "Nationality must be a valid character",
			"nationality.max" => "Nationality must not exceed 255 characters",
			"nationality.in" => "Nationality must be in the valid list of nationality",
			"body_temp.required" => "Body Temperature is required",
			"body_temp.numeric" => "Body Temperature must be a \"number\"",
			"body_temp.between" => "Body Temperature must be between -999.99C° to 999.99C°",
			"diagnosed.required" => "Diagnosed section is required",
			"diagnosed.string" => "Please refrain from modifying the form page",
			"diagnosed.between" => "Please refrain from modifying the form page",
			"diagnosed.in" => "Please refrain from modifying the form page",
			"encountered.required" => "Diagnosed section is required",
			"encountered.string" => "Please refrain from modifying the form page",
			"encountered.between" => "Please refrain from modifying the form page",
			"encountered.in" => "Please refrain from modifying the form page",
			"vaccinated.required" => "Diagnosed section is required",
			"vaccinated.string" => "Please refrain from modifying the form page",
			"vaccinated.between" => "Please refrain from modifying the form page",
			"vaccinated.in" => "Please refrain from modifying the form page",
			"email.email" => "Email must be a valid email",
			"email.string" => "Email must be a valid character",
			"email.max" => "Email must not exceed 255 characters",
			"mobile_number.numeric" => "Mobile number must be a \"number\"",
			"mobile_number.regex" => "Mobile number must be 10 digits longt",
			"telephone_number.numeric" => "Telephone number must be a \"number\"",
			"telephone_number.regex" => "Telephone number must be 7 to 8 digits long",
		]);

		if ($validator->fails()) {
			return redirect()
				->back()
				->with("flash_error", "Please re-check your answers...")
				->withErrors($validator)
				->withInput();
		}

		try {
			DB::beginTransaction();

			// Fetch the two masked numbers
			$mn = $req->mobile_number;
			$tn = $req->telephone_number;

			// Format them for readability
			/* MOBILE */
			$mn = preg_replace("/(\d{3})(\d{3})(\d{4})/", "+63 $1 $2 $3", $mn);
			
			/* TELEPHONE */
			$tn = preg_replace(
				strlen($tn) == 7 ? "/(\d{3})(\d{4})/" : "/(\d{4})(\d{4})/",
				"$1-$2",
				$tn
			);

			// Create an row/entry
			HealthDeclaration::create([
				// Personal Info
				"first_name" => $req->first_name,
				"middle_name" => $req->middle_name,
				"last_name" => $req->last_name,
				"suffix" => $req->suffix,
				"sex" => $req->sex,
				"age" => $req->age,
				"nationality" => $req->nationality,

				// Contact Info
				"email" => $req->email,
				"mobile_number" => $mn,
				"telephone_number" => $tn,

				// Health Related
				"body_temp" => $req->body_temp,
				"diagnosed" => $req->diagnosed == "Yes" ? true : false,
				"encountered" => $req->encountered == "Yes" ? true : false,
				"vaccinated" => $req->vaccinated == "Yes" ? true : false,

				// Meta Data
				"uuid" => Str::orderedUuid(),
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
			->back()
			->with("flash_success", "Successfully submitted the form");
	}
}