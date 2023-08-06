@extends('layouts.admin')

@section('title', 'Dashboard')

@section('content')
<div class="row my-3">

	{{-- MONTHLY TOTALS --}}
	<div class="col-12 col-lg-6 d-flex">
		<div class="row my-auto mx-0 w-100">
			@foreach ($summaryCards as $k => $data)
			<div class="col-12 col-sm-6 my-3">
				<div class="card dark-shadow h-100 rounded">
					<div class="card-body d-flex flex-row">
						<i class="{{ $data->icon }} fa-4x my-auto"></i>

						<div class="d-flex flex-column text-center ml-auto my-auto">
							<h4 class="text-wrap"><small>{{ $data->title }}</small></h4>
							<h3>
								<small>{{ $data->data }}</small>
							</h3>
						</div>
					</div>
				</div>
			</div>
			@endforeach
		</div>
	</div>

	{{-- NEW SCHEDULES --}}
	<div class="col-12 col-lg-6">
		<div class="card my-3 h-100">
			<h4 class="card-header text-center my-0">New Schedules</h4>

			<div class="card-body overflow-x-auto h-100 d-flex flex-column">
				<table class="table table-striped my-0 text-center">
					<thead>
						<tr class="fst-italic">
							<td>Currently Work In Progress (WIP)</td>
						</tr>
					</thead>

					<tbody>
						@forelse ($newSchedules as $s)
						@empty
						<tr>
							<td>Nothing to show~</td>
						</tr>
						@endforelse
					</tbody>
				</table>
			</div>
		</div>
	</div>
</div>

<div class="row my-3">
	<div class="col-12 col-lg-8">
		<div class="row h-100">
			{{-- MONTHLY DECLARATION CHART --}}
			<div class="col-12 my-3">
				<div class="card h-100">
					<div class="card-body position-relative">
						<canvas id="monthlyDeclaration" class="rounded m-auto"></canvas>
					</div>
				</div>
			</div>
		</div>
	</div>

	{{-- ACTIVITY LOGS --}}
	<div class="col-12 col-lg-4">
		<div class="card my-3 h-100">
			<h4 class="card-header text-center my-0">Latest Activities</h4>

			<div class="card-body overflow-x-auto h-100 d-flex flex-column">
				<table class="table table-striped my-0 text-center">
					<thead>
						<tr class="fst-italic">
							<td>Currently Work In Progress (WIP)</td>
						</tr>
					</thead>

					<tbody>
						@forelse ($latestActivities as $a)
						@empty
						<tr>
							<td>Nothing to show~</td>
						</tr>
						@endforelse
					</tbody>
				</table>
			</div>
		</div>
	</div>
</div>
@endsection

@section('script')
<script type="text/javascript" data-toRemove>
	const target = $(`#monthlyDeclaration`);
	let total = [], totalPos = [], totalNeg = [], months = [];

	@for ($i = 0; $i < count($months); $i++)
	total[{{ $i }}] = `{{ $monthlyDeclarations[$i] }}`;
	totalPos[{{ $i }}] = `{{ $monthlyDeclarationsPos[$i] }}`;
	totalNeg[{{ $i }}] = `{{ $monthlyDeclarationsNeg[$i] }}`;
	months[{{ $i }}] = `{{ $months[$i] }}`;
	@endfor

	const dataset = [
		{
			label: 'Total Declarations',
			data: total,
			borderColor: `#0d6efd`
		},
		{
			label: 'Total Positive Declarations',
			data: totalPos,
			borderColor: `#dc3545`
		},
		{
			label: 'Total Negative Declarations',
			data: totalNeg,
			borderColor: `#198754`
		}
	];
</script>
<script type="text/javascript" src="{{ mix("js/admin/dashboard.js") }}" data-toRemove></script>
@endsection