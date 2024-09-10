import React from 'react';
import { Input, InputProps } from '../Input';
import styles from './MonthInput.module.css';
import { IconCalendar } from '@tabler/icons-react';

export interface MonthInputProps extends Omit<InputProps, 'type'> { }

export const MonthInput: React.FC<MonthInputProps> = (props) => {
    return (
        <Input
            {...props}
            type="month"
            className={`${styles.monthInput} ${props.className || ''}`}
            suffix={
                <IconCalendar className={styles.monthInputCalendarIcon} />
            }
        />
    );
};

export default MonthInput;