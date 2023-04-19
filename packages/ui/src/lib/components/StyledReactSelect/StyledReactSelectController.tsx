import { Control, Controller, FieldValues } from 'react-hook-form';
import StyledReactSelect from './StyledReactSelect';

type StyledReactSelectControllerProps = {
  id: string;
  control?: Control<FieldValues> | undefined;
  options: string[];
};

export default function StyledReactSelectController({
  id,
  control,
  options,
}: StyledReactSelectControllerProps) {
  return (
    <Controller
      control={control}
      name={id}
      render={({
        field: { onChange, onBlur, value, ref },
        formState,
        fieldState,
      }) => (
        <StyledReactSelect
          options={options}
          value={options.find((option) => option === value)}
          onChange={(option) => onChange(option)}
        />
      )}
      rules={{ required: true }}
    />
  );
}
