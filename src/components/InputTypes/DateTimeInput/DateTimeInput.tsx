import React from 'react';
import styles from './DateTimeInput.module.css';
import { Input, InputProps } from '../../Input';
import { IconCalendarStats } from '@tabler/icons-react';

export interface DateTimeInputProps extends Omit<InputProps, 'type'> { }

/**
 * DateTimeInput component
 *
 * @remarks
 * This component wraps the standard Input component and
 * sets the type to 'datetime-local'. It also adds a calendar
 * icon suffix.
 *
 * @param props - The props for the Input component
 */
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

/**
 * Default export
 */
export default DateTimeInput;