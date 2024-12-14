import * as React from 'react';
import { clsx } from 'clsx';
import { useRef, useState } from 'react';

import { Icon } from '../..';
import cls from './AvatarUploader.module.css';
import { IconType } from '../Icon/IconsMapping';

export type TAvatarUploaderSize = 'M' | 'L';

interface IAvatarUploaderProps {
  children?: React.ReactNode;
  label?: string;
  size?: TAvatarUploaderSize;
  className?: string;
}

const DISPLAY_NAME = 'AvatarUploader';

export const AvatarUploader: React.FC<IAvatarUploaderProps> = (props) => {
  const {
    className,
    children = '',
    label,
    size = 'L',
  } = props;

  const fileInputRef = useRef<HTMLInputElement>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [showClearButton, setShowClearButton] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target;

    if (files && files.length > 0) {
      const file = files[0];
      const reader = new FileReader();

      reader.onloadend = () => {
        setPreviewUrl(reader.result as string);
        setShowClearButton(true);
      };

      reader.readAsDataURL(file);
    }
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleClearImage = () => {
    setPreviewUrl(null);
    setShowClearButton(false);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleMouseEnter = () => {
    setShowClearButton(true);
  };

  const handleMouseLeave = () => {
    setShowClearButton(false);
  };

  return (
    <div className={clsx(cls.headContainer, className)}>
      <label className={clsx(cls.label, className)}>
        {label}
      </label>
      <div className={clsx(cls.container, className)} onClick={!showClearButton ? handleClick : undefined}>
        <div>
          {previewUrl ? (
            <div
              className={cls.previewContainer}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <img
                className={clsx(cls.preview, className)}
                src={previewUrl}
                alt="File Preview" // хз еслинтик этого требует
              />
              {showClearButton && (
                <button
                  className={cls.clearButton}
                  onClick={handleClearImage}
                  type="button"
                >
                  <Icon type={IconType.Trash_20} width={20} height={20} />
                </button>
              )}
            </div>
          ) : (
            <Icon type={IconType.Picture_46} width={46} height={46} />
          )}
        </div>
        <input
          className={clsx(cls.inputImg)}
          type="file"
          ref={fileInputRef}
          accept=".jpg, .jpeg, .png"
          onChange={handleChange}
        />
        {children}
      </div>
    </div>
  );
};

AvatarUploader.displayName = DISPLAY_NAME;
