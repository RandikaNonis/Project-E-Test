import React from 'react';
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
} from '@mui/material';
import Title from '../shared/Title';

const LanguageSelection: React.FC = () => {
  const [language, setLanguage] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setLanguage(event.target.value as string);
  };

  return (
    <>
      <Title
        mainText={'What’s your preferred'}
        highlightText={' Language?'}
        highlightTextColor={'#0083C6'}
      />
      <div>
        <FormControl sx={{ marginTop: '15px' }} fullWidth>
          <InputLabel variant="outlined" id="demo-simple-select-label">
            Language
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={language}
            label="Language"
            onChange={handleChange}
          >
            <MenuItem value={'english'}>English</MenuItem>
            <MenuItem value={'español'}>Español</MenuItem>
          </Select>
        </FormControl>
      </div>
    </>
  );
};

export default LanguageSelection;
