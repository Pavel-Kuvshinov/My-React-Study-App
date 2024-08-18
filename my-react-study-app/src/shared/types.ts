export enum FormFieldsNames {
    Name = 'name',
    Age = 'age',
    Email = 'email',
    Password = 'password',
    ConfirmPassword = 'confirmPassword',
    Gender = 'gender',
    Picture = 'picture',
    Country = 'country',
    AcceptTerms = 'acceptTerms',
}

export interface DataFormStore {
    name: string;
    age: number;
    email: string;
    password: string;
    confirmPassword: string;
    gender: string;
    picture: string;
    country: string;
    acceptTerms: boolean;
}

export interface DataFormValues {
    name: string;
    age: number;
    email: string;
    password: string;
    confirmPassword: string;
    gender: string;
    picture: File;
    country: string;
    acceptTerms: boolean;
}

export interface DataValidationErrors {
    name?: { message: string };
    age?: { message: string };
    email?: { message: string };
    password?: { message: string };
    confirmPassword?: { message: string };
    acceptTerms?: { message: string };
    picture?: { message: string };
    country?: { message: string };
    gender?: { message: string };
}
