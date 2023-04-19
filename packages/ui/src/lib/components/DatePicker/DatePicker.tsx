import React, { useState } from 'react';
import Datepicker from 'react-tailwindcss-datepicker';
import { DateValueType } from 'react-tailwindcss-datepicker/dist/types';

export default function DatePicker() {
  const [value, setValue] = useState<DateValueType>({
    startDate: null,
    endDate: null,
  });

  function handleValueChange(newValue: DateValueType) {
    console.log('newValue:', newValue);
    setValue(newValue);
  }

  return (
    <Datepicker
      i18n={'en-gb'}
      useRange={false}
      asSingle={true}
      value={value}
      onChange={handleValueChange}
    />
  );
}
