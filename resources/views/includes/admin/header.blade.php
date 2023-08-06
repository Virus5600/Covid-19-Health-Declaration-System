{{-- Navigation Bar (TOP) --}}
<nav class="navbar navbar-expand-lg navbar-light bg-light position-sticky position-lg-relative dark-shadow py-0 px-3" style="z-index: 1000;">
	<div class="container-fluid">
		{{-- Branding --}}
		<a class="navbar-brand mx-auto mx-lg-0 py-0" href="{{route('admin.dashboard')}}" style="height: auto;">
			<img src="{{ asset('images/favicon.png') }}" alt="Covid-19 Health Declaration System" width="auto" height="50" class="mh-100 m-0 p-0" draggable="false">
			<span class="d-none d-lg-inline">Covid-19 Health Declaration System</span>
		</a>

		<div class="d-flex flex-row mx-auto mx-lg-0">
			{{-- Navbar contents --}}
			<div class="navbar-collapse" id="navbar">
				<div class="ml-auto">
					<label>
						<div class="dropdown">
							<a href='javascript:void(0);' role="button" class="nav-link dropdown-toggle text-dark" style="font-size: 1.25rem;" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
								{{ auth()->user()->getName() }}
							</a>

							<div class="dropdown-menu dropdown-menu-right">
								<a class="dropdown-item" href="{{ route('home') }}">View Home Page</a>
								<div class="dropdown-divider"></div>
								<a class="dropdown-item" href="{{ route('logout') }}">Logout</a>
							</div>
						</div>
					</label>
				</div>
			</div>

			{{-- Navbar Toggler --}}
			<button class="sidebar-toggler" type="button" data-bs-toggle="sidebar-collapse" data-bs-target="#sidebar" aria-controls="sidebar" aria-label="Toggle Sidebar" id="sidebar-toggler">
				<span class="navbar-toggler-icon"></span>
			</button>
		</div>
	</div>
</nav>