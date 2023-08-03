<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class UserType extends Model
{
	protected $fillable = [
		"display_name",
		"name",
	];

	// RELATIONSHIPS
	public function user() { return $this->hasMany("App\User"); }
}