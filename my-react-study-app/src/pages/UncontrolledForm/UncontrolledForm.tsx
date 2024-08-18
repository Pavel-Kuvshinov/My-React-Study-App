import { FormEvent } from 'react';
import { useDispatch } from "react-redux";
import './UncontrolledForm.css'
import { FormFieldsNames } from "../../shared/types";
import { setValues } from "../../shared/store/slices/uncontrolledFormSlice";
import { useNavigate } from 'react-router';
import { convertFileToBase64 } from '../../features/convertFileToBase64';

function UncontrolledForm() {

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const formData = new FormData(event.currentTarget);
		const values = Object.fromEntries(formData.entries());
		const base64Picture = await convertFileToBase64(values.picture as File);
		
		dispatch(setValues({ ...values, picture: base64Picture }));
		navigate('/');
		// console.log(formData);
		// console.log(values);
	};

    return (
    	<>
			<div className="uncontrolledForm__wrapper">
				<h1 className="uncontrolledForm__heading">Uncontrolled Form.</h1>
				<div className='form__wrapper'>
					<form className='uncontrolledForm' onSubmit={handleSubmit}>
						<div className='input__wrapper column'>
							<label className='input__label' htmlFor='name-input'>Name</label>
							<input name={FormFieldsNames.Name} className='input__text' id='name-input' type='text'></input>
						</div>
						<div className='input__wrapper column'>
							<label className='input__label' htmlFor='age-input'>Age</label>
							<input name={FormFieldsNames.Age} className='input__text'  id='age-input' type='text'></input>
						</div>
						<div className='input__wrapper column'>
							<label className='input__label' htmlFor='email-input'>E-mail</label>
							<input name={FormFieldsNames.Email} className='input__text' id='email-input' type='text'></input>
						</div>
						<div className='input__wrapper column'>
							<label className='input__label' htmlFor='password-input'>Password</label>
							<input name={FormFieldsNames.Password} className='input__text' id='password-input' type='text'></input>
						</div>
						<div className='input__wrapper column'>
							<label className='input__label' htmlFor='confirm-password-input'>Confirm password</label>
							<input name={FormFieldsNames.ConfirmPassword} className='input__text' id='confirm-password-input' type='text'></input>
						</div>
						<div className='input__wrapper column'>
							<label className='input__label' htmlFor='gender-input'>Gender</label>
							<select name={FormFieldsNames.Gender} className='input__text' id='gender-input'>
								<option value={''}>Select your gender...</option>
								<option value={'male'}>Male</option>
								<option value={'female '}>Female</option>
							</select>
						</div>
						<div className='input__wrapper column'>
							<label className='input__label' htmlFor='file-input'>Upload file</label>
							<input name={FormFieldsNames.Picture} className='input__text' id='file-input' type="file" accept="image/png, image/jpeg"></input>
						</div>
						<div className='input__wrapper column'>
							<label className='input__label' htmlFor='country-input'>Country</label>
							<input name={FormFieldsNames.Country} className='input__text' id='country-input' type="text"></input>
						</div>
						<div className='input__wrapper row'>
							<label className='input__label' htmlFor='acceptTerms-input'>Accept Terms</label>
							<input name={FormFieldsNames.AcceptTerms} id='acceptTerms-input' type="checkbox"></input>
						</div>
						<button className={`submit__button`} type="submit">
							Send Form
						</button>
					</form>
				</div>
			</div>
      	</>
    )
}
  
export default UncontrolledForm;
  