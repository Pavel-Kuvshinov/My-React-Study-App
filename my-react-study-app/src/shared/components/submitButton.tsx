import './submitButton.css';

import { FC } from 'react';

interface SubmitButtonProps {
    isDisabled: boolean;
}

const SubmitButton: FC<SubmitButtonProps> = ({ isDisabled }) => {
    return (
        <button className="submit__button" type="submit" disabled={isDisabled as boolean}>
            Send Form
        </button>
    );
};

export default SubmitButton;
