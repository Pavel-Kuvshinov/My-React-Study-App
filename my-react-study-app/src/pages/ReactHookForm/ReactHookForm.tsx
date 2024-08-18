import './ReactHookForm.css'

import { useDispatch } from "react-redux";
import { useForm } from 'react-hook-form';

import { FormFieldsNames, DataFormValues } from "../../shared/types";
import { setValues } from "../../shared/store/slices/reactHookFormSlice";
import { useNavigate } from 'react-router';
import { convertFileToBase64 } from '../../features/convertFileToBase64';
import { yupResolver } from '@hookform/resolvers/yup';
import { validationSchema } from '../../shared/validationSchema';
import { FormEvent, useState } from 'react';

function ReactHookForm() {

    const {
        register,
        handleSubmit,
		formState: { errors, isValid },
    } = useForm<DataFormValues>({
        mode: 'all',
		resolver: yupResolver(validationSchema),
    });

	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [passwordLevel, setPasswordLevel] = useState<string>('');

    const onSubmit = async (data: DataFormValues) => {
		console.log('send')

		const picture = data.picture as File;
		const base64Picture = await convertFileToBase64(picture);
        dispatch(setValues({ ...data, picture: base64Picture }));
        navigate('/');
    }

	const handlePasswordChange = (e: FormEvent) => {
		const inputElement = e.target as HTMLInputElement;
		if (inputElement.value.length === 0) {
			setPasswordLevel('')
		} else if (inputElement.value.length <= 6) {
			setPasswordLevel('week')
		} else if (inputElement.value.length > 6 && inputElement.value.length <= 12) {
			setPasswordLevel('medium')
		} else if (inputElement.value.length > 12 ) {
			setPasswordLevel('hard')
		}
	}

    return (
    	<>
			<div className="uncontrolledForm__wrapper">
				<h1 className="uncontrolledForm__heading">React Hook Form.</h1>
				<div className='form__wrapper'>
					<form className='uncontrolledForm' onSubmit={handleSubmit(onSubmit)}>
						<div className='input__wrapper column'>
							<label className='input__label' htmlFor='name-input'>Name</label>
							<input {...register('name')} name={FormFieldsNames.Name} className='input__text' id='name-input' type='text'></input>
							<p className='input__error'>{ errors.name ? errors.name.message : ''}</p>
						</div>
						<div className='input__wrapper column'>
							<label className='input__label' htmlFor='age-input'>Age</label>
							<input {...register('age')} name={FormFieldsNames.Age} className='input__text'  id='age-input' min={0} type='number'></input>
							<p className='input__error'>{ errors.age ? errors.age.message : ''}</p>
						</div>
						<div className='input__wrapper column'>
							<label className='input__label' htmlFor='email-input'>E-mail</label>
							<input {...register('email')} name={FormFieldsNames.Email} className='input__text' id='email-input' type='email'></input>
							<p className='input__error'>{ errors.email ? errors.email.message : ''}</p>
						</div>
						<div className='input__wrapper column'>
							<label className='input__label' htmlFor='password-input'><span>Password</span><span className={`input__label_password ${passwordLevel}`}>{passwordLevel}</span></label>
							<input onChange={handlePasswordChange} name={FormFieldsNames.Password} className='input__text' id='password-input' type='password'></input>
							<p className='input__error'>{ errors.password ? errors.password.message : ''}</p>
						</div>
						<div className='input__wrapper column'>
							<label className='input__label' htmlFor='confirm-password-input'>Confirm password</label>
							<input {...register('confirmPassword')} name={FormFieldsNames.ConfirmPassword} className='input__text' id='confirm-password-input' type='password'></input>
							<p className='input__error'>{ errors.confirmPassword ? errors.confirmPassword.message : ''}</p>
						</div>
						<div className='input__wrapper column'>
							<label className='input__label' htmlFor='gender-input'>Gender</label>
							<select {...register('gender')} name={FormFieldsNames.Gender} defaultValue="" className='input__text' id='gender-input'>
								<option value={''} disabled>Select your gender...</option>
								<option value={'male'}>Male</option>
								<option value={'female '}>Female</option>
							</select>
							<p className='input__error'>{ errors.gender ? errors.gender.message : ''}</p>
						</div>
						<div className='input__wrapper column'>
							<label className='input__label' htmlFor='file-input'>Upload file</label>
							<input {...register('picture')} name={FormFieldsNames.Picture} className='input__text' id='file-input' type="file" accept="image/png, image/jpeg"></input>
							<p className='input__error'>{ errors.picture ? errors.picture.message : ''}</p>
						</div>
						<div className='input__wrapper column'>
							<label className='input__label' htmlFor='country-input'>Country</label>
							<input {...register('country')} name={FormFieldsNames.Country} className='input__text' id='country-input' type="text"></input>
							<p className='input__error'>{ errors.country ? errors.country.message : ''}</p>
						</div>
						
						<div className='input__wrapper row'>
							<label className='input__label' htmlFor='acceptTerms-input'>Accept Terms</label>
							<input {...register('acceptTerms')} name={FormFieldsNames.AcceptTerms} id='acceptTerms-input' type="checkbox"></input>
							<p className='input__error'>{ errors.acceptTerms ? errors.acceptTerms.message : ''}</p>
						</div> 
						
						<button disabled={!isValid} className={`submit__button`} type="submit">
							Send Form
						</button>
					</form>
				</div>
			</div>
      	</>
    )
}
  
export default ReactHookForm;
  