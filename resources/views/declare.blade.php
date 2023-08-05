@extends('layouts.user')

@section('title', 'Declare')

@section('content')
@php
$hasErrors = session()->has("flash_error");
@endphp

<form action="{{ route("declare.submit") }}" method="POST" class="form card w-100 w-sm-75 w-md-50 mx-auto needs-validation continuous-validation {{ $errors->isNotEmpty() ? "was-validated" : "" }}" enctype="multipart/form-data" novalidate>
	<h3 class="card-header text-center bg-dark bg-opacity-75 text-light">Health Declaration Form</h3>

	<div class="card-body">
		{{ csrf_field() }}

		{{-- PERSONAL INFORMATION --}}
		<div class="card card-body position-relative my-4">
			<span class="position-absolute translate-middle-y top-0 bg-white border rounded px-2 h5">Personal Information</span>

			<div class="row justify-content-center">
				{{-- FIRST NAME --}}
				<div class="col-12 col-lg-4 col-xl-3 my-2">
					<div class="form-group">
						<label for="firstName" class="form-label required before">First Name</label>
						<input type="text" id="firstName" name="first_name" class="form-control {{ $errors->has("first_name") ? "is-invalid" : ($hasErrors ? "is-valid" : "") }}" value="{{ old("first_name") }}" required>
						<span class="invalid-feedback">{{ $errors->first("first_name") }}</span>
					</div>
				</div>

				{{-- MIDDLE NAME --}}
				<div class="col-12 col-lg-4 col-xl-3 my-2">
					<div class="form-group">
						<label for="middleName" class="form-label">Middle Name</label>
						<input type="text" id="middleName" name="middle_name" class="form-control {{ $errors->has("middle_name") ? "is-invalid" : ($hasErrors ? "is-valid" : "") }}" value="{{ old("middle_name") }}">
						<span class="invalid-feedback">{{ $errors->first("middle_name") }}</span>
					</div>
				</div>

				{{-- LAST NAME --}}
				<div class="col-12 col-lg-4 col-xl-3 my-2">
					<div class="form-group">
						<label for="lastName" class="form-label required before">Last Name</label>
						<input type="text" id="lastName" name="last_name" class="form-control {{ $errors->has("last_name") ? "is-invalid" : ($hasErrors ? "is-valid" : "") }}" value="{{ old("last_name") }}" required>
						<span class="invalid-feedback">{{ $errors->first("last_name") }}</span>
					</div>
				</div>
				
				{{-- SUFFIX --}}
				<div class="col-6 col-lg-3 my-2">
					<div class="form-group">
						<label for="suffix" class="form-label before">Suffix</label>
						<input type="text" id="suffix" name="suffix" class="form-control {{ $errors->has("suffix") ? "is-invalid" : ($hasErrors ? "is-valid" : "") }}" value="{{ old("suffix") }}">
						<span class="invalid-feedback">{{ $errors->first("suffix") }}</span>
					</div>
				</div>
				
				{{-- AGE --}}
				<div class="col-6 col-lg-3 my-2">
					<div class="form-group">
						<label for="age" class="form-label required before">Age</label>
						<input type="number" id="age" name="age" class="form-control {{ $errors->has("age") ? "is-invalid" : ($hasErrors ? "is-valid" : "") }}" value="{{ old("age") }}" min="0" required>
						<span class="invalid-feedback">{{ $errors->first("age") }}</span>
					</div>
				</div>

				{{-- NATIONALITY --}}
				<div class="col-12 col-lg-6 my-2">
					<div class="form-group">
						<label for="nationality" class="form-label required before">Nationality</label>
						<input type="text" id="nationatility" name="nationality" class="form-control required before {{ $errors->has("nationality") ? "is-invalid" : ($hasErrors ? "is-valid" : "") }}" value="{{ old("nationality") }}" list="nationalityList" required>
						<datalist id="nationalityList">
							<option value="Afghan">
							<option value="Albanian">
							<option value="Algerian">
							<option value="American">
							<option value="Andorran">
							<option value="Angolan">
							<option value="Anguillan">
							<option value="Argentine">
							<option value="Armenian">
							<option value="Australian">
							<option value="Austrian">
							<option value="Azerbaijani">
							<option value="Bahamian">
							<option value="Bahraini">
							<option value="Bangladeshi">
							<option value="Barbadian">
							<option value="Belarusian">
							<option value="Belgian">
							<option value="Belizean">
							<option value="Beninese">
							<option value="Bermudian">
							<option value="Bhutanese">
							<option value="Bolivian">
							<option value="Botswanan">
							<option value="Brazilian">
							<option value="British">
							<option value="British Virgin Islander">
							<option value="Bruneian">
							<option value="Bulgarian">
							<option value="Burkinan">
							<option value="Burmese">
							<option value="Burundian">
							<option value="Cambodian">
							<option value="Cameroonian">
							<option value="Canadian">
							<option value="Cape Verdean">
							<option value="Cayman Islander">
							<option value="Central African">
							<option value="Chadian">
							<option value="Chilean">
							<option value="Chinese">
							<option value="Citizen of Antigua and Barbuda">
							<option value="Citizen of Bosnia and Herzegovina">
							<option value="Citizen of Guinea-Bissau">
							<option value="Citizen of Kiribati">
							<option value="Citizen of Seychelles">
							<option value="Citizen of the Dominican Republic">
							<option value="Citizen of Vanuatu">
							<option value="Colombian">
							<option value="Comoran">
							<option value="Congolese (Congo)">
							<option value="Congolese (DRC)">
							<option value="Cook Islander">
							<option value="Costa Rican">
							<option value="Croatian">
							<option value="Cuban">
							<option value="Cymraes">
							<option value="Cymro">
							<option value="Cypriot">
							<option value="Czech">
							<option value="Danish">
							<option value="Djiboutian">
							<option value="Dominican">
							<option value="Dutch">
							<option value="East Timorese">
							<option value="Ecuadorean">
							<option value="Egyptian">
							<option value="Emirati">
							<option value="English">
							<option value="Equatorial Guinean">
							<option value="Eritrean">
							<option value="Estonian">
							<option value="Ethiopian">
							<option value="Faroese">
							<option value="Fijian">
							<option value="Filipino">
							<option value="Finnish">
							<option value="French">
							<option value="Gabonese">
							<option value="Gambian">
							<option value="Georgian">
							<option value="German">
							<option value="Ghanaian">
							<option value="Gibraltarian">
							<option value="Greek">
							<option value="Greenlandic">
							<option value="Grenadian">
							<option value="Guamanian">
							<option value="Guatemalan">
							<option value="Guinean">
							<option value="Guyanese">
							<option value="Haitian">
							<option value="Honduran">
							<option value="Hong Konger">
							<option value="Hungarian">
							<option value="Icelandic">
							<option value="Indian">
							<option value="Indonesian">
							<option value="Iranian">
							<option value="Iraqi">
							<option value="Irish">
							<option value="Israeli">
							<option value="Italian">
							<option value="Ivorian">
							<option value="Jamaican">
							<option value="Japanese">
							<option value="Jordanian">
							<option value="Kazakh">
							<option value="Kenyan">
							<option value="Kittitian">
							<option value="Kosovan">
							<option value="Kuwaiti">
							<option value="Kyrgyz">
							<option value="Lao">
							<option value="Latvian">
							<option value="Lebanese">
							<option value="Liberian">
							<option value="Libyan">
							<option value="Liechtenstein citizen">
							<option value="Lithuanian">
							<option value="Luxembourger">
							<option value="Macanese">
							<option value="Macedonian">
							<option value="Malagasy">
							<option value="Malawian">
							<option value="Malaysian">
							<option value="Maldivian">
							<option value="Malian">
							<option value="Maltese">
							<option value="Marshallese">
							<option value="Martiniquais">
							<option value="Mauritanian">
							<option value="Mauritian">
							<option value="Mexican">
							<option value="Micronesian">
							<option value="Moldovan">
							<option value="Monegasque">
							<option value="Mongolian">
							<option value="Montenegrin">
							<option value="Montserratian">
							<option value="Moroccan">
							<option value="Mosotho">
							<option value="Mozambican">
							<option value="Namibian">
							<option value="Nauruan">
							<option value="Nepalese">
							<option value="New Zealander">
							<option value="Nicaraguan">
							<option value="Nigerian">
							<option value="Nigerien">
							<option value="Niuean">
							<option value="North Korean">
							<option value="Northern Irish">
							<option value="Norwegian">
							<option value="Omani">
							<option value="Pakistani">
							<option value="Palauan">
							<option value="Palestinian">
							<option value="Panamanian">
							<option value="Papua New Guinean">
							<option value="Paraguayan">
							<option value="Peruvian">
							<option value="Pitcairn Islander">
							<option value="Polish">
							<option value="Portuguese">
							<option value="Prydeinig">
							<option value="Puerto Rican">
							<option value="Qatari">
							<option value="Romanian">
							<option value="Russian">
							<option value="Rwandan">
							<option value="Salvadorean">
							<option value="Sammarinese">
							<option value="Samoan">
							<option value="Sao Tomean">
							<option value="Saudi Arabian">
							<option value="Scottish">
							<option value="Senegalese">
							<option value="Serbian">
							<option value="Sierra Leonean">
							<option value="Singaporean">
							<option value="Slovak">
							<option value="Slovenian">
							<option value="Solomon Islander">
							<option value="Somali">
							<option value="South African">
							<option value="South Korean">
							<option value="South Sudanese">
							<option value="Spanish">
							<option value="Sri Lankan">
							<option value="St Helenian">
							<option value="St Lucian">
							<option value="Stateless">
							<option value="Sudanese">
							<option value="Surinamese">
							<option value="Swazi">
							<option value="Swedish">
							<option value="Swiss">
							<option value="Syrian">
							<option value="Taiwanese">
							<option value="Tajik">
							<option value="Tanzanian">
							<option value="Thai">
							<option value="Togolese">
							<option value="Tongan">
							<option value="Trinidadian">
							<option value="Tristanian">
							<option value="Tunisian">
							<option value="Turkish">
							<option value="Turkmen">
							<option value="Turks and Caicos Islander">
							<option value="Tuvaluan">
							<option value="Ugandan">
							<option value="Ukrainian">
							<option value="Uruguayan">
							<option value="Uzbek">
							<option value="Vatican citizen">
							<option value="Venezuelan">
							<option value="Vietnamese">
							<option value="Vincentian">
							<option value="Wallisian">
							<option value="Welsh">
							<option value="Yemeni">
							<option value="Zambian">
							<option value="Zimbabwean">
						</datalist>
						<span class="invalid-feedback">{{ $errors->first("nationality") }}</span>
					</div>
				</div>


				{{-- SEX --}}
				<div class="col-12 col-lg-3 my-2">
					<div class="form-group">
						<label class="form-label required before" for="sex">Sex</label>
						<select name="sex" id="sex" class="form-select {{ $errors->has("sex") ? "is-invalid" : ($hasErrors ? "is-valid" : "") }}" required>
							<option value="M" {{ old("sex") == "M" ? "selected" : "" }}>Male</option>
							<option value="F" {{ old("sex") == "F" ? "selected" : "" }}>Female</option>
						</select>
						<span class="invalid-feedback">{{ $errors->first("sex") }}</span>
					</div>
				</div>
			</div>
		</div>

		{{-- HEALTH RELATED INFO --}}
		<div class="card card-body position-relative my-4">
			<span class="position-absolute translate-middle-y top-0 bg-white border rounded px-2 h5">Health Information</span>

			<div class="row justify-content-center">
				{{-- BODY TEMPERATURE --}}
				<div class="col-12 my-2">
					<div class="form-group">
						<label for="body_temp" class="form-label required before">Body Temperature</label>

						<div class="input-group">
							<input type="numeric" id="body_temp" name="body_temp" class="form-control {{ $errors->has("body_temp") ? "is-invalid" : ($hasErrors ? "is-valid" : "") }}" value="{{ old("body_temp") }}" required>
							<span class="input-group-text">C°</span>
						</div>
						<span class="invalid-feedback d-block">{{ $errors->first("body_temp") }}</span>
					</div>
				</div>

				{{-- DIAGNOSED --}}
				<div class="col-12 col-lg-3 my-2">
					<div class="form-group text-center d-flex d-lg-block">
						<label class="form-label required before me-auto mx-lg-auto">
							Diagnosed
							<i class="fas fa-info info-btn border border-dark rounded-circle mx-0" data-bs-toggle="popover" data-bs-title="Diagnosed" data-bs-trigger="focus" data-bs-content="Are you diagnosed with a Covid-19 by a professional?" data-bs-placement="bottom"></i>
						</label>

						{{-- YES --}}
						<div class="form-check form-check-inline">
							<input type="radio" class="form-check-input {{ $errors->has("diagnosed") ? "is-invalid" : ($hasErrors ? "is-valid" : "") }}" value="Yes" id="diagnosed_yes" name="diagnosed" {{ old("diagnosed") == "Yes" || old("diagnosed") == null ? "checked" : "" }}>
							<label for="diagnosed_yes" class="form-check-label">Yes</label>
						</div>

						{{-- NO --}}
						<div class="form-check form-check-inline">
							<input type="radio" class="form-check-input {{ $errors->has("diagnosed") ? "is-invalid" : ($hasErrors ? "is-valid" : "") }}" value="No" id="diagnosed_no" name="diagnosed" {{ old("diagnosed") == "No" ? "checked" : "" }}>
							<label for="diagnosed_no" class="form-check-label">No</label>
						</div>
					</div>

					<span class="invalid-feedback d-block text-left text-lg-center">{{ $errors->first("diagnosed") }}</span>
				</div>

				{{-- ENCOUNTERED --}}
				<div class="col-12 col-lg-3 my-2 border-lg-top">
					<div class="form-group text-center d-flex d-lg-block">
						<label class="form-label required before me-auto mx-lg-auto">
							Encountered
							<i class="fas fa-info info-btn border border-dark rounded-circle mx-0" data-bs-toggle="popover" data-bs-title="Encountered" data-bs-trigger="focus" data-bs-content="Did you have contact with any people that has Covid-19?" data-bs-placement="bottom"></i>
						</label>

						{{-- YES --}}
						<div class="form-check form-check-inline">
							<input type="radio" class="form-check-input {{ $errors->has("encountered") ? "is-invalid" : ($hasErrors ? "is-valid" : "") }}" value="Yes" id="encountered_yes" name="encountered" {{ old("encountered") != "No" ? "checked" : "" }}>
							<label for="encountered_yes" class="form-check-label">Yes</label>
						</div>

						{{-- NO --}}
						<div class="form-check form-check-inline">
							<input type="radio" class="form-check-input {{ $errors->has("encountered") ? "is-invalid" : ($hasErrors ? "is-valid" : "") }}" value="No" id="encountered_no" name="encountered" {{ old("encountered") == "No" ? "checked" : "" }}>
							<label for="encountered_no" class="form-check-label">No</label>
						</div>
					</div>

					<span class="invalid-feedback d-block text-left text-lg-center">{{ $errors->first("encountered") }}</span>
				</div>

				{{-- VACCINATED --}}
				<div class="col-12 col-lg-3 my-2 border-lg-top">
					<div class="form-group text-center d-flex d-lg-block">
						<label class="form-label required before me-auto mx-lg-auto">
							Vaccinated
							<i class="fas fa-info info-btn border border-dark rounded-circle mx-0" data-bs-toggle="popover" data-bs-title="Vaccinated" data-bs-trigger="focus" data-bs-content="Have you been vaccinated already?" data-bs-placement="bottom"></i>
						</label>

						{{-- YES --}}
						<div class="form-check form-check-inline">
							<input type="radio" class="form-check-input {{ $errors->has("vaccinated") ? "is-invalid" : ($hasErrors ? "is-valid" : "") }}" value="Yes" id="vaccinated_yes" name="vaccinated" {{ old("vaccinated") == "Yes" || old("vaccinated") == null ? "checked" : "" }}>
							<label for="vaccinated_yes" class="form-check-label">Yes</label>
						</div>

						{{-- NO --}}
						<div class="form-check form-check-inline">
							<input type="radio" class="form-check-input {{ $errors->has("vaccinated") ? "is-invalid" : ($hasErrors ? "is-valid" : "") }}" value="No" id="vaccinated_no" name="vaccinated" {{ old("vaccinated") == "No" ? "checked" : "" }}>
							<label for="vaccinated_no" class="form-check-label">No</label>
						</div>
					</div>

					<span class="invalid-feedback d-block text-left text-lg-center">{{ $errors->first("vaccinated") }}</span>
				</div>
			</div>
		</div>

		{{-- CONTACT INFORMATION --}}
		<div class="card card-body position-relative my-4">
			<span class="position-absolute translate-middle-y top-0 bg-white border rounded px-2 h5">Contact Information</span>

			<div class="row justify-content-center">
				{{-- EMAIL --}}
				<div class="col-12 col-lg-4 my-2">
					<div class="form-group">
						<label for="email" class="form-label">Email</label>
						<input type="email" id="email" name="email" class="form-control {{ $errors->has("email") ? "is-invalid" : ($hasErrors ? "is-valid" : "") }}" value="{{ old("email") }}">
						<span class="invalid-feedback">{{ $errors->first("email") }}</span>
					</div>
				</div>

				{{-- MOBILE NUMBER --}}
				<div class="col-12 col-lg-4 my-2">
					<div class="form-group">
						<label for="mobile_number" class="form-label required before">Mobile Number</label>
						<input type="text" id="mobile_number" name="mobile_number" class="form-control {{ $errors->has("mobile_number") ? "is-invalid" : ($hasErrors ? "is-valid" : "") }}" value="{{ old("mobile_number") }}" required data-mask data-mask-format="+63 999 999 9999">
						<span class="invalid-feedback">{{ $errors->first("mobile_number") }}</span>
					</div>
				</div>

				{{-- TELEPHONE NUMBER --}}
				<div class="col-12 col-lg-4 my-2">
					<div class="form-group">
						<label for="telephone_number" class="form-label">Telephone Number</label>
						<input type="text" id="telephone_number" name="telephone_number" class="form-control {{ $errors->has("telephone_number") ? "is-invalid" : ($hasErrors ? "is-valid" : "") }}" value="{{ old("telephone_number") }}" data-mask data-mask-format="999[9]-9999">
						<span class="invalid-feedback">{{ $errors->first("telephone_number") }}</span>
					</div>
				</div>
			</div>
		</div>
	</div>

	<div class="card-footer text-center">
		<button type="submit" class="btn btn-success" data-action="submit">Submit</button>
	</div>
</form>
@endsection

@section('script')
<script type="text/javascript" src="{{ mix("js/util/disable-on-submit.js") }}"></script>
<script type="text/javascript" src="{{ mix("js/modules/inputmask.js") }}"></script>
@endsection