import './PasswordInput.css';

import { FC, FormEvent, InputHTMLAttributes, useState } from 'react';
import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { DataFormValues, DataValidationErrors } from '../../shared/types.ts';

interface CountryAutocompleteProps extends InputHTMLAttributes<HTMLSelectElement> {
    name: keyof DataFormValues;
    label: string;
    type: string;
    coverClass: string;
    errors: DataValidationErrors | FieldErrors<DataFormValues>;
    register?: UseFormRegister<DataFormValues>;
}

const PasswordInput: FC<CountryAutocompleteProps> = ({ name, errors, register, coverClass, label, type }) => {
    const props = register ? { ...register(name) } : {};
    const [passwordLevel, setPasswordLevel] = useState<string>('');

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
        <div className={coverClass}>
            <label className="input__label" htmlFor={`${name}-input`}>
                <span>{label}</span>
                <span className={`input__label_password ${passwordLevel}`}>{passwordLevel}</span>
            </label>
            <input
                {...props}
                onChange={handlePasswordChange}
                name={name}
                className="input__text"
                id={`${name}-input`}
                type={type}
            ></input>
            <p className="input__error">{errors[name] ? errors[name].message : ''}</p>
        </div>
    );
};

export default PasswordInput;
