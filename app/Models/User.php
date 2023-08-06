<?php

namespace App\Models;

use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
	use Notifiable, SoftDeletes;

	protected $fillable = [
		'first_name',
		'middle_name',
		'last_name',
		'suffix',
		'email',
		'user_type_id',
		'login_attempts',
		'locked',
		'locked_by',
		'password',
		'last_auth',
		'uuid',
	];

	protected $hidden = [
		'password',
		'remember_token',
	];

	protected $casts = [
		'created_at' => 'datetime',
		'updated_at' => 'datetime',
		'deleted_at' => 'datetime',
		'last_auth' => 'datetime',
	];

	protected $with = [
		'userType',
	];

	// RELATIONSHIPS
	public function userType() { return $this->belongsTo("App\Models\UserType"); }

	// CUSTOM FUNCTIONS
	public function getName($include_middle = false): string {
		return $this->first_name . ($include_middle ? " {$this->middle_name} " : " ") . $this->last_name;
	}

	public function isType(string $type): bool {
		return str_replace(" ", "_", strtolower($this->userType->name)) == str_replace(" ", "_", strtolower($type));
	}

	// STATIC FUNCTIONS
	public static function getIP(): string {
		$ip = request()->ip();

		if (!empty($_SERVER['HTTP_CLIENT_IP']))
			$ip = $_SERVER['HTTP_CLIENT_IP'];
		else if (!empty($_SERVER['HTTP_X_FORWARDED_FOR']))
			$ip = $_SERVER['HTTP_X_FORWARDED_FOR'];
		else
			$ip = $_SERVER['REMOTE_ADDR'];

		return $ip;
	}
}