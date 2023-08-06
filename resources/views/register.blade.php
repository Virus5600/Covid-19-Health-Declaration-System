@extends('layouts.user')

@section('title', 'Register')

@section("css")
<link rel="stylesheet" type="text/css" href="{{ mix("css/login.css") }}">
@endsection

@section('content')
@php
$hasErrors = session()->has("flash_error");
@endphp

<form action="{{ route("register.submit") }}" method="POST" class="form card w-100 w-sm-75 w-md-50 mx-auto needs-validation continuous-validation {{ $errors->isNotEmpty() ? "was-validated" : "" }}" enctype="multipart/form-data" novalidate>
	<h3 class="card-header text-center bg-dark bg-opacity-75 text-light">Register</h3>

	<div class="card-body">
		{{ csrf_field() }}

		{{-- NAME --}}
		<div class="card card-body position-relative my-4">
			<span class="position-absolute translate-middle-y top-0 bg-white border rounded px-2 h5">Name</span>

			<div class="row justify-content-center">
				{{-- FIRST NAME --}}
				<div class="col-12 col-lg-7 my-2">
					<div class="form-group">
						<label for="firstName" class="form-label required before">First Name</label>
						<input type="text" id="firstName" name="first_name" class="form-control {{ $errors->has("first_name") ? "is-invalid" : ($hasErrors ? "is-valid" : "border-secondary") }}" value="{{ old("first_name") }}" required>
						<span class="invalid-feedback">{{ $errors->first("first_name") }}</span>
					</div>
				</div>

				{{-- MIDDLE NAME --}}
				<div class="col-12 col-lg-5 my-2">
					<div class="form-group">
						<label for="middleName" class="form-label">Middle Name</label>
						<input type="text" id="middleName" name="middle_name" class="form-control {{ $errors->has("middle_name") ? "is-invalid" : ($hasErrors ? "is-valid" : "border-secondary") }}" value="{{ old("middle_name") }}">
						<span class="invalid-feedback">{{ $errors->first("middle_name") }}</span>
					</div>
				</div>

				{{-- LAST NAME --}}
				<div class="col-12 col-lg-8 my-2">
					<div class="form-group">
						<label for="lastName" class="form-label required before">Last Name</label>
						<input type="text" id="lastName" name="last_name" class="form-control {{ $errors->has("last_name") ? "is-invalid" : ($hasErrors ? "is-valid" : "border-secondary") }}" value="{{ old("last_name") }}" required>
						<span class="invalid-feedback">{{ $errors->first("last_name") }}</span>
					</div>
				</div>
				
				{{-- SUFFIX --}}
				<div class="col-6 col-lg-4 my-2">
					<div class="form-group">
						<label for="suffix" class="form-label before">Suffix</label>
						<input type="text" id="suffix" name="suffix" class="form-control {{ $errors->has("suffix") ? "is-invalid" : ($hasErrors ? "is-valid" : "border-secondary") }}" value="{{ old("suffix") }}">
						<span class="invalid-feedback">{{ $errors->first("suffix") }}</span>
					</div>
				</div>
			</div>
		</div>

		{{-- CREDENTIALS --}}
		<div class="card card-body position-relative my-4">
			<span class="position-absolute translate-middle-y top-0 bg-white border rounded px-2 h5">Credentials</span>
			
			<div class="row justify-content-center">
				{{-- EMAIL --}}
				<div class="col-6 col-lg-4 my-2">
					<div class="form-group">
						<label class="form-label">Email:</label>
						<input id="email" type="email" name="email" class="form-control {{ $errors->has("email") ? "is-invalid" : ($hasErrors ? "is-valid" : "border-secondary") }}" value="{{ old("email") }}" required>
						<span class="invalid-feedback">{{ $errors->first("email") }}</span>
					</div>
				</div>
				
				{{-- PASSWORD --}}
				<div class="col-6 col-lg-4 my-2">
					<div class="form-group">
						<label class="form-label">Password:</label>
						<div class="input-group">
							<input id="password" type="password" name="password" class="form-control border-end-0 {{ $hasErrors ? "is-invalid border-danger" : "border-secondary" }}"  aria-label="Password" aria-describedby="toggle-show-password" required>
							
							<button type="button" class="btn border-start-0 btn-outline-secondary toggle-show-password {{ $hasErrors ? "border-danger" : "border-secondary" }}" id="toggle-show-password" aria-label="Show Password" data-target="#password">
								<i class="fas fa-eye d-none" id="show"></i>
								<i class="fas fa-eye-slash" id="hide"></i>
							</button>
						</div>

						<span class="invalid-feedback d-block">{{ $errors->first("password") }}</span>
					</div>
				</div>

				{{-- PASSWORD --}}
				<div class="col-6 col-lg-4 my-2">
					<div class="form-group">
						<label class="form-label">Confirm Password:</label>
						<div class="input-group">
							<input id="confirm_password" type="password" name="password_confirmation" class="form-control border-end-0 {{ $hasErrors ? "is-invalid border-danger" : "border-secondary" }}"  aria-label="Password" aria-describedby="toggle-show-password" required>
							
							<button type="button" class="btn border-start-0 btn-outline-secondary toggle-show-password {{ $hasErrors ? "border-danger" : "border-secondary" }}" id="toggle-show-password" aria-label="Show Confirm Password" data-target="#confirm_password">
								<i class="fas fa-eye d-none" id="show"></i>
								<i class="fas fa-eye-slash" id="hide"></i>
							</button>
						</div>

						<span class="invalid-feedback d-block">{{ $errors->first("password_confirmation") }}</span>
					</div>
				</div>
			</div>
		</div>
	</div>

	<div class="card-footer text-center">
		<button type="submit" class="btn btn-success" data-action="submit">Submit</button>
	</div>
</form>
@endsection

@section("script")
<script type="text/javascript" src="{{ mix("js/login.js") }}"></script>
@endsection