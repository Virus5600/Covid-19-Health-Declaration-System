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
		<style type="text/css">:root { --body-bg: url("{{ asset("images/settings/background.jpg") }}") }</style>

		@yield("css")

		<title>@yield("title") | Covid-19 Health Declaration System</title>
	</head>

	<body class="d-flex flex-column min-vh-100">
		@include("includes.navbar")

		<div class="container-fluid my-5">
			@yield("content")
		</div>

		@include("includes.footer")
		
		{{-- jQuery 3.6 | Popper.js | Bootstrap 5 | Sweetalert 2 | Fontawesome 6 | Chart.js  --}}
		<script src="{{ mix("js/general.js") }}"></script>
		<script type="text/javascript" src="{{ asset("js/util/swal-flash.js") }}"></script>
		@include("includes.session-flash")
		<script type="text/javascript" src="{{ asset("js/modules/animations.js") }}"></script>

		{{-- OTHER SCRIPTS --}}
		@yield("script")
	</body>
</html>