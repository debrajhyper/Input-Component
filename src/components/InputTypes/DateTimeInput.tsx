import React from 'react';
import { Input, InputProps } from '../Input';
import styles from './DateTimeInput.module.css';
import { IconCalendarStats } from '@tabler/icons-react';

export interface DateTimeInputProps extends Omit<InputProps, 'type'> { }

export const DateTimeInput: React.FC<DateTimeInputProps> = (props) => {
    return (
        <Input
            {...props}
            type="datetime-local"
            className={`${styles.dateTimeInput} ${props.className || ''}`}
            suffix={
                <IconCalendarStats className={styles.dateTimeInputCalendarIcon} />
            }
        />
    );
};

export default DateTimeInput;