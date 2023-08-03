<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class UserType
{
	/**
	 * Handle an incoming request.
	 *
	 * @param  \Illuminate\Http\Request  $request
	 * @param  \Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse)  $next
	 * @param  string  $userType
	 * @return \Illuminate\Http\Response|\Illuminate\Http\RedirectResponse
	 */
	public function handle(Request $request, Closure $next, string $userType)
	{
		if (!auth()->check())
			return redirect()
				->intended();

		$user = auth()->user();

		if ($user->userType->name == $userType)
			return $next($request);

		return redirect()
			->intended();
	}
}