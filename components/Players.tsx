import { Button, styled, TextField } from '@mui/material';
import { Controller, FormProvider, useForm } from 'react-hook-form';

const StylForm = styled('form')({
  display: 'grid',
  padding: '1rem',
  gap: '1rem'
});

export const Players = (props: { onSubmit: any }) => {
  const formMethods = useForm();
  return (
    <FormProvider {...formMethods}>
      <StylForm onSubmit={formMethods.handleSubmit(props.onSubmit)}>
        <Controller
          name="player1"
          control={formMethods.control}
          render={({ field: { onChange, value } }) => (
            <TextField onChange={onChange} value={value} label={'player1'} variant="filled" />
          )}
        />
        <Controller
          name="player2"
          control={formMethods.control}
          render={({ field: { onChange, value } }) => (
            <TextField onChange={onChange} value={value} label={'player2'} variant="filled" />
          )}
        />
        <Controller
          name="player3"
          control={formMethods.control}
          render={({ field: { onChange, value } }) => (
            <TextField onChange={onChange} value={value} label={'player3'} variant="filled" />
          )}
        />
        <Controller
          name="player4"
          control={formMethods.control}
          render={({ field: { onChange, value } }) => (
            <TextField onChange={onChange} value={value} label={'player4'} variant="filled" />
          )}
        />
        <Controller
          name="player5"
          control={formMethods.control}
          render={({ field: { onChange, value } }) => (
            <TextField onChange={onChange} value={value} label={'player5'} variant="filled" />
          )}
        />
        <Button variant={'contained'} type="submit">
          Set Players
        </Button>
      </StylForm>
    </FormProvider>
  );
};
