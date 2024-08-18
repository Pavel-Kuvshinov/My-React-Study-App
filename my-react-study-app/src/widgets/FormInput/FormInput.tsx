import './FormInput.css';

import { FC, InputHTMLAttributes } from 'react';
import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { DataFormValues, DataValidationErrors } from '../../shared/types.ts';

interface CountryAutocompleteProps extends InputHTMLAttributes<HTMLSelectElement> {
    name: keyof DataFormValues;
    label: string;
    type: string;
    accept?: string;
    coverClass: string;
    errors: DataValidationErrors | FieldErrors<DataFormValues>;
    register?: UseFormRegister<DataFormValues>;
}

const FormInput: FC<CountryAutocompleteProps> = ({ name, errors, register, coverClass, label, type, accept }) => {
    const props = register ? { ...register(name) } : {};

    return (
        <div className={coverClass}>
            <label className="input__label" htmlFor={`${name}-input`}>
                {label}
            </label>
            <input
                {...props}
                name={name}
                className="input__text"
                id={`${name}-input`}
                type={type}
                accept={accept}
            ></input>
            <p className="input__error">{errors[name] ? errors[name].message : ''}</p>
        </div>
    );
};

export default FormInput;
