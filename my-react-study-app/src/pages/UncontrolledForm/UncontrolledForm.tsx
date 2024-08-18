import { FormEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import * as yup from 'yup';
import './UncontrolledForm.css';
import { DataValidationErrors, FormFieldsNames } from '../../shared/types';
import { setValues } from '../../shared/store/slices/uncontrolledFormSlice';
import { useNavigate } from 'react-router';
import { validationSchema } from '../../shared/validationSchema';
import { convertFileToBase64 } from '../../features/convertFileToBase64';
import CountryInputAutocomplete from '../../widgets/CountriesInput/CountriesInput';

function UncontrolledForm() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [errors, setErrors] = useState<DataValidationErrors>({});
    const [isSubmit, setIsSubmit] = useState<boolean>(false);
    const [passwordLevel, setPasswordLevel] = useState<string>('');

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const values = Object.fromEntries(formData.entries());

        try {
            const newAcceptTerms = values.acceptTerms === 'on' ? true : false;
            const newValues = { ...values, acceptTerms: newAcceptTerms };
            await validationSchema.validate(newValues, { abortEarly: false });
            const base64Picture = await convertFileToBase64(values.picture as File);
            dispatch(setValues({ ...values, picture: base64Picture }));
            setErrors({});
            navigate('/');
        } catch (error) {
            console.log(values);
            if (error instanceof yup.ValidationError) {
                const errorsList: Record<string, { message: string }> = {};

                error.inner.forEach(({ path, message }) => {
                    if (path) {
                        errorsList[path] = { message };
                    }
                });
                setErrors(errorsList);
                setIsSubmit(true);
            }
        }
    };

    const handleChangeForm = () => {
        setErrors({});
        setIsSubmit(false);
    };

    const handlePasswordChange = (e: FormEvent) => {
        const inputElement = e.target as HTMLInputElement;
        if (inputElement.value.length === 0) {
            setPasswordLevel('');
        } else if (inputElement.value.length <= 6) {
            setPasswordLevel('week');
        } else if (inputElement.value.length > 6 && inputElement.value.length <= 12) {
            setPasswordLevel('medium');
        } else if (inputElement.value.length > 12) {
            setPasswordLevel('hard');
        }
    };

    return (
        <>
            <div className="uncontrolledForm__wrapper">
                <h1 className="uncontrolledForm__heading">Uncontrolled Form.</h1>
                <div className="form__wrapper">
                    <form className="uncontrolledForm" onSubmit={handleSubmit} onChange={handleChangeForm}>
                        <div className="input__wrapper column">
                            <label className="input__label" htmlFor="name-input">
                                Name
                            </label>
                            <input
                                name={FormFieldsNames.Name}
                                className="input__text"
                                id="name-input"
                                type="text"
                            ></input>
                            <p className="input__error">{errors.name ? errors.name.message : ''}</p>
                        </div>
                        <div className="input__wrapper column">
                            <label className="input__label" htmlFor="age-input">
                                Age
                            </label>
                            <input
                                name={FormFieldsNames.Age}
                                className="input__text"
                                id="age-input"
                                type="number"
                            ></input>
                            <p className="input__error">{errors.age ? errors.age.message : ''}</p>
                        </div>
                        <div className="input__wrapper column">
                            <label className="input__label" htmlFor="email-input">
                                E-mail
                            </label>
                            <input
                                name={FormFieldsNames.Email}
                                className="input__text"
                                id="email-input"
                                type="email"
                            ></input>
                            <p className="input__error">{errors.email ? errors.email.message : ''}</p>
                        </div>
                        <div className="input__wrapper column">
                            <label className="input__label" htmlFor="password-input">
                                <span>Password</span>
                                <span className={`input__label_password ${passwordLevel}`}>{passwordLevel}</span>
                            </label>
                            <input
                                onChange={handlePasswordChange}
                                name={FormFieldsNames.Password}
                                className="input__text"
                                id="password-input"
                                type="password"
                            ></input>
                            <p className="input__error">{errors.password ? errors.password.message : ''}</p>
                        </div>
                        <div className="input__wrapper column">
                            <label className="input__label" htmlFor="confirm-password-input">
                                Confirm password
                            </label>
                            <input
                                name={FormFieldsNames.ConfirmPassword}
                                className="input__text"
                                id="confirm-password-input"
                                type="password"
                            ></input>
                            <p className="input__error">
                                {errors.confirmPassword ? errors.confirmPassword.message : ''}
                            </p>
                        </div>
                        <div className="input__wrapper column">
                            <label className="input__label" htmlFor="gender-input">
                                Gender
                            </label>
                            <select
                                name={FormFieldsNames.Gender}
                                className="input__text"
                                defaultValue=""
                                id="gender-input"
                            >
                                <option value={''} disabled>
                                    Select your gender...
                                </option>
                                <option value={'male'}>Male</option>
                                <option value={'female '}>Female</option>
                            </select>
                            <p className="input__error">{errors.gender ? errors.gender.message : ''}</p>
                        </div>
                        <div className="input__wrapper column">
                            <label className="input__label" htmlFor="file-input">
                                Upload file
                            </label>
                            <input
                                name={FormFieldsNames.Picture}
                                className="input__text"
                                id="file-input"
                                type="file"
                                accept="image/png, image/jpeg"
                            ></input>
                            <p className="input__error">{errors.picture ? errors.picture.message : ''}</p>
                        </div>
                        <CountryInputAutocomplete name={FormFieldsNames.Country} errors={errors} />
                        <div className="input__wrapper row">
                            <label className="input__label" htmlFor="acceptTerms-input">
                                Accept Terms
                            </label>
                            <input name={FormFieldsNames.AcceptTerms} id="acceptTerms-input" type="checkbox"></input>
                            <p className="input__error">{errors.acceptTerms ? errors.acceptTerms.message : ''}</p>
                        </div>
                        <button className={`submit__button`} type="submit" disabled={isSubmit}>
                            Send Form
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default UncontrolledForm;
