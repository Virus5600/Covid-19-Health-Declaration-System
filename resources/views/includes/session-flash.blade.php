{{-- FLASHES --}}
@if (Session::has('flash_error') || Session::has('flash_info') || Session::has('flash_success'))
<script type="text/javascript">
	@if (Session::has('flash_error'))
	Swal.fire({
		{!!Session::has('has_icon') ? "icon: `error`," : ""!!}
		title: `{{Session::get('flash_error')}}`,
		{!!Session::has('message') ? 'html: `' . Session::get('message') . '`,' : ''!!}
		position: {!!Session::has('position') ? '`' . Session::get('position') . '`' : '`top`'!!},
		showConfirmButton: false,
		toast: {!!Session::has('is_toast') ? Session::get('is_toast') : true!!},
		{!!Session::has('has_timer') ? (Session::get('has_timer') ? (Session::has('duration') ? ('timer: ' . Session::get('duration')) . ',' : `timer: 10000,`) : '') : `timer: 10000,`!!}
		background: `#dc3545`,
		customClass: {
			title: `text-white`,
			content: `text-white`,
			popup: `px-3`
		},
	});
	@elseif (Session::has('flash_info'))
	Swal.fire({
		{!!Session::has('has_icon') ? "icon: `info`," : ""!!}
		title: `{{Session::get('flash_info')}}`,
		{!!Session::has('message') ? 'html: `' . Session::get('message') . '`,' : ''!!}
		position: {!!Session::has('position') ? '`' . Session::get('position') . '`' : '`top`'!!},
		showConfirmButton: false,
		toast: {!!Session::has('is_toast') ? Session::get('is_toast') : true!!},
		{!!Session::has('has_timer') ? (Session::get('has_timer') ? (Session::has('duration') ? ('timer: ' . Session::get('duration')) . ',' : `timer: 10000,`) : '') : `timer: 10000,`!!}
		background: `#17a2b8`,
		customClass: {
			title: `text-white`,
			content: `text-white`,
			popup: `px-3`
		},
	});
	@elseif (Session::has('flash_success'))
	Swal.fire({
		{!!Session::has('has_icon') ? "icon: `success`," : ""!!}
		title: `{{Session::get('flash_success')}}`,
		{!!Session::has('message') ? 'html: `' . Session::get('message') . '`,' : ''!!}
		position: {!!Session::has('position') ? '`' . Session::get('position') . '`' : '`top`'!!},
		showConfirmButton: false,
		toast: {!!Session::has('is_toast') ? Session::get('is_toast') : true!!},
		{!!Session::has('has_timer') ? (Session::get('has_timer') ? (Session::has('duration') ? ('timer: ' . Session::get('duration')) . ',' : `timer: 10000,`) : '') : `timer: 10000,`!!}
		background: `#28a745`,
		customClass: {
			title: `text-white`,
			content: `text-white`,
			popup: `px-3`
		},
	});
	@endif

	$(document).ready(function(){
		$(document).on('livewire:load', () => {
			Livewire.onPageExpired((r, m) => {
				console.info(r);
				Swal.fire({
					icon: `info`,
					title: `The page has expired`,
					message: m
				});
			});
		});

		$(".col-a").click(function(){
			$('.collapse.show').collapse('hide');
		});
	});
</script>
@endif