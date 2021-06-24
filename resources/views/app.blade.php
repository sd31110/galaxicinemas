<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">

		<title>Galaxi Cinemas, Movies and Showtimes</title>

		<!-- Fonts -->
		<link rel="preconnect" href="https://fonts.googleapis.com">
		<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
		<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700;900&display=swap" rel="stylesheet">

		<!-- Styles -->
		<link href="/css/app.css" rel="stylesheet" />
		<style>

			:root {
				--color_primary: #4fb848;
				--color_secondary: #2ca449;
				--color_dark: #333;
				--color_dark-alt: #232323;
				--color_light: #b3b4b4;
				--color_light-alt: #fff;
				--color_contrast: #86b;
			}

		</style>

	</head>
	<body>
		<div
			id="app"
			class="flex-center position-ref full-height"
		>
			<div class="content">
				<div class="title m-b-md">
					<svg
						class="logo"
						width="440" height="160"
					>
						<use xlink:href="/images/logo_galaxi-cinemas.svg#logo" />
					</svg>
				</div>
			</div>
		</div>
		<script src="/js/app.js"></script>
	</body>
</html>