// Submit button becomes grey (and disabled) during form submission.
// It remains grey until the submission is complete.
// This prevents double submissions and provides visual feedback to the user.

"use client"
import { useFormStatus } from "react-dom";
export const Submit = () => {
    // Grabs the pending boolean that becomes true when the form is being submitted and false when it is not.
    const {pending} = useFormStatus();
    return(
         <button
        type="submit"
        className="block w-full p-2 text-white bg-blue-500 rounded disabled:bg-gray-500"
        disabled = {pending}
      >
        Add Product
      </button>
    )
}