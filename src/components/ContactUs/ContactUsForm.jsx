import { useForm } from 'react-hook-form';
import { StyleSheetManager } from 'styled-components';
import { Icon } from '../../shared/Icon/Icon';
import {
  Button,
  Error,
  Form,
  Input,
  Label,
  Textarea,
} from './ContactUs.styled';

export const ContactUsForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      message: '',
    },
  });

  const onSubmit = (data) => (console.log(data), reset());

  return (
    <StyleSheetManager shouldForwardProp={(prop) => prop !== 'error'}>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Label>
          * Full name:
          <Input
            type="text"
            placeholder="John Rosie"
            error={errors.name}
            {...register('name', { required: true })}
          />
          {errors.name && <Error>Wrong Fullname</Error>}
        </Label>

        <Label>
          * E-mail:
          <Input
            type="email"
            placeholder="johnrosie@gmail.com"
            error={errors.email}
            {...register('email', { required: true })}
          />
          {errors.email && <Error>Wrong Email</Error>}
        </Label>

        <Label>
          * Phone:
          <Input
            type="number"
            placeholder="380961234567"
            error={errors.phone}
            {...register('phone', { required: true })}
          />
          {errors.phone && <Error>Wrong Phone</Error>}
        </Label>

        <Label>
          Message:
          <Textarea
            placeholder="My message...."
            {...register('message', { required: false })}
          />
        </Label>

        <Button type="submit">
          Send
          <span>
            <Icon
              iconName="icon-arrow-right"
              width={'16px'}
              height={'16px'}
              stroke={'#173D33'}
            />
          </span>
        </Button>
      </Form>
    </StyleSheetManager>
  );
};
