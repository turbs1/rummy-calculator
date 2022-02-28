import { Box, Button, styled, TextField } from '@mui/material';
import { useState } from 'react';
import { Controller, FormProvider, useForm } from 'react-hook-form';

const StylForm = styled('form')({
  display: 'grid',
  padding: '1rem',
  gap: '1rem'
});

export const Points = (props: { players: string[] }) => {
  const [points, setPoints] = useState<number[]>(() => props.players.map(() => 0));
  const formMethods = useForm();

  const handleAddsPoints = (data: any) => {
    const newPoints = props.players.map((player) => {
      if (!Object.values(data[player]).filter((val) => !!val).length) {
        return 0;
      }

      return Object.values(data[player])
        .filter((val) => !!val)
        .map((val) => Number(val))
        .reduce((prev, curr) => prev + curr) as number;
    });

    setPoints((prevState) => newPoints.map((el, index) => prevState[index] + el));
    formMethods.reset();
  };

  return (
    <Box sx={{ padding: '0' }}>
      <FormProvider {...formMethods}>
        <StylForm onSubmit={formMethods.handleSubmit(handleAddsPoints)}>
          <Box sx={{ display: 'grid', gridTemplateColumns: `repeat(${props.players.length}, 1fr)` }}>
            {props?.players.map((player, index) => {
              const summaryPoints = points[index] ?? 0;
              return (
                <Box>
                  <TextField
                    InputProps={{ readOnly: true }}
                    multiline
                    value={`${player} \n${summaryPoints}`}
                    variant="filled"
                    sx={{ margin: '0.25rem' }}
                  />
                  <Box>
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item) => (
                      <Controller
                        name={`${player}.${index}${item}`}
                        defaultValue={''}
                        control={formMethods.control}
                        render={({ field: { onChange, value } }) => (
                          <TextField
                            onChange={onChange}
                            value={value}
                            inputProps={{
                              patterns: '[0-9]*'
                            }}
                            type="number"
                            variant="outlined"
                            sx={{ margin: '0.25rem' }}
                          />
                        )}
                      />
                    ))}
                  </Box>
                </Box>
              );
            })}
          </Box>
          <Button type={'submit'} variant={'contained'}>
            Save
          </Button>
        </StylForm>
      </FormProvider>
    </Box>
  );
};
