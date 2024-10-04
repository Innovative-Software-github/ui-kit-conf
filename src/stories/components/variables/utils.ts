export const colorVariables = {
  cyan: [
    '--conf-color-cyan-1',
    '--conf-color-cyan-2',
    '--conf-color-cyan-3',
    '--conf-color-cyan-4',
    '--conf-color-cyan-5',
    '--conf-color-cyan-6',
    '--conf-color-cyan-7',
    '--conf-color-cyan-8',
    '--conf-color-cyan-9',
  ],
  grey: [
    '--conf-color-grey-1',
    '--conf-color-grey-2',
    '--conf-color-grey-3',
    '--conf-color-grey-4',
    '--conf-color-grey-5',
    '--conf-color-grey-6',
    '--conf-color-grey-7',
  ],
  green: [
    '--conf-color-green-1',
    '--conf-color-green-2',
    '--conf-color-green-3',
    '--conf-color-green-4',
    '--conf-color-green-5',
    '--conf-color-green-6',
    '--conf-color-green-7',
  ],
  red: [
    '--conf-color-red-1',
    '--conf-color-red-2',
    '--conf-color-red-3',
    '--conf-color-red-4',
    '--conf-color-red-5',
    '--conf-color-red-6',
    '--conf-color-red-7',
  ],
  original: [
    '--conf-color-black',
    '--conf-color-white',
  ],
};

export const copyToClipboard = (color) => navigator.clipboard.writeText(color);
