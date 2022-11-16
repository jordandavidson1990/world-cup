import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { useThemeContext } from "../context";

export const useSoulsList = () => {
  const { handleSubmit, control, register } = useForm();
  const [souls, setSouls] = useThemeContext();

  const router = useRouter();
  const onSubmit = (dataForm: any) => {
    setSouls(dataForm);
    router.push("/draw");
  };
  return { handleSubmit, onSubmit, control, register };
};
