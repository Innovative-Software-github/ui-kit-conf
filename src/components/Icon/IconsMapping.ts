import * as confIcon from './Icons/confIcons';

export enum IconType {
  ArrowRight_20 = 'ArrowRight_20',
  ArrowLeft_20 = 'ArrowLeft_20',
  ArrowDown_20 = 'ArrowDown_20',
  ArrowTop_20 = 'ArrowTop_20',
  Close_20 = 'Close_20',
  Selected_20 = 'Selected_20',
  Checkmark_20 = 'Checkmark_20',
  Profile_20 = 'Profile_20',
  Trash_20 = 'Trash_20',
  Edit_20 = 'Edit_20',
  Link_20 = 'Link_20',
  Eye_20 = 'Eye_20',
  EyeOff_20 = 'EyeOff_20',
  Cancel_20 = 'Cancel_20',
  Done_20 = 'Done_20',
  Location_20 = 'Location_20',
  Plus_20 = 'Plus_20',
  Search_20 = 'Search_20',
  Logotype = 'Logotype',
  Logotype_white = 'Logotype_white',
  TGLink_44 = 'TGLink_44',
}

export const iconToComponent: Record<IconType, JSX.Element> = {
  [IconType.ArrowRight_20]: confIcon.ArrowRight_20,
  [IconType.ArrowLeft_20]: confIcon.ArrowLeft_20,
  [IconType.ArrowDown_20]: confIcon.ArrowDown_20,
  [IconType.ArrowTop_20]: confIcon.ArrowTop_20,
  [IconType.Close_20]: confIcon.Close_20,
  [IconType.Selected_20]: confIcon.Selected_20,
  [IconType.Checkmark_20]: confIcon.Checkmark_20,
  [IconType.Profile_20]: confIcon.Profile_20,
  [IconType.Trash_20]: confIcon.Trash_20,
  [IconType.Edit_20]: confIcon.Edit_20,
  [IconType.Link_20]: confIcon.Link_20,
  [IconType.Eye_20]: confIcon.Eye_20,
  [IconType.EyeOff_20]: confIcon.EyeOff_20,
  [IconType.Cancel_20]: confIcon.Cancel_20,
  [IconType.Done_20]: confIcon.Done_20,
  [IconType.Location_20]: confIcon.Location_20,
  [IconType.Plus_20]: confIcon.Plus_20,
  [IconType.Search_20]: confIcon.Search_20,
  [IconType.Logotype]: confIcon.Logotype,
  [IconType.Logotype_white]: confIcon.Logotype_white,
  [IconType.TGLink_44]: confIcon.TGLink_44,
};
