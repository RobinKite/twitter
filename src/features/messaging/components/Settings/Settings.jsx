import { Stack, IconButton, Typography, Box, FormGroup } from "@mui/material";
import { FormControl, RadioGroup, FormLabel, Divider } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { ArrowBack } from "@/icons";
import { ReceptionPreference } from "@/features/messaging/constants";
import { Radio, Checkbox } from "@/features/messaging/components";
import { settingsSx, titleSx, headerSx, checkboxGroupSx, radioGroupSx } from "./styles";
import { settingTitleSx, settingDescriptionSx, settingWrapperSx } from "./styles";

export const Settings = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState(ReceptionPreference.VERIFIED);

  const handleRadioChange = ({ target }) => {
    setValue(target.value);
  };

  return (
    <Stack sx={settingsSx}>
      <Stack sx={headerSx}>
        <IconButton onClick={() => navigate("/messages")}>
          <ArrowBack size={20} />
        </IconButton>
        <Typography sx={titleSx}>Direct Messages</Typography>
      </Stack>
      <Box>
        <FormControl sx={settingWrapperSx}>
          <FormLabel>
            <Typography sx={settingTitleSx}>Allow message requests from:</Typography>
            <Typography sx={settingDescriptionSx}>
              People you follow will always be able to message you.
            </Typography>
          </FormLabel>
          <RadioGroup value={value} onChange={handleRadioChange} sx={radioGroupSx}>
            <Radio labelText="No one" value={ReceptionPreference.NONE} />
            <Radio labelText="Verified users" value={ReceptionPreference.VERIFIED} />
            <Radio labelText="Everyone" value={ReceptionPreference.ALL} />
          </RadioGroup>
        </FormControl>
        <Divider />
        <FormGroup sx={checkboxGroupSx}>
          <Checkbox
            isDisabled={value === ReceptionPreference.NONE}
            labelText="Filter low-quality messages"
            description="Hide message requests that have been detected as being potentially spam or
            low-quality. These will be sent to a separate inbox at the bottom of your
            message requests. You can still access them if you want."
          />
          <Checkbox
            labelText="Show read receipts"
            description="Let people you’re messaging with know when you’ve seen their messages. Read receipts are not shown on message requests."
          />
        </FormGroup>
      </Box>
    </Stack>
  );
};
