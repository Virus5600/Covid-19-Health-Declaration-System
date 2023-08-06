<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use Carbon\Carbon;

use App\Models\HealthDeclaration;
use App\Models\User;

use stdClass;

class PageController extends Controller {
	// FALLBACK
	protected function fallback() {
		return redirect()
			->route("home");
	}
	
	// UNAUTHENTICATED
	protected function index() {
		return view("index");
	}

	protected function tracker() {
		return redirect()
			->back()
			->with("flash_info", "Currently work in progress (WIP)");
	}

	// AUTHENTICATED - ADMIN
	protected function redirectDashboard() {
		return redirect()
			->route("admin.dashboard");
	}

	protected function dashboard() {
		$now = now()->timezone("Asia/Manila");
		$monthStart = now()->firstOfMonth();
		$dateFormat = "M d, Y";

		/* SUMMARY CARDS START */
		$summaryCards = array();

		// Health Declarations
		$healthDeclarations = HealthDeclaration::whereDate("created_at", ">=", $monthStart->format($dateFormat))
			->whereDate("created_at", "<=", $now->format($dateFormat))
			->get();

		$hdObj = new stdClass();
		$hdObj->title = "Total Monthly Declarations";
		$hdObj->data = count($healthDeclarations);
		$hdObj->icon = "fas fa-scroll";
		array_push($summaryCards, $hdObj);

		// Users
		$users = User::whereDate("created_at", ">=", $monthStart->format($dateFormat))
			->whereDate("created_at", "<=", $now->format($dateFormat))
			->get();

		$uObj = new stdClass();
		$uObj->title = "Total Monthly Users";
		$uObj->data = count($users);
		$uObj->icon = "fas fa-users";
		array_push($summaryCards, $uObj);
		/* SUMMARY CARDS END */

		/* NEW SCHEDULES START */
		$newSchedules = array();
		/* NEW SCHEDULES END */

		/* LATEST ACTIVITIES START */
		$latestActivities = array();
		/* LATEST ACTIVITIES END */

		/* MONTHLY DECLARATION CHART (For the entire year) START */
		$months = [];
		$monthly_declarations = [];
		$monthly_declarations_pos = [];
		$monthly_declarations_neg = [];

		for ($i = 1; $i <= now()->format("m"); $i++) {
			array_push($months, Carbon::parse(now()->format("Y") . "-" . $i . "-" . now()->format("d"))->format("M"));

			$pos = HealthDeclaration::where("created_at", ">=", Carbon::parse(now()->format("Y") . "-" . $i . "-01"))
				->where("created_at", "<=", Carbon::parse(now()->format("Y") . "-" . $i)->endOfMonth())
				->where("diagnosed", "=", true)
				->count();

			$neg = HealthDeclaration::where("created_at", ">=", Carbon::parse(now()->format("Y") . "-" . $i . "-01"))
				->where("created_at", "<=", Carbon::parse(now()->format("Y") . "-" . $i)->endOfMonth())
				->where("diagnosed", "=", false)
				->count();

			array_push($monthly_declarations_pos, $pos);

			array_push($monthly_declarations_neg, $neg);

			// TOTAL
			array_push($monthly_declarations, ($pos + $neg));
		}
		/* MONTHLY DECLARATION CHART (For the entire year) END */

		return view("admin.dashboard", [
			"summaryCards" => $summaryCards,
			"newSchedules" => $newSchedules,
			"latestActivities" => $latestActivities,
			"months" => $months,
			"monthlyDeclarations" => $monthly_declarations,
			"monthlyDeclarationsPos" => $monthly_declarations_pos,
			"monthlyDeclarationsNeg" => $monthly_declarations_neg,
		]);
	}
}