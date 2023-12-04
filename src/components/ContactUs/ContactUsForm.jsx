import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
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

const schema = yup
  .object({
    name: yup
      .string()
      .matches(/^[A-Za-z\s]+$/, 'Name should contain only letters and spaces')
      .test(
        'two-words',
        'Name should consist of exactly two words',
        (value) => {
          const words = value.split(' ').filter((word) => word.trim() !== '');
          return words.length === 2;
        }
      )
      .min(3, 'Name should be at least 3 characters')
      .max(50, 'Full name should not exceed 50 characters')
      .required(),
    email: yup
      .string()
      .test((value) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value))
      .required(),
    phone: yup
      .string()
      .test((value) => /^380\d{9}$/.test(value))
      .required(),
  })
  .required();

export const ContactUsForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
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
