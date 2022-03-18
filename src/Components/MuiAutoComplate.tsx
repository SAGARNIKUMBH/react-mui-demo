import { Stack, Autocomplete, TextField } from "@mui/material";
import { type } from "@testing-library/user-event/dist/type";
import { useState } from "react";

type Skill = {
  id: number;
  label: string;
};

const Skills = ["HTML", "CSS", "JavaScript", "TypeScript", "React"];

const skillsOptions = Skills.map((Skills, index) => ({
  id: index + 1,
  label: Skills,
}));

const MuiAutoComplate = () => {
  const [value, setValue] = useState<string | null>(null);
  const [skill, setSkill] = useState<Skill | null>(null);
  console.log({ value });
  return (
    <Stack spacing={3} width="250px">
      <Autocomplete
        options={Skills}
        renderInput={(params) => (
          <TextField {...params} label="Skills" color="secondary" />
        )}
        value={value}
        onChange={(e: any, newValue: string | null) => setValue(newValue)}
      />

      <Autocomplete
        options={skillsOptions}
        renderInput={(params) => (
          <TextField {...params} label="Skills" color="warning" />
        )}
        value={skill}
        onChange={(e: any, newValue: Skill | null) => setSkill(newValue)}
      />
    </Stack>
  );
};

export default MuiAutoComplate;
