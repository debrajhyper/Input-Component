import React, { useState } from 'react';
import { Input, InputProps } from '../Input';
import styles from './FileInput.module.css';
import { IconTrash } from '@tabler/icons-react';

interface FileInputProps extends Omit<InputProps, 'type' | 'value' | 'onChange'> {
    accept?: string;
    multiple?: boolean;
    preview?: boolean;
    value?: FileList | null;
    onChange?: (files: FileList | null) => void;
}

export const FileInput: React.FC<FileInputProps> = ({ value, onChange, preview, ...props }) => {
    const [files, setFiles] = useState<File[]>(value ? Array.from(value) : []);
    const [isDragging, setIsDragging] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFiles = e.target.files;
        if (selectedFiles && selectedFiles.length > 0) {
            const newFiles = Array.from(selectedFiles);
            setFiles(prevFiles => props.multiple ? [...prevFiles, ...newFiles] : [newFiles[0]]);
            onChange && onChange(selectedFiles);
        } else {
            setFiles([]);
            onChange && onChange(null);
        }
    };

    const onDragOver = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        setIsDragging(true);
    };

    const onDragLeave = () => {
        setIsDragging(false);
    };

    const onDrop = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        setIsDragging(false);
        const droppedFiles = event.dataTransfer.files;
        if (droppedFiles && droppedFiles.length > 0) {
            const newFiles = Array.from(droppedFiles);
            setFiles(prevFiles => props.multiple ? [...prevFiles, ...newFiles] : [newFiles[0]]);
            onChange && onChange(droppedFiles);
        }
    };

    const onRemoveFile = (index: number) => {
        setFiles(prevFiles => {
            const newFiles = [...prevFiles];
            newFiles.splice(index, 1);
            onChange && onChange(newFiles.length > 0 ? createFileList(newFiles) : null);
            return newFiles;
        });
    };

    const createFileList = (files: File[]): FileList => {
        const dataTransfer = new DataTransfer();
        files.forEach(file => dataTransfer.items.add(file));
        return dataTransfer.files;
    };

    const getFileSize = (size: number): string => {
        if (size < 1024) return size + ' bytes';
        else if (size < 1048576) return (size / 1024).toFixed(1) + ' KB';
        else if (size < 1073741824) return (size / 1048576).toFixed(1) + ' MB';
        else return (size / 1073741824).toFixed(1) + ' GB';
    };

    return (
        <>
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
                    <span>Drag and drop or <span className={styles.fileInputLink}>upload your file</span></span>
                }
            />
            {
                preview && files.length > 0 && (
                    <div className={styles.fileList}>
                        {files.map((file, index) => (
                            <div key={index} className={styles.filePreview}>
                                <h3 title={file.name}><b>File Name: </b>{file.name}</h3>
                                <p title={getFileSize(file.size)}><b>Size: </b>{getFileSize(file.size)}</p>
                                <p title={file.lastModified.toString()}><b>Modified Time: </b>{new Date(file.lastModified).toLocaleString('en-IN')}</p>
                                <div className={styles.removeFile}>
                                    <IconTrash size={18} title="Remove file" onClick={() => onRemoveFile(index)} className={styles.trashIcon} />
                                </div>
                            </div>
                        ))}
                    </div>
                )
            }
        </>
    );
};

export default FileInput;