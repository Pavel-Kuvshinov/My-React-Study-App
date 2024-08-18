import './ReactHookForm.css'

import { FormEvent } from 'react';
import { useDispatch } from "react-redux";
import { useForm } from 'react-hook-form';

import { FormFieldsNames, FormValues } from "../../shared/types";
import { setValues } from "../../shared/store/slices/reactHookFormSlice";
import { useNavigate } from 'react-router';
import { convertFileToBase64 } from '../../features/convertFileToBase64';

function ReactHookForm() {

    const {
        register,
        handleSubmit,
        watch,
    } = useForm<FormValues>({
        mode: 'onChange',
    });

	const dispatch = useDispatch();
	const navigate = useNavigate();

    const onSubmit = async (data: FormValues) => {

		const pictures = data.picture as FileList;
		const base64Picture = await convertFileToBase64(pictures[0] as File);
        dispatch(setValues({ ...data, picture: base64Picture }));
        navigate('/');
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
						</div>
						<div className='input__wrapper column'>
							<label className='input__label' htmlFor='age-input'>Age</label>
							<input {...register('age')} name={FormFieldsNames.Age} className='input__text'  id='age-input' type='text'></input>
						</div>
						<div className='input__wrapper column'>
							<label className='input__label' htmlFor='email-input'>E-mail</label>
							<input {...register('email')} name={FormFieldsNames.Email} className='input__text' id='email-input' type='text'></input>
						</div>
						<div className='input__wrapper column'>
							<label className='input__label' htmlFor='password-input'>Password</label>
							<input {...register('password')} name={FormFieldsNames.Password} className='input__text' id='password-input' type='text'></input>
						</div>
						<div className='input__wrapper column'>
							<label className='input__label' htmlFor='confirm-password-input'>Confirm password</label>
							<input {...register('confirmPassword')} name={FormFieldsNames.ConfirmPassword} className='input__text' id='confirm-password-input' type='text'></input>
						</div>
						<div className='input__wrapper column'>
							<label className='input__label' htmlFor='gender-input'>Gender</label>
							<select {...register('gender')} name={FormFieldsNames.Gender} className='input__text' id='gender-input'>
								<option value={''}>Select your gender...</option>
								<option value={'male'}>Male</option>
								<option value={'female '}>Female</option>
							</select>
						</div>
						<div className='input__wrapper column'>
							<label className='input__label' htmlFor='file-input'>Upload file</label>
							<input {...register('picture')} name={FormFieldsNames.Picture} className='input__text' id='file-input' type="file" accept="image/png, image/jpeg"></input>
						</div>
						<div className='input__wrapper column'>
							<label className='input__label' htmlFor='country-input'>Country</label>
							<input {...register('country')} name={FormFieldsNames.Country} className='input__text' id='country-input' type="text"></input>
						</div>
						<div className='input__wrapper row'>
							<label className='input__label' htmlFor='acceptTerms-input'>Accept Terms</label>
							<input {...register('acceptTerms')} name={FormFieldsNames.AcceptTerms} id='acceptTerms-input' type="checkbox"></input>
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
  
export default ReactHookForm;
  