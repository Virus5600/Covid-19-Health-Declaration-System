<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

use App\Models\User;

use Hash;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::create([
            "first_name" => "Admin",
            "last_name" => "Admin",
            "email" => "privatelaravelmailtester@gmail.com",
            "user_type_id" => 1,
            "password" => Hash::make("password"),
            "uuid" => Str::orderedUuid()
        ]);
    }
}