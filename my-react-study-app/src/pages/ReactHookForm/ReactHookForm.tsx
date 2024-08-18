import './ReactHookForm.css';

import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';

import { FormFieldsNames, DataFormValues } from '../../shared/types';
import { setValues } from '../../shared/store/slices/reactHookFormSlice';
import { useNavigate } from 'react-router';
import { convertFileToBase64 } from '../../features/convertFileToBase64';
import { yupResolver } from '@hookform/resolvers/yup';
import { validationSchema } from '../../shared/validationSchema';
import CountryInputAutocomplete from '../../widgets/CountriesInput/CountriesInput';
import FormInput from '../../widgets/FormInput/FormInput';
import PasswordInput from '../../widgets/PasswordInput/PasswordInput';
import SelectInput from '../../widgets/SelectInput/SelectInput';
import SubmitButton from '../../shared/components/submitButton';

function ReactHookForm() {
    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
        setValue,
    } = useForm<DataFormValues>({
        mode: 'all',
        resolver: yupResolver(validationSchema),
    });

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onSubmit = async (data: DataFormValues) => {
        const picture = data.picture as File;
        const base64Picture = await convertFileToBase64(picture);
        dispatch(setValues({ ...data, picture: base64Picture }));
        navigate('/');
    };

    return (
        <>
            <div className="reactHookForm__wrapper">
                <h1 className="reactHookForm__heading">React Hook Form.</h1>
                <div className="form__wrapper">
                    <form className="reactHookForm" onSubmit={handleSubmit(onSubmit)}>
                        <FormInput
                            name={FormFieldsNames.Name}
                            label={'Name'}
                            type={'text'}
                            coverClass={'input__wrapper column'}
                            errors={errors}
                            register={register}
                        />
                        <FormInput
                            name={FormFieldsNames.Age}
                            label={'Age'}
                            type={'number'}
                            coverClass={'input__wrapper column'}
                            errors={errors}
                            register={register}
                        />
                        <FormInput
                            name={FormFieldsNames.Email}
                            label={'E-mail'}
                            type={'email'}
                            coverClass={'input__wrapper column'}
                            errors={errors}
                            register={register}
                        />
                        <PasswordInput
                            name={FormFieldsNames.Password}
                            label={'Password'}
                            type={'password'}
                            coverClass={'input__wrapper column'}
                            errors={errors}
                            register={register}
                        />
                        <FormInput
                            name={FormFieldsNames.ConfirmPassword}
                            label={'Confirm password'}
                            type={'password'}
                            coverClass={'input__wrapper column'}
                            errors={errors}
                            register={register}
                        />
                        <SelectInput
                            name={FormFieldsNames.Gender}
                            label={'Gender'}
                            coverClass={'input__wrapper column'}
                            errors={errors}
                            register={register}
                        />
                        <FormInput
                            name={FormFieldsNames.Picture}
                            label={'Upload file'}
                            type={'file'}
                            coverClass={'input__wrapper column'}
                            errors={errors}
                            accept="image/png, image/jpeg"
                            register={register}
                        />
                        <CountryInputAutocomplete
                            name={FormFieldsNames.Country}
                            errors={errors}
                            register={register}
                            setValue={setValue}
                        />
                        <FormInput
                            name={FormFieldsNames.AcceptTerms}
                            label={'Accept Terms'}
                            type={'checkbox'}
                            coverClass={'input__wrapper row'}
                            errors={errors}
                            register={register}
                        />
                        <SubmitButton isDisabled={!isValid} />
                    </form>
                </div>
            </div>
        </>
    );
}

export default ReactHookForm;
