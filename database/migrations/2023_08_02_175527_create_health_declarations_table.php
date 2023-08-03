<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateHealthDeclarationsTable extends Migration
{
	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('health_declarations', function (Blueprint $table) {
			$table->id();
			$table->string('first_name');
			$table->string('middle_name')->nullable();
			$table->string('last_name');
			$table->string('suffix')->nullable();
			$table->char('gender');
			$table->unsignedInteger('age');
			$table->integer('body_temp');
			$table->boolean('diagnosed');
			$table->boolean('encountered');
			$table->boolean('vaccinated');
			$table->string('nationality');
			$table->string('email')->nullable();
			$table->string('mobile_number')->nullable();
			$table->string('telephone_number')->nullable();

			$table->timestamps();
		});
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::dropIfExists('health_declarations');
	}
}
