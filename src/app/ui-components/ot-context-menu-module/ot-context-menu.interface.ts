export interface OtContextMenu {
  menulist: IOtCMenu[];
  displayOptions: IOtContextMenuType;
  isUserMenu?: boolean;
}

export interface IOtCMenu {
  title: string;
  icon?: string;
  route?: string;
}

export interface IOtContextMenuType {
  icon: string;
  iconType?: 'image' | 'button' | 'text';
  size?: number;
  displayType?: 'horz' | 'vert';
  position?: 'left' | 'right';
}
