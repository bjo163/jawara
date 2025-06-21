/**
 * FORM VALIDATION HOOK
 * ====================
 *
 * React hook untuk real-time form validation dan error handling.
 */

import { useState, useCallback, useEffect } from "react";
import {
  validateField,
  validateForm,
  getConditionalSchema,
  formatPhoneNumber,
  validateEmailDomain,
  type FieldValidationResult,
} from "@/lib/form-validation";

interface FormField {
  value: string;
  error?: string;
  warning?: string;
  isValid: boolean;
  isTouched: boolean;
}

interface FormState {
  [key: string]: FormField;
}

interface UseFormValidationOptions {
  realTimeValidation?: boolean;
  validateOnBlur?: boolean;
  formatPhoneNumbers?: boolean;
}

export function useFormValidation(initialData: Record<string, string>, options: UseFormValidationOptions = {}) {
  const { realTimeValidation = true, validateOnBlur = true, formatPhoneNumbers = true } = options;

  // Initialize form state
  const [formState, setFormState] = useState<FormState>(() => {
    const initialState: FormState = {};
    Object.keys(initialData).forEach((key) => {
      initialState[key] = {
        value: initialData[key] || "",
        isValid: true,
        isTouched: false,
      };
    });
    return initialState;
  });

  const [isFormValid, setIsFormValid] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);

  // Get current schema based on form data
  const getCurrentSchema = useCallback(() => {
    const jenispesan = formState.jenispesan?.value || "";
    return getConditionalSchema(jenispesan);
  }, [formState.jenispesan?.value]);

  // Validate single field
  const validateSingleField = useCallback(
    (fieldName: string, value: string, shouldMarkTouched = true): FieldValidationResult => {
      const schema = getCurrentSchema();
      const context = Object.fromEntries(Object.entries(formState).map(([key, field]) => [key, field.value]));

      const result = validateField(fieldName, value, schema, context);

      if (shouldMarkTouched) {
        setFormState((prev) => ({
          ...prev,
          [fieldName]: {
            ...prev[fieldName],
            value,
            error: result.error,
            warning: result.warning,
            isValid: result.isValid,
            isTouched: true,
          },
        }));
      }

      return result;
    },
    [formState, getCurrentSchema]
  );

  // Update field value with optional validation
  const updateField = useCallback(
    (fieldName: string, value: string) => {
      let processedValue = value;

      // Auto-format phone numbers
      if (formatPhoneNumbers && fieldName === "whatsapp") {
        processedValue = formatPhoneNumber(value);
      }

      // Real-time validation
      if (realTimeValidation && formState[fieldName]?.isTouched) {
        validateSingleField(fieldName, processedValue, false);
      } else {
        setFormState((prev) => ({
          ...prev,
          [fieldName]: {
            ...prev[fieldName],
            value: processedValue,
          },
        }));
      }
    },
    [realTimeValidation, formatPhoneNumbers, formState, validateSingleField]
  );

  // Handle field blur
  const handleFieldBlur = useCallback(
    (fieldName: string) => {
      if (validateOnBlur) {
        const value = formState[fieldName]?.value || "";
        validateSingleField(fieldName, value);
      }
    },
    [validateOnBlur, formState, validateSingleField]
  );

  // Handle special validations
  const handleEmailValidation = useCallback((email: string) => {
    if (email && !validateEmailDomain(email)) {
      setFormState((prev) => ({
        ...prev,
        email: {
          ...prev.email,
          warning: "Domain email tidak umum, pastikan email benar",
        },
      }));
    }
  }, []);

  // Validate entire form
  const validateAllFields = useCallback(() => {
    const formData = Object.fromEntries(Object.entries(formState).map(([key, field]) => [key, field.value]));

    const result = validateForm(formData);

    // Update all field states with validation results
    setFormState((prev) => {
      const newState = { ...prev };

      // Clear previous errors
      Object.keys(newState).forEach((key) => {
        newState[key] = {
          ...newState[key],
          error: undefined,
          isValid: true,
          isTouched: true,
        };
      });

      // Set new errors
      if (result.errors) {
        Object.entries(result.errors).forEach(([fieldName, error]) => {
          if (newState[fieldName]) {
            newState[fieldName] = {
              ...newState[fieldName],
              error: error as string,
              isValid: false,
            };
          }
        });
      }

      return newState;
    });

    setIsFormValid(result.isValid);
    return result;
  }, [formState]);

  // Check form validity on field changes
  useEffect(() => {
    if (hasSubmitted || realTimeValidation) {
      const allFieldsValid = Object.values(formState).every((field) => field.isValid);
      setIsFormValid(allFieldsValid);
    }
  }, [formState, hasSubmitted, realTimeValidation]);

  // Handle form submission
  const handleSubmit = useCallback(() => {
    setHasSubmitted(true);
    return validateAllFields();
  }, [validateAllFields]);

  // Reset form
  const resetForm = useCallback(() => {
    setFormState((prev) => {
      const newState = { ...prev };
      Object.keys(newState).forEach((key) => {
        newState[key] = {
          value: initialData[key] || "",
          isValid: true,
          isTouched: false,
          error: undefined,
          warning: undefined,
        };
      });
      return newState;
    });
    setIsFormValid(false);
    setHasSubmitted(false);
  }, [initialData]);

  // Get form data
  const getFormData = useCallback(() => {
    return Object.fromEntries(Object.entries(formState).map(([key, field]) => [key, field.value]));
  }, [formState]);

  // Check if field should show error
  const shouldShowError = useCallback(
    (fieldName: string) => {
      const field = formState[fieldName];
      return field && (field.isTouched || hasSubmitted) && field.error;
    },
    [formState, hasSubmitted]
  );

  return {
    formState,
    updateField,
    handleFieldBlur,
    handleEmailValidation,
    validateAllFields,
    handleSubmit,
    resetForm,
    getFormData,
    shouldShowError,
    isFormValid,
    hasSubmitted,
  };
}
