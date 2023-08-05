@extends('layouts.user')

@section('title', 'Login')

@section("css")
<link rel="stylesheet" type="text/css" href="{{ mix("css/login.css") }}">
@endsection

@section('content')
@php
$hasErrors = session()->has("flash_error");
@endphp

<form action="{{ route("authenticate") }}" method="POST" class="form card w-100 w-sm-75 w-md-50 w-lg-25 mx-auto needs-validation" enctype="multipart/form-data" novalidate>
	<h3 class="card-header text-center bg-dark bg-opacity-75 text-light">Login</h3>

	<div class="card-body">
		{{ csrf_field() }}

		{{-- USERNAME --}}
		<div class="form-group">
			<label class="form-label">Email:</label>
			<input id="username" type="email" name="email" class="form-control {{ $hasErrors ? "is-invalid border-danger" : "border-secondary" }}" value="{{ old("email") }}" required>
		</div>

		{{-- PASSWORD --}}
		<div class="form-group">
			<label class="form-label">Password:</label>
			<div class="input-group">
				<input id="password" type="password" name="password" class="form-control border-end-0 {{ $hasErrors ? "is-invalid border-danger" : "border-secondary" }}"  aria-label="Password" aria-describedby="toggle-show-password" required>
				
				<button type="button" class="btn border-start-0 btn-outline-secondary toggle-show-password {{ $hasErrors ? "border-danger" : "border-secondary" }}" id="toggle-show-password" aria-label="Show Password" data-target="#password">
					<i class="fas fa-eye d-none" id="show"></i>
					<i class="fas fa-eye-slash" id="hide"></i>
				</button>
			</div>
		</div>

		{{-- FORGOT PASSWORD --}}
		<div class="form-group">
			<a href="javascript:SwalFlash.info(`Work In Progress`);" class="link-body-emphasis small">
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
<script type="text/javascript" src="{{ mix("js/login.js") }}"></script>
@endsection