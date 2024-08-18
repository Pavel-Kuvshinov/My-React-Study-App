import './SelectInput.css';

import { FC, InputHTMLAttributes } from 'react';
import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { DataFormValues, DataValidationErrors } from '../../shared/types.ts';

interface CountryAutocompleteProps extends InputHTMLAttributes<HTMLSelectElement> {
    name: keyof DataFormValues;
    label: string;
    coverClass: string;
    errors: DataValidationErrors | FieldErrors<DataFormValues>;
    register?: UseFormRegister<DataFormValues>;
}

const SelectInput: FC<CountryAutocompleteProps> = ({ name, errors, register, coverClass, label }) => {
    const props = register ? { ...register(name) } : {};

    return (
        <div className={coverClass}>
            <label className="input__label" htmlFor={`${name}-input`}>
                {label}
            </label>
            <select {...props} name={name} className="input__text" defaultValue="" id={`${name}-input`}>
                <option value={''} disabled>
                    Select your gender...
                </option>
                <option value={'male'}>Male</option>
                <option value={'female '}>Female</option>
            </select>
            <p className="input__error">{errors[name] ? errors[name].message : ''}</p>
        </div>
    );
};

export default SelectInput;
