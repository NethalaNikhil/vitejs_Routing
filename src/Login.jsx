import { useForm } from 'react-hook-form';
import { useState, Fragment } from 'react';

export default function Login() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [condition, setcondition] = useState(true);

    const userData = (data) => {
        console.log(data);
    }

    const passwordValue = watch('password');
    console.log(passwordValue);

    const compareValue = "1234";

    const validatePassword = (password) => {

        if (!/[A-Z]/.test(password)) {
            return "AtLeast one Capital Letter"
        }
        else if (!/[a-z]/.test(password)) {
            return "AtLeast one small Letter"
        }
        else if (!/[0-9]/.test(password)) {
            return "AtLeast one number"
        }
        else if (!/[@$!%*?&]/.test(password)) {
            return 'AtLeast one special character'
        }
        else{
            return true;
        }

    }

    return (
        <Fragment>
            {condition ? (
                <p>Condition is true</p>
            ) : (
                <p>Condition is false</p>
            )}

            <div>
                <div className="flex justify-between p-3 shadow mt-2 cursor-pointer">
                    <img className="ms-10" src="/Zoom_logo.svg" alt="Zoom Logo" />
                    <div className="flex justify-end space-x-5 ml-auto me-5">
                        <p className="ms-2">
                            <span>New to Zoom? </span>
                            <span className="text-blue-500 hover:underline underline-offset-1">Sign Up Free</span>
                        </p>
                        <p className="text-blue-500 hover:underline underline-offset-1">Support</p>
                        <p className="text-blue-500 hover:underline underline-offset-1">English</p>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div className="mx-20 my-20">
                        <img
                            src="https://file-paa.zoom.us/oshGx8mPSWOOfIfGy30uWQ/MS4yLli_xNhjUe0EHEfLkd_yf6gPSN_kgE3B1F9fqxe3JQma/e86161de-b5d2-4c2d-9bbd-35b0400672fa.png"
                            width={600}
                            alt="Zoom Promo"
                        />
                    </div>

                    <div className="mx-20 my-20">
                        <p className="font-semibold text-3xl ms-20">Sign in</p>
                        <form onSubmit={handleSubmit(userData)}>
                            <div className="mb-8 mt-4">
                                <input
                                    name="email"
                                    placeholder="Email Address"
                                    className="rounded border border-black p-2 pe-32"
                                    {...register('email', {
                                        required: {
                                            value: true,
                                            message: "Please enter your email address"
                                        },
                                        pattern: {
                                            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                            message: "Please enter a valid email address"
                                        }
                                    })}
                                />
                                {errors.email && <p className="text-red-500">{errors.email.message}</p>}
                            </div>

                            <div>
                                <input
                                    name="password"
                                    type="password"
                                    placeholder="Password"
                                    className="rounded border border-black p-2 pe-32"
                                    {...register('password', {
                                        required: {
                                            value: true,
                                            message: "Please enter your password",
                                        },
                                            minLength:{
                                                value:8,
                                                message:"min 8 characters",
                                            },
                                        validate:(password)=>validatePassword(password)
                                    })}
                                />
                                {errors.password && <p className="text-red-500">{errors.password.message}</p>}
                            </div>

                            <div className="text-blue-500 flex mt-10">
                                <p>Forgot password?</p>
                                <p className="ms-40">Help</p>
                            </div>

                            <div className="mt-4">
                                <button type="submit" className="rounded-lg text-white bg-blue-600 px-[134px] py-1">
                                    Sign in
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}
