import * as yup from 'yup';

const MAX_SIZE_BYTES = 1024 * 1024;
const VALID_TYPES = ['image/jpeg', 'image/png'];

export const validationSchema = yup.object().shape({
    name: yup
        .string()
        .matches(/^[A-ZА-Я]/, 'The name must begin with a capital letter.')
        .required('The name is required.'),
    age: yup.string().typeError('Age must be a number').required('The age is required.'),
    email: yup.string().email('Invalid email address').required('Email is required'),
    password: yup
        .string()
        .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
        .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
        .matches(/\d/, 'Password must contain at least one number')
        .matches(/[!@#$%^&*(),.?":{}|<>]/, 'Password must contain at least one special character')
        .required('Password is required'),
    confirmPassword: yup
        .string()
        .oneOf([yup.ref('password'), undefined], 'Passwords must match')
        .required('Confirm Password is required'),
    gender: yup.string().required('Gender is required'),
    picture: yup
        .mixed<File>()
        .required('A picture is required')
        .transform((value) => {
            return value instanceof FileList ? value[0] : value;
        })
        .test('fileSize', 'File size too large', (value) => {
            if (!value) return true;

            return value.size <= MAX_SIZE_BYTES;
        })
        .test('fileType', 'Unsupported file format', (value) => {
            if (!value) return true;

            return VALID_TYPES.includes(value.type);
        })
        .test('fileExists', 'Picture is required', (value) => {
            return value && value instanceof File && value.size > 0 && value.name !== '';
        }),
    country: yup.string().required('Country is required'),
    acceptTerms: yup
        .boolean()
        .oneOf([true], 'You must accept the terms and conditions')
        .required('You must accept the terms and conditions'),
});

// export const validationSchema = yup
//     .object({
//         name: yup
//             .string()
//             .matches(/^[A-ZА-Я]/, 'The name must begin with a capital letter.')
//             .required('The name is required.'),
//         age: yup
//             .string()
//             .typeError("Age must be a number")
//             .required('The age is required.'),
//         email: yup
//             .string()
//             .email("Invalid email address")
//             .required("Email is required"),
//         password: yup.string()
//             .matches(/[a-z]/, "Password must contain at least one lowercase letter")
//             .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
//             .matches(/\d/, "Password must contain at least one number")
//             .matches(/[!@#$%^&*(),.?":{}|<>]/, "Password must contain at least one special character")
//             .required("Password is required"),
//         confirmPassword: yup.string()
//             .oneOf([yup.ref("password"), undefined], "Passwords must match")
//             .required("Confirm Password is required"),
//         gender: yup
//             .string()
//             .required("Gender is required"),
//         picture: yup
//             .mixed<File>()
//             .required('A picture is required')
//             .transform(value => {
//                 return value instanceof FileList ? value[0] : value;
//             })
//             .test("fileSize", "File size too large", (value) => {
//                 if (!value) return true;

//                 return value.size <= MAX_SIZE_BYTES;
//             })
//             .test("fileType", "Unsupported file format", (value) => {
//                 if (!value) return true;

//                 return VALID_TYPES.includes(value.type);
//             })
//             .test("fileExists", "Picture is required", (value) => {
//                 return value && value instanceof File && value.size > 0 && value.name !== "";
//             }),
//         country: yup
//             .string()
//             .required("Country is required"),
//         acceptTerms: yup
//             .boolean()
//             .oneOf([true], 'You must accept the terms and conditions')
//             .required('You must accept the terms and conditions'),
//         })
//     .required();
