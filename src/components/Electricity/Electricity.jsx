import { useEffect, useState } from 'react';
import { Section, Text, Title } from './Electricity.styled';
import { formatNumberWithDots } from '../../utils';

export const Electricity = () => {
  const [counter, setCounter] = useState(1134147814);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCounter((prevCounter) => prevCounter + 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []); //

  return (
    <Section>
      <Title>Electricity we produced for all time</Title>
      <span></span>
      <Text>
        {formatNumberWithDots(counter)} <span>kWh</span>
      </Text>
    </Section>
  );
};
