<!DOCTYPE html>
<html lang="en-US" data-bs-theme="light">
	<head>
		@php
		$webName = "COVID-19 Health Declaration";
		$webDesc = "A PHP case study project focused on testing our knowledge from the entire DICT training.";
		$webKeyw = "DICT, Login, PHP, MySQL, HTML, CSS, JavaScript";
		$webLogo = asset("images/favicon.png");
		$webMeta = asset("images/settings/banner.webp");
		$webURL = Request::url();
		@endphp

		{{-- META DATA --}}
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
		<meta http-equiv="Content-Language" content="en-US" />

		{{-- SITE META --}}
		<meta name="type" content="website">
		<meta name="title" content="{{ $webName }}">
		<meta name="description" content="{{ $webDesc }}">
		<meta name="image" content="{{ $webMeta }}">
		<meta name="keywords" content="{{ $webKeyw }}">
		<meta name="application-name" content="{{ $webName }}">

		{{-- TWITTER META --}}
		<meta name="twitter:card" content="summary_large_image">
		<meta name="twitter:title" content="{{ $webName }}">
		<meta name="twitter:description" content="{{ $webDesc }}">
		<meta name="twitter:image" content="{{ $webMeta }}">

		{{-- OG META --}}
		<meta name="og:url" content="{{ $webURL }}">
		<meta name="og:type" content="website">
		<meta name="og:title" content="{{ $webName }}">
		<meta name="og:description" content="{{ $webDesc }}">
		<meta name="og:image" content="{{ $webMeta }}">

		{{-- FAVICON --}}
		<link rel="icon" href="{{ $webLogo }}">
		<link rel="shortcut icon" href="{{ $webLogo }}">
		<link rel="apple-touch-icon" href="{{ $webLogo }}">
		<link rel="mask-icon" href="{{ $webLogo }}">

		{{-- Bootstrap 5 | jQuery UI | Sweetalert 2 | Fontawesome 6 --}}
		<link href="{{ mix("css/general.css") }}" rel="stylesheet">
		<link href="{{ mix("css/common.css") }}" rel="stylesheet">
		{{-- Animations --}}
		<link href="{{ mix("css/modules/animations.css") }}" rel="stylesheet">

		{{-- STYLE SETTING --}}
		<link href="{{ mix("css/admin/admin.css") }}" rel="stylesheet">
		<style type="text/css">:root { --body-bg: url("{{ asset("images/settings/background.jpg") }}") }</style>

		@yield("css")

		<title>@yield("title") | Covid-19 Health Declaration System</title>
	</head>

	<body class="d-flex flex-column min-vh-100">
		{{-- HEADER --}}
		@include("includes.admin.header")

		{{-- CONTENT --}}
		<div class="container-fluid d-flex flex-column flex-fill m-0 px-0" id="content">
			<div class="d-flex flex-d-row flex-grow-1 position-relative h-100" style="overflow: hidden;">
				{{-- SIDEBAR --}}
				@include("includes.admin.sidebar")
				
				{{-- CONTENT --}}
				<div class="container-fluid content flex-fill m-0 pt-2 pb-5 h-100">
					@yield("content")
				</div>
			</div>
		</div>
		
		{{-- jQuery 3.6 | Popper.js | Bootstrap 5 | Sweetalert 2 | Fontawesome 6 | Chart.js --}}
		<script src="{{ mix("js/general.js") }}"></script>
		<script type="text/javascript" src="{{ asset("js/util/swal-flash.js") }}"></script>
		@include("includes.session-flash")
		<script type="text/javascript" src="{{ asset("js/modules/animations.js") }}"></script>
		<script type="text/javascript" src="{{ asset("js/admin/admin.js") }}"></script>

		{{-- OTHER SCRIPTS --}}
		<script type="text/javascript">
			$(document).ready(function(){
				$(".col-a").click(function(){
					$('.collapse.show').collapse('hide');
				});
			});
		</script>
		@yield("script")
	</body>
</html>