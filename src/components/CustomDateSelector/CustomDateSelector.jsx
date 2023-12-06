import { Box, Typography, MenuItem, FormControl, Stack, InputLabel } from "@mui/material";
import PropTypes from "prop-types";
import { useField } from "formik";
import { getDaysArray, getYearsArray, monthsArray } from "@/utils/date";
import { CustomSelectSX, LegendSX, TextSX } from "./styleSX";

export const CustomDateSelector = ({
  required,
  dayId,
  monthId,
  yearId,
  dayLabel,
  monthLabel,
  yearLabel,
}) => {
  const dayField = useField(dayId);
  const monthField = useField(monthId);
  const yearField = useField(yearId);

  const chosenYear = yearField[0].value;
  const chosenMonth = monthField[0].value;

  const yearsArray = getYearsArray();
  const daysArray = getDaysArray(chosenYear, chosenMonth);

  return (
    <Box component="fieldset" sx={{ border: "none" }}>
      <LegendSX component="legend">
        Date of birth
        {required && (
          <Typography component="span" sx={{ whiteSpace: "nowrap" }}>
            *
          </Typography>
        )}
      </LegendSX>
      <TextSX>
        This will not be shown publicly. Confirm your own age, even if this account is for
        a business, a pet, or something else.
      </TextSX>
      <Stack direction="row" spacing={2}>
        <DateSelect
          id={monthId}
          label={monthLabel}
          array={monthsArray}
          field={monthField[0]}
          meta={monthField[1]}
          helpers={monthField[2]}
          required={required}
        />
        <DateSelect
          id={dayId}
          label={dayLabel}
          array={daysArray}
          field={dayField[0]}
          meta={dayField[1]}
          helpers={dayField[2]}
          required={required}
        />
        <DateSelect
          id={yearId}
          label={yearLabel}
          array={yearsArray}
          field={yearField[0]}
          meta={yearField[1]}
          helpers={yearField[2]}
          required={required}
        />
      </Stack>
    </Box>
  );
};

const DateSelect = ({ field, meta, label, id, array, required }) => {
  const handleRenderValue = (selected) => {
    if (!selected) return label;
    if (id === "month") return array[selected - 1];
    return selected;
  };

  const selectedValue = field.value ?? "";

  return (
    <FormControl required={required} sx={{ flexGrow: 1 }}>
      <InputLabel htmlFor={id}>{label}</InputLabel>
      <CustomSelectSX
        id={id}
        name={id}
        onChange={(value) => field.onChange(field.name, value)}
        label={label}
        renderValue={handleRenderValue}
        error={meta.touched && meta.error ? true : false}
        {...field}
        value={selectedValue}>
        <MenuItem disabled value="">
          <em>{label}</em>
        </MenuItem>
        {array.map((item, index) => (
          <MenuItem key={item} value={id === "month" ? index + 1 : item}>
            {item}
          </MenuItem>
        ))}
      </CustomSelectSX>
    </FormControl>
  );
};

CustomDateSelector.propTypes = {
  dayId: PropTypes.string,
  monthId: PropTypes.string,
  yearId: PropTypes.string,
  dayLabel: PropTypes.string,
  monthLabel: PropTypes.string,
  yearLabel: PropTypes.string,
  required: PropTypes.bool,
};

DateSelect.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string,
  array: PropTypes.array,
  field: PropTypes.shape({
    name: PropTypes.string.isRequired,
    value: PropTypes.any,
    onChange: PropTypes.func.isRequired,
    onBlur: PropTypes.func.isRequired,
  }),
  meta: PropTypes.shape({
    touched: PropTypes.bool.isRequired,
    error: PropTypes.string,
  }),
  helpers: PropTypes.shape({
    setValue: PropTypes.func.isRequired,
    setTouched: PropTypes.func.isRequired,
  }),
  required: PropTypes.bool,
};
