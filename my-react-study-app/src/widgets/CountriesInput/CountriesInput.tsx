import './CountriesInput.css';

import { FC, InputHTMLAttributes, useRef, useState } from 'react';
import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { RootState } from '../../shared/store/store.ts';
import { DataFormValues, DataValidationErrors } from '../../shared/types.ts';

interface CountryAutocompleteProps extends InputHTMLAttributes<HTMLSelectElement> {
    name: keyof DataFormValues;
    errors: DataValidationErrors | FieldErrors<DataFormValues>;
    register?: UseFormRegister<DataFormValues>;
}

const CountryInputAutocomplete: FC<CountryAutocompleteProps> = ({ name, errors, register }) => {
    const countries = useSelector((state: RootState) => state.countries);
    const inputRef = useRef<HTMLInputElement>(null);
    const [suggestions, setSuggestions] = useState<string[]>(countries);
    const [isFocused, setIsFocused] = useState<boolean>(false);

    const handleInputChange = () => {
        const inputValue = inputRef.current?.value || '';

        if (inputValue.trim() === '') {
            setSuggestions(countries);
        } else {
            const filteredSuggestions = countries.filter((country: string) =>
                country.toLowerCase().includes(inputValue.toLowerCase())
            );

            setSuggestions(filteredSuggestions);
        }
    };

    const handleSuggestionClick = (suggestion: string) => {
        if (inputRef.current) {
            inputRef.current.value = suggestion;
        }

        setSuggestions(countries);
        setIsFocused(false);
    };
    const props = register ? { ...register(name) } : {};

    return (
        <div className="input__wrapper column">
            <label className="input__label" htmlFor="country-input">
                Country
            </label>
            <input
                {...props}
                id="country-input"
                name={name}
                type="text"
                ref={inputRef}
                onChange={handleInputChange}
                className="input__text"
                autoComplete="off"
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
            />
            {isFocused && suggestions.length > 0 && (
                <ul className="suggestion_list">
                    {suggestions.map((item, index) => (
                        <li className="suggestion_item" key={index} onMouseDown={() => handleSuggestionClick(item)}>
                            {item}
                        </li>
                    ))}
                </ul>
            )}
            <p className="input__error">{errors.country ? errors.country.message : ''}</p>
        </div>
    );
};

export default CountryInputAutocomplete;
