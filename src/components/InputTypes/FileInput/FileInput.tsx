import React, { useState } from 'react';
import styles from './FileInput.module.css';
import { Input, InputProps } from '../../Input';
import { IconTrash } from '@tabler/icons-react';

interface FileInputProps extends Omit<InputProps, 'type' | 'value' | 'onChange'> {
    accept?: string;
    multiple?: boolean;
    preview?: boolean;
    value?: FileList | null;
    onChange?: (files: FileList | null) => void;
}

/**
 * FileInput component
 *
 * @param {FileInputProps} props component props
 * @returns {React.ReactElement} FileInput component
 */
export const FileInput: React.FC<FileInputProps> = ({ value, onChange, preview, ...props }) => {
    // State to store the files selected by the user
    const [files, setFiles] = useState<File[]>(value ? Array.from(value) : []);
    // State to track if the user is currently dragging a file over the input
    const [isDragging, setIsDragging] = useState(false);

    /**
     * Handle change event
     *
     * @param {React.ChangeEvent<HTMLInputElement>} e change event
     */
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        // Get the selected files from the input
        const selectedFiles = e.target.files;

        // If the user selected files
        if (selectedFiles && selectedFiles.length > 0) {
            // Convert the selected files to an array
            const newFiles = Array.from(selectedFiles);

            // If the component is set to allow multiple files
            if (props.multiple) {
                // Add the new files to the existing files
                setFiles(prevFiles => [...prevFiles, ...newFiles]);
            } else {
                // Replace the existing file with the new one
                setFiles([newFiles[0]]);
            }

            // Call the onChange function with the new files
            onChange && onChange(selectedFiles);
        } else {
            // If the user didn't select any files, clear the existing files
            setFiles([]);
            // Call the onChange function with null
            onChange && onChange(null);
        }
    };

    /**
     * Handle drag over event
     *
     * @param {React.DragEvent<HTMLDivElement>} event drag event
     */
    const onDragOver = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        setIsDragging(true);
    };

    /**
     * Handle drag leave event
     */
    const onDragLeave = () => {
        setIsDragging(false);
    };

    /**
     * Handle drop event
     *
     * @param {React.DragEvent<HTMLDivElement>} event drop event
     */
    const onDrop = (event: React.DragEvent<HTMLDivElement>) => {
        // Prevent the default behavior of opening the file in the browser
        event.preventDefault();

        // Set isDragging to false, since the drop event has been handled
        setIsDragging(false);

        // Get the files that were dropped
        const droppedFiles = event.dataTransfer.files;

        // If files were dropped
        if (droppedFiles && droppedFiles.length > 0) {
            // Convert the dropped files to an array
            const newFiles = Array.from(droppedFiles);

            // If multiple files are allowed, add the new files to the existing files
            // Otherwise, replace the existing file with the new one
            setFiles(prevFiles => props.multiple ? [...prevFiles, ...newFiles] : [newFiles[0]]);

            // Call the onChange function with the new files
            onChange && onChange(droppedFiles);
        }
    };

    /**
     * Remove file
     *
     * @param {number} index index of file to remove
     */
    const onRemoveFile = (index: number) => {
        setFiles(prevFiles => {
            const newFiles = [...prevFiles];
            newFiles.splice(index, 1);
            onChange && onChange(newFiles.length > 0 ? createFileList(newFiles) : null);
            return newFiles;
        });
    };

    /**
     * Create file list
     *
     * @param {File[]} files files to create list from
     * @returns {FileList} file list
     */
    const createFileList = (files: File[]): FileList => {
        const dataTransfer = new DataTransfer();
        files.forEach(file => dataTransfer.items.add(file));
        return dataTransfer.files;
    };

    /**
     * Get file size
     *
     * @param {number} size size in bytes
     * @returns {string} file size
     */
    const getFileSize = (size: number): string => {
        if (size < 1024) return size + ' bytes';
        else if (size < 1048576) return (size / 1024).toFixed(1) + ' KB';
        else if (size < 1073741824) return (size / 1048576).toFixed(1) + ' MB';
        else return (size / 1073741824).toFixed(1) + ' GB';
    };

    return (
        <div className={styles.fileInputContainer}>
            {/* The actual file input component that accepts a file drag and drop or a file upload */}
            <Input
                {...props}
                type="file"
                onChange={handleChange}
                value={files.map(f => f.name).join(', ')}
                accept={props.accept}
                multiple={props.multiple}
                onDragOver={onDragOver}
                onDragLeave={onDragLeave}
                onDrop={onDrop}
                customClasses={{
                    inputWrapper: `${styles.fileInputWrapper} ${isDragging ? styles.dragging : ''}`,
                    input: styles.fileInput
                }}
                className={`${styles.fileInput} ${props.className || ''}`}
                fileUploadText={
                    <span>
                        {/* Provide text to drag and drop or upload a file */}
                        Drag and drop or <span className={styles.fileInputLink}>upload your file</span>
                    </span>
                }
            />
            {
                preview && files.length > 0 && (
                    <div className={styles.fileList}>
                        {/* Show a list of all files selected with their name, size and modified time */}
                        {files.map((file, index) => (
                            <div key={index} className={styles.filePreview}>
                                <h3 title={file.name}><b>File Name: </b>{file.name}</h3>
                                <p title={getFileSize(file.size)}><b>Size: </b>{getFileSize(file.size)}</p>
                                <p title={file.lastModified.toString()}><b>Modified Time: </b>{new Date(file.lastModified).toLocaleString('en-IN')}</p>
                                <div className={styles.removeFile}>
                                    {/* Show a trash icon to remove the file */}
                                    <IconTrash size={18} title="Remove file" onClick={() => onRemoveFile(index)} className={styles.trashIcon} />
                                </div>
                            </div>
                        ))}
                    </div>
                )
            }
        </div>
    );
};

export default FileInput;