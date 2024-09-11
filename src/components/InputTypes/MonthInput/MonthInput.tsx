import React from 'react';
import { Input, InputProps } from '../../Input';
import styles from './MonthInput.module.css';
import { IconCalendar } from '@tabler/icons-react';

export interface MonthInputProps extends Omit<InputProps, 'type'> { }

/**
 * MonthInput component
 *
 * @remarks
 * This component is used to input a month in the format of "YYYY-MM".
 * It uses the native HTML input type "month" to provide a calendar picker.
 *
 * @param {MonthInputProps} props
 * @returns
 */
export const MonthInput: React.FC<MonthInputProps> = (props) => {
    return (
        <Input
            // spread the props to the Input component
            {...props}
            // set the type of the input to "month"
            type="month"
            // add the custom class to the input element
            className={`${styles.monthInput} ${props.className || ''}`}
            // add a calendar icon as the suffix
            suffix={
                <IconCalendar className={styles.monthInputCalendarIcon} />
            }
        />
    );
};

/**
 * Default export of the MonthInput component
 */
export default MonthInput;