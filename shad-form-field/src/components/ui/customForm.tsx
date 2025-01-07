import { Form, FormControl, FormField, FormLabel, FormItem } from "./form";
import CustomInput from "./customInput";
import { useForm } from "react-hook-form";

export default function CustomForm() {
  const form = useForm({
    defaultValues: {
      password: "",
    },
  });
  return (
    <Form {...form}>
      <FormField
        control={form.control}
        name="password"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Password</FormLabel>
            <FormControl>
              <CustomInput {...field} />
            </FormControl>
          </FormItem>
        )}
      />
    </Form>
  );
}
