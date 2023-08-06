@extends('layouts.user')

@section('title', 'Home')

@section('css')
<style type="text/css">
	#banner {
		background-color: #eee;
		background-image: url("{{ asset("images/settings/banner.webp") }}");
		background-position: center;
		background-repeat: no-repeat;
	}

	#banner > * {
		display: flex;
		flex-direction: column;
		vertical-align: middle;
		justify-content: center;
		min-height: 25vh;

		backdrop-filter: blur(5px) brightness(0.5) contrast(0.75);
		-webkit-backdrop-filter: blur(5px) brightness(0.5) contrast(0.75);
	}
</style>
@endsection

@section('content')
<div id="banner">
	<div class="h-100">
		<h1 class="text-center text-white">Covid-19 Health Declaration System</h1>
		<h2 class="text-center text-white h3">A health declaration system to help identify our country's current status</h2>
	</div>
</div>

<div class="w-100 w-lg-50 mx-auto">
	{{-- DECLARATION --}}
	<div class="row my-3 my-lg-5" data-inview-anim="slide-in-right">
		<div class="col-12 col-lg-5 order-1 order-lg-0 d-flex flex-column align-middle text-center text-lg-end">
			<h3 class="mt-auto mb-2">Declare your current health status</h3>
			
			<div class="mb-auto mb-2">
				<p>Help prevent the spread of Covid by declaring your status.</p>

				<a href="{{ route("declare") }}" class="btn btn-primary">Declare</a>
			</div>
		</div>
		
		<div class="col-12 col-lg-7 order-0 order-lg-1">
			<img src="{{ asset("images/home/declare.jpg") }}" alt="Declare your current health status" class="img img-fluid img-thumbnail w-100" draggable="false">
		</div>
	</div>

	{{-- TRACKER --}}
	<div class="row my-3 my-lg-5" data-inview-anim="slide-in-left">
		<div class="col-12 col-lg-5 order-1 d-flex flex-column align-middle text-center text-lg-start">
			<h3 class="mt-auto mb-2">Track public declarations</h3>

			<div class="mb-auto mb-2">
				<p>Avoid points of interests which could give you Covid.</p>

				<a href="{{ route("tracker") }}" class="btn btn-primary">Tracker</a>
			</div>
		</div>

		<div class="col-12 col-lg-7 order-0 ms-lg-auto">
			<img src="{{ asset("images/home/tracker.jpg") }}" alt="Track public declarations" class="img img-fluid img-thumbnail w-100" draggable="false">
		</div>
	</div>

	{{-- PROFILE --}}
	<div class="row my-3 my-lg-5" data-inview-anim="slide-in-right">
		<div class="col-12 col-lg-5 order-1 order-lg-0 d-flex flex-column align-middle text-center text-lg-end">
			<h3 class="mt-auto mb-2">Receive updates and schedule consultations</h3>

			<div class="mb-auto mb-2">
				<p>Opt in for email updates and alerts. Schedule consultations with your local hospital.</p>

				@if (Auth::check())
				<a href="{{ route("schedule") }}" class="btn btn-primary">Schedule</a>
				@else
				<a href="{{ route("schedule") }}" class="btn btn-primary">Login</a>
				@endif
			</div>
		</div>

		<div class="col-12 col-lg-7 order-0 order-lg-1">
			<img src="{{ asset("images/home/profile.jpg") }}" alt="Receive updates and schedule consultations" class="img img-fluid img-thumbnail w-100" draggable="false">
		</div>
	</div>
</div>
@endsection