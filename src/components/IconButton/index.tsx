import { FC, MouseEventHandler } from 'react';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { Button, FontAwesomeIcon } from './styles';

type Props = {
  type: 'button' | 'submit' | 'reset';
  icon: IconDefinition;
  onClick: MouseEventHandler<HTMLButtonElement>;
  className?: string;
};

const IconButton: FC<Props> = ({ type, icon, onClick, className }) => {
  return (
    <Button className={className} type={type} onClick={onClick}>
      <FontAwesomeIcon icon={icon} />
    </Button>
  );
};

export default IconButton;
