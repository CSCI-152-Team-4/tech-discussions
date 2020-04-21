import React from "react";
import Chip from "@material-ui/core/Chip";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

const options = ["python"];

export default function FixedTags() {
  return (
    <Autocomplete
      multiple
      id="fixed-tags-demo"
      options={top100Films}
      getOptionLabel={option => option.title}
      defaultValue={[top100Films[6], top100Films[13]]}
      renderTags={(value, getTagProps) =>
        value.map((option, index) => (
          <Chip
            label={option.title}
            {...getTagProps({ index })}
            disabled={index === 0}
            i
          />
        ))
      }
      style={{ width: 500 }}
      renderInput={params => (
        <TextField
          {...params}
          label="Fixed tag"
          variant="outlined"
          placeholder="Favorites"
          fullWidth
        />
      )}
    />
  );
}
