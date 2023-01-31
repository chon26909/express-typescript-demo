import { body } from 'express-validator';

export const validateSignIn = () => [
    // username ต้องเป็น email
    body('username').isEmail().withMessage('Email is not valid'),
    // password ต้องมีความยาวอย่างน้อย 5 ตัวอักษร
    body('password').isLength({ min: 5 }).withMessage('Password must be at least 5 characters')
];
