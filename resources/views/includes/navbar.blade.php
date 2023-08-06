{{-- Navigation Bar --}}
<nav class="navbar navbar-expand-lg sticky-top shadow px-3 bg-body-tertiary font-minecraftia" id="mainNavbar">
	{{-- Branding --}}
	<a href="{{ route('home') }}" class="navbar-brand m-0">
		<img src="{{ asset('images/favicon.png') }}" alt="Covid-19 Health Declaration System" width="auto" height="50" class="mh-100 m-0 p-0" draggable="false">
		<span class="d-none d-lg-inline">Covid-19 Health Declaration System</span>
	</a>

	<!-- Navbar Toggler (on small screens) -->
	<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle Navigation">
		<span class="navbar-toggler-icon"></span>
	</button>

	{{-- Navbar Contents --}}
	<div class="collapse navbar-collapse" id="navbarContent">
		<ul class="navbar-nav ms-auto text-center">
			{{-- Branding (For Mobile) --}}
			<li class="nav-item d-lg-none">
				<h3>Covid-19 Health Declaration System</h3>
			</li>

			{{-- HOME --}}
			<li class="nav-item">
				@if (Request::is("/"))
				<span class="nav-link active">Home</span>
				@else
				<a href="{{ route('home') }}" class="nav-link">Home</a>
				@endif
			</li>

			{{-- DECLARATION --}}
			<li class="nav-item">
				@if (Request::is('declare'))
				<span class="nav-link active">Declare</span>
				@else
				<a href="{{ route('declare') }}" class="nav-link">Declare</a>
				@endif
			</li>

			{{-- TRACKER --}}
			<li class="nav-item">
				@if (Request::is('tracker'))
				<span class="nav-link active">Tracker</span>
				@else
				<a href="{{ route('tracker') }}" class="nav-link">Tracker</a>
				@endif
			</li>

			{{-- SCHEDULE --}}
			<li class="nav-item">
				@if (Request::is('schedule'))
				<span class="nav-link active">Schedule</span>
				@else
				<a href="{{ route('schedule') }}" class="nav-link">Schedule</a>
				@endif
			</li>

			<li class="nav-item">
				<div class="vr h-100 d-none d-lg-block"></div>
				<hr class="d-block d-lg-none">
			</li>


			@if (auth()->check())
				<li class="nav-item dropdown">
					<button class="nav-link dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
						{{ auth()->user()->getName() }}
					</button>

					<ul class="dropdown-menu">
						{{-- PROFILE ROUTES --}}
						<li>
							<a href="{{ route("profile") }}" class="dropdown-item">Profile</a>
						</li>

						<li>
							<hr class="dropdown-divider">
						</li>

						{{-- ADMIN ROUTES --}}
						@if (auth()->user()->isType("admin"))
						<li>
							<a href="{{ route("admin.dashboard") }}" class="dropdown-item">Dashboard</a>
						</li>

						<li>
							<hr class="dropdown-divider">
						</li>
						@endif

						{{-- USUAL ROUTES --}}
						<li>
							<a href="{{ route("logout") }}" class="dropdown-item">Logout</a>
						</li>
					</ul>
				</li>
			@else
				{{-- LOGIN --}}
				<li class="nav-item">
					@if (Request::is('login'))
					<span class="nav-link active">
						<i class="fas fa-right-to-bracket d-none d-lg-inline me-1" title="Login"></i>
						<span>Login</span>
					</span>
					@else
					<a href="{{ route('login') }}" class="nav-link">
						<i class="fas fa-right-to-bracket d-none d-lg-inline me-1" title="Login"></i>
						<span>Login</span>
					</a>
					@endif
				</li>
				
				{{-- REGISTER --}}
				<li class="nav-item">
					@if (Request::is('register'))
					<span class="nav-link active" title="Register">
						<i class="fas fa-user-plus d-none d-lg-inline me-1" title="Register"></i>
						<span>Register</span>
					</span>
					@else
					<a href="{{ route('register') }}" class="nav-link">
						<i class="fas fa-user-plus d-none d-lg-inline me-1" title="Register"></i>
						<span>Register</span>
					</a>
					@endif
				</li>
			@endif
		</ul>
	</div>
</nav>