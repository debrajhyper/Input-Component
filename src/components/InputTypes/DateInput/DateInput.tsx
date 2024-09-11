import React from 'react';
import styles from './DateInput.module.css';
import { Input, InputProps } from '../../Input';
import { IconCalendarMonth } from '@tabler/icons-react';

export interface DateInputProps extends Omit<InputProps, 'type'> { }

/**
 * DateInput component
 *
 * @remarks
 * This component is used to input a date in the format of "YYYY-MM-DD".
 * It uses the native HTML input type "date" to provide a calendar picker.
 *
 * @param {DateInputProps} props
 * @returns
 */
export const DateInput: React.FC<DateInputProps> = (props) => {
    return (
        <Input
            // spread the props to the Input component
            {...props}
            // set the type of the input to "date"
            type="date"
            // add the custom class to the input element
            className={`${styles.dateInput} ${props.className || ''}`}
            // add a calendar icon as the suffix
            suffix={
                <IconCalendarMonth className={styles.dateInputCalendarIcon} />
            }
        />
    );
};

/**
 * Default export of the DateInput component
 */
export default DateInput;