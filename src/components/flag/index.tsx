import React from 'react';

import { FlagLi } from './styles';

import BrazilFlag from '../../assets/images/brazil.png';
import UKFlag from '../../assets/images/united.png';

interface Props {
  type: 'pt' | 'en';
  active: boolean;
}

const Flag = ({ type, active }: Props): JSX.Element => {
  const flagType = {
    pt: BrazilFlag,
    en: UKFlag,
  };

  return (
    <FlagLi active={active}>
      <img src={flagType[type]} alt={type} />
    </FlagLi>
  );
};

export default Flag;
