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
import FormInput from '../../widgets/FormInput/FormInput';
import PasswordInput from '../../widgets/PasswordInput/PasswordInput';
import SelectInput from '../../widgets/SelectInput/SelectInput';

function UncontrolledForm() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [errors, setErrors] = useState<DataValidationErrors>({});
    const [isSubmit, setIsSubmit] = useState<boolean>(false);

    console.log(errors);

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

    return (
        <>
            <div className="uncontrolledForm__wrapper">
                <h1 className="uncontrolledForm__heading">Uncontrolled Form.</h1>
                <div className="form__wrapper">
                    <form className="uncontrolledForm" onSubmit={handleSubmit} onChange={handleChangeForm}>
                        <FormInput
                            name={FormFieldsNames.Name}
                            label={'Name'}
                            type={'text'}
                            coverClass={'input__wrapper column'}
                            errors={errors}
                        />
                        <FormInput
                            name={FormFieldsNames.Age}
                            label={'Age'}
                            type={'number'}
                            coverClass={'input__wrapper column'}
                            errors={errors}
                        />
                        <FormInput
                            name={FormFieldsNames.Email}
                            label={'E-mail'}
                            type={'email'}
                            coverClass={'input__wrapper column'}
                            errors={errors}
                        />
                        <PasswordInput
                            name={FormFieldsNames.Password}
                            label={'Password'}
                            type={'password'}
                            coverClass={'input__wrapper column'}
                            errors={errors}
                        />
                        <FormInput
                            name={FormFieldsNames.ConfirmPassword}
                            label={'Confirm password'}
                            type={'password'}
                            coverClass={'input__wrapper column'}
                            errors={errors}
                        />
                        <SelectInput
                            name={FormFieldsNames.Gender}
                            label={'Gender'}
                            coverClass={'input__wrapper column'}
                            errors={errors}
                        />
                        <FormInput
                            name={FormFieldsNames.Picture}
                            label={'Upload file'}
                            type={'file'}
                            coverClass={'input__wrapper column'}
                            errors={errors}
                            accept="image/png, image/jpeg"
                        />
                        <CountryInputAutocomplete name={FormFieldsNames.Country} errors={errors} />
                        <FormInput
                            name={FormFieldsNames.AcceptTerms}
                            label={'Accept Terms'}
                            type={'checkbox'}
                            coverClass={'input__wrapper row'}
                            errors={errors}
                        />
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
