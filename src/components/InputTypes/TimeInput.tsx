import React from 'react';
import { Input, InputProps } from '../Input';
import { IconCalendarTime } from '@tabler/icons-react';
import styles from './TimeInput.module.css';

export interface TimeInputProps extends Omit<InputProps, 'type'> { }

export const TimeInput: React.FC<TimeInputProps> = (props) => {
    return (
        <Input
            {...props}
            type="time"
            className={`${styles.timeInput} ${props.className || ''}`}
            suffix={
                <IconCalendarTime className={styles.timeInputCalendarIcon} />
            }
        />
    );
};

export default TimeInput;