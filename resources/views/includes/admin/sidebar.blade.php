<div class="d-flex flex-row dark-shadow position-absolute position-lg-relative h-100 w-100 w-lg-auto" style="overflow: hidden;">
	{{-- Navigation Bar (SIDE) --}}
	<div class="sidebar dark-shadow custom-scroll d-flex flex-column py-3 px-0 collapse-horizontal overflow-y-auto h-100 bg-white" id="sidebar" aria-labelledby="sidebar-toggler" aria-expanded="false">
		{{-- DASHBOARD --}}
		@if (Request::is('admin/dashboard'))
		<span class="bg-secondary text-white"><i class="fas fa-tachometer-alt me-2"></i>Dashboard</span>
		@elseif (Request::is('admin/dashboard*'))
		<a class="text-decoration-none bg-secondary text-white aria-link" href="{{ route('admin.dashboard') }}" aria-hidden="false" aria-label="Dashboard"><i class="fas fa-tachometer-alt me-2"></i>Dashboard</a>
		@else
		<a class="text-decoration-none text-dark aria-link" href="{{ route('admin.dashboard') }}" aria-hidden="false" aria-label="Dashboard"><i class="fas fa-tachometer-alt me-2"></i>Dashboard</a>
		@endif

		{{-- DECLARATION --}}
		@if (Request::is('admin/declarations'))
		<span class="bg-secondary text-white"><i class="fas fa-calendar-alt me-2"></i>Declaration</span>
		@elseif (Request::is('admin/declarations/*'))
		<a class="text-decoration-none bg-secondary text-white aria-link" href="{{ route('admin.declarations.index') }}" aria-hidden="false" aria-label="Booking"><i class="fas fa-pen-to-square me-2"></i>Declaration</a>
		@else
		<a class="text-decoration-none text-dark aria-link" href="{{ route('admin.declarations.index') }}" aria-hidden="false" aria-label="Booking"><i class="fas fa-pen-to-square me-2"></i>Declaration</a>
		@endif

		{{-- SCHEDULE --}}
		@if (Request::is('admin/schedules'))
		<span class="bg-secondary text-white"><i class="fas fa-calendar-alt me-2"></i>Schedule</span>
		@elseif (Request::is('admin/schedules/*'))
		<a class="text-decoration-none bg-secondary text-white aria-link" href="{{ route('admin.schedules.index') }}" aria-hidden="false" aria-label="Inventory"><i class="fas fa-calendar-alt me-2"></i>Schedule</a>
		@else
		<a class="text-decoration-none text-dark aria-link" href="{{ route('admin.schedules.index') }}" aria-hidden="false" aria-label="Inventory"><i class="fas fa-calendar-alt me-2"></i>Schedule</a>
		@endif

		{{-- ADMIN SETTING AREA --}}
		<hr class="w-100 custom-hr">

		{{-- USERS --}}
		@if (Request::is('admin/users'))
		<span class="bg-secondary text-white"><i class="fas fa-user-alt me-2"></i>Users</span>
		@elseif (Request::is('admin/users/*'))
		<a class="text-decoration-none bg-secondary text-white aria-link" href="javascript:SwalFlash.info(`Currently work in progress (WIP)`);" aria-hidden="false" aria-label="Users"><i class="fas fa-user-alt me-2"></i>Users</a>
		@else
		<a class="text-decoration-none text-dark aria-link" href="javascript:SwalFlash.info(`Currently work in progress (WIP)`);" aria-hidden="false" aria-label="Users"><i class="fas fa-user-alt me-2"></i>Users</a>
		@endif

		{{-- TYPES --}}
		@if (Request::is('admin/types'))
		<span class="bg-secondary text-white"><i class="fas fa-user-alt me-2"></i>User Types</span>
		@elseif (Request::is('admin/types/*'))
		<a class="text-decoration-none bg-secondary text-white aria-link" href="javascript:SwalFlash.info(`Currently work in progress (WIP)`);" aria-hidden="false" aria-label="Users"><i class="fas fa-circle-user me-2"></i>User Types</a>
		@else
		<a class="text-decoration-none text-dark aria-link" href="javascript:SwalFlash.info(`Currently work in progress (WIP)`);" aria-hidden="false" aria-label="Users"><i class="fas fa-circle-user me-2"></i>User Types</a>
		@endif

		{{-- ACTIVITY LOG --}}
		@if (Request::is('admin/activity-log'))
		<span class="bg-secondary text-white"><i class="fas fa-book me-2"></i>Activity Log</span>
		@elseif (Request::is('admin/activity-log/*'))
		<a class="text-decoration-none bg-secondary text-white aria-link" href="javascript:SwalFlash.info(`Currently work in progress (WIP)`);" aria-hidden="false" aria-label="Users"><i class="fas fa-book me-2"></i>Activity Log</a>
		@else
		<a class="text-decoration-none text-dark aria-link" href="javascript:SwalFlash.info(`Currently work in progress (WIP)`);" aria-hidden="false" aria-label="Users"><i class="fas fa-book me-2"></i>Activity Log</a>
		@endif

		{{-- SETTINGS --}}
		@if (Request::is('admin/settings'))
		<span class="bg-secondary text-white"><i class="fas fa-cog me-2"></i>Settings</span>
		@elseif (Request::is('admin/settings/*'))
		<a class="text-decoration-none bg-secondary text-white aria-link" href="javascript:SwalFlash.info(`Currently work in progress (WIP)`);" aria-hidden="false" aria-label="Settings"><i class="fas fa-cog me-2"></i>Settings</a>
		@else
		<a class="text-decoration-none text-dark aria-link" href="javascript:SwalFlash.info(`Currently work in progress (WIP)`);" aria-hidden="false" aria-label="Settings"><i class="fas fa-cog me-2"></i>Settings</a>
		@endif

		{{-- SIGNOUT --}}
		<hr class="w-100 custom-hr">

		<a class="text-decoration-none text-dark aria-link" href="{{ route('logout') }}" aria-hidden="false" aria-label="Logout"><i class="fas fa-sign-out-alt me-2"></i>Logout</a>
	</div>
</div>