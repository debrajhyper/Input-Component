import React from 'react';
import { Input, InputProps } from '../Input';
import styles from './DateInput.module.css';
import { IconCalendarMonth } from '@tabler/icons-react';

export interface DateInputProps extends Omit<InputProps, 'type'> { }

export const DateInput: React.FC<DateInputProps> = (props) => {
    return (
        <Input
            {...props}
            type="date"
            className={`${styles.dateInput} ${props.className || ''}`}
            suffix={
                <IconCalendarMonth className={styles.dateInputCalendarIcon} />
            }
        />
    );
};

export default DateInput;