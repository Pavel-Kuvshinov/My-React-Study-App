export enum FormFieldsNames {
    Name = "name",
    Age = "age",
    Email = "email",
    Gender = "gender",
    Password = "password",
    ConfirmPassword = "confirmPassword",
    Picture = "picture",
    Country = "country",
    AcceptTerms = "acceptTerms",
}
  
  export interface FormValues {
    name: string;
    age: number;
    email: string;
    password: string;
    confirmPassword: string;
    gender: string;
    picture: FileList | File | string;
    country: string;
    acceptTerms: "on" | boolean | "";
}
  