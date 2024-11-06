import { TextField } from "@mui/material";
import { inputFieldProps } from "./inputProps";

/* Note: check what is the difference between these two and why the first one is not working
export function InputField({props}:{props:inputFieldProps}) 
export function InputField(props:inputFieldProps) 
*/
export function InputField(props: inputFieldProps) {
  return (
    <div>
      <TextField {...props} />
    </div>
  );
}
