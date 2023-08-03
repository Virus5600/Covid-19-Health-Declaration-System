@extends('layouts.user')

@section('title', 'Login')

@section('content')

@php
$hasErrors = $errors->has("email") || $errors->has("password");
@endphp

<form class="form card w-100 w-sm-75 w-md-50 w-lg-25 mx-auto">
	<h3 class="card-header text-center bg-dark bg-opacity-75 text-light">Login</h3>

	<div class="card-body">
		{{ csrf_field() }}

		{{-- USERNAME --}}
		<div class="form-group">
			<label class="form-label">Email:</label>
			<input id="username" type="email" name="email" class="form-control {{ $hasErrors ? "is-invalid" : "" }}" required>
		</div>

		{{-- PASSWORD --}}
		<div class="form-group">
			<label class="form-label">Password:</label>
			<input id="password" type="password" name="password" class="form-control mb-2 {{ $hasErrors ? "is-invalid" : "" }}" required>
		</div>

		{{-- FORGOT PASSWORD --}}
		<div class="form-group">
			<a href="#" class="link-body-emphasis small">
				<small class="small">Forgot Password?</small>
			</a>
		</div>
		
		<button type="submit" class="btn btn-danger mt-5 w-100">Login</button>
	</div>
	
</form>
@endsection

@section("script")
@if ($hasErrors)
<script type="text/javascript" data-toRemove>
	SwalFlash.error(`Username/Password is incorrect.`);
	document.querySelectorAll("[data-toRemove]").forEach(el => el.remove());
</script>
@endif
@endsection