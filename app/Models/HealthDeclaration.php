<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class HealthDeclaration extends Model
{
	use SoftDeletes;

	protected $fillable = [
		'first_name',
		'middle_name',
		'last_name',
		'suffix',
		'gender',
		'age',
		'body_temp',
		'diagnosed',
		'encountered',
		'vaccinated',
		'nationality',
		'email',
		'mobile_number',
		'telephone_number',
	];

	protected $casts = [
		'created_at' => 'datetime',
		'updated_at' => 'datetime',
		'deleted_at' => 'datetime',
	];

	// CUSTOM FUNCTIONS
	public function getName($include_middle = false): string {
		return $this->first_name . ($include_middle ? " {$this->middle_name} " : " ") . $this->last_name;
	}
}