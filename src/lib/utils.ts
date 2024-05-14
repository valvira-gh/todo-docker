import { ZodError } from "zod";

export type FormState = {
  message: string;
};

export const fromErrorToFormState = (error: unknown) => {
  // if validation error with Zod, return first error message
  if (error instanceof ZodError) {
    return {
      message: error.errors[0].message,
    };

    // if another error instance, return error message
    // e.g. database error
  } else if (error instanceof Error) {
    return {
      message: error.message,
    };

    // if not an error instance but something else crashed
    // return a generic error message
  } else {
    return {
      message: "An unknown error occurred. Please try again.",
    };
  }
};
