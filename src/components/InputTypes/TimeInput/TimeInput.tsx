import React from 'react';
import styles from './TimeInput.module.css';
import { Input, InputProps } from '../../Input';
import { IconCalendarTime } from '@tabler/icons-react';

export interface TimeInputProps extends Omit<InputProps, 'type'> { }

/**
 * TimeInput component
 *
 * @remarks
 * This component wraps the standard Input component and
 * sets the type to 'time'. It also adds a calendar
 * icon suffix.
 *
 * @param {TimeInputProps} props
 * @returns
 */
export const TimeInput: React.FC<TimeInputProps> = (props) => {
    return (
        <Input
            // spread the props to the Input component
            {...props}
            // set the type of the input to "time"
            type="time"
            // add the custom class to the input element
            className={`${styles.timeInput} ${props.className || ''}`}
            // add a calendar icon as the suffix
            suffix={
                <IconCalendarTime className={styles.timeInputCalendarIcon} />
            }
        />
    );
};

/**
 * Default export
 */
export default TimeInput;