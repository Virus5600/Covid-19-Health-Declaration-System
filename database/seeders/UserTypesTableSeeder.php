<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

use App\Models\UserType;

class UserTypesTableSeeder extends Seeder
{
	/**
	 * Run the database seeds.
	 *
	 * @return void
	 */
	public function run()
	{
		UserType::create([
			"display_name" => "Admin",
			"name" => "admin"
		], [
			"display_name" => "User",
			"name" => "user"
		]);
	}
}