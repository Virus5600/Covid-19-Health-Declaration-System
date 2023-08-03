{{-- Footer --}}
<div class="card card-header bg-light py-3 border-0 rounded-0 {{ Request::is("/login") ? "" : "mt-auto" }} shadow">
	<div class="row text-center">
		{{-- FIRST COLUMN LINK --}}
		<div class="col-12 col-lg-4 my-3 my-lg-0 order-1 order-lg-0 d-flex flex-column">
			{{-- HOME --}}
			<a href="{{ route("home") }}" class="link-body-emphasis text-decoration-none my-2" title="Home">Home</a>

			{{-- DECLARE --}}
			<a href="{{ route("declare") }}" class="link-body-emphasis text-decoration-none my-2" title="Declare">Declare</a>
			
			{{-- TRACKER --}}
			<a href="{{ route("tracker") }}" class="link-body-emphasis text-decoration-none my-2" title="Tracker">Tracker</a>
		</div>

		{{-- SECOND COLUMN LINK --}}
		<div class="col-12 col-lg-4 my-3 my-lg-0 order-2 order-lg-1 d-flex flex-column">
			@if (auth()->check())
				{{-- PROFILE --}}
				<a href="{{ route("profile") }}" class="link-body-emphasis text-decoration-none my-2" title="Profile">Profile</a>

				{{-- Horizontal Line --}}
				<hr>

				@if (auth()->user()->isType("admin"))
					{{-- DASHBOARD --}}
					<a href="{{ route("dashboard") }}" class="link-body-emphasis text-decoration-none my-2" title="Dashboard">Dashboard</a>

					{{-- Horizontal Line --}}
					<hr>
				@endif

				{{-- SCHEDULE --}}
				<a href="{{ route("schedule") }}" class="link-body-emphasis text-decoration-none my-2" title="Schedule">Schedule</a>
			@endif
		</div>

		{{-- BRANDING --}}
		<div class="col-12 col-lg-4 my-3 my-lg-0 order-0 order-lg-2">
			<div class="d-flex flex-column justify-content-center">
				<a href="{{ route("home") }}" class="text-decoration-none link-body-emphasis" title="Covid-19 Health Declaration System">
					<div class="d-flex justify-content-center">
						<img src="{{ asset("images/favicon.png") }}" alt="Covid-19 Health Declaration System" class="img" width="auto" height="125" draggable="false">
					</div>

					<h4 class="text-center">Covid-19 Health Declaration System</h4>
				</a>
			</div>
		</div>
	</div>
</div>