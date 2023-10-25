
export interface IPositionCenterSvg {
  background_color: string;
  scale: number;
  position_center: {
    x: number;
    y: number;
  };
  svg_position_center: {
    x: number;
    y: number;
  };
  grid: boolean;
  grid_color: string;
  grid_align?: boolean;
  ruler: boolean;
}
export interface IDoneJson extends IConfigItem {
  id: string;
  x: number;
  y: number;
  client: ICoordinate;
  scale_x: number;
  scale_y: number;
  rotate: number;
  actual_bound: {
    x: number;
    y: number;
    width: number;
    height: number;
  };
  point_coordinate: {
    tl: ICoordinate;
    tc: ICoordinate;
    tr: ICoordinate;
    l: ICoordinate;
    r: ICoordinate;
    bl: ICoordinate;
    bc: ICoordinate;
    br: ICoordinate;
  };
  temp: {
    x: number;
    y: number;
  };
}
export interface IDataModel {
  layout_center: {
    x: number;
    y: number;
  };
  config: IPositionCenterSvg;
  done_json: IDoneJson[];
  thumbnail: string;
}
export interface IConfigItem {
  name: string;
  title: string;
  display: boolean;
  props: IConfigItemProps;
  type: EDoneJsonType;
  config: IDoneJsonConfig;
  common_animations?: IConfigItemPropsCommonAnimations;
  animations?: IConfigItemProps;
  tag?: any;
  state?: IConfigItemState; //通过一个属性去控制多个属性就是有状态组件
  tag_slot?: string;
  event?: { [key: string]: IConfigItemEvent };
  img?: {
    width: number;
    height: number;
    url: string;
  };
}
export interface IConfigItemProps {
  [key: string]: {
    title: string;
    type: EConfigItemPropsType;
    val: any;
    options?: any;
    disabled?: boolean;
  };
}
export enum EDoneJsonType {
  File = 'File',
  StraightLine = 'StraightLine',
  ConnectionLine = 'ConnectionLine',
  CustomSvg = 'CustomSvg',
  Vue = 'Vue',
  Image = 'Image'
}
export interface ICoordinate {
  x: number;
  y: number;
}
export interface IDoneJsonConfig {
  can_zoom: boolean;
  have_anchor: boolean;
  actual_rect: boolean;
}
export interface IConfigItemPropsCommonAnimations {
  val: string;
  delay: string;
  speed: string;
  repeat: string;
}
export interface IConfigItemState {
  OnOff?: {
    title: string;
    default: false;
    props: { [key: string]: { openVal: any; closeVal: any } };
  };
}
export interface IConfigItemEvent {
  title: string;
  val: string;
  type: EConfigItemEventType;
}
export enum EConfigItemEventType {
  None = 'None',
  Custom = 'Custom',
  DeviceControl = 'DeviceControl'
}
export enum EConfigItemPropsType {
  Input = 'Input',
  Color = 'Color',
  InputNumber = 'InputNumber',
  Switch = 'Switch', //此类型option默认索引0为关闭
  JsonEdit = 'JsonEdit',
  Select = 'Select'
}
export interface IBindDevice {
  bind_node_id: string;
  bind_node_prop: string;
  device_id: string;
  device_prop: string;
  bind_btn_state?: boolean;
}
export interface IDeviceInfo {
  device_list: IDeviceList[];
  bind_device_list: IBindDevice[];
}
export interface IDeviceList {
  id: string;
  name: string;
  prop_list: IDevicePropList[];
}
export interface IDevicePropList {
  label: string;
  value: string;
}
export interface IConfigCenter {
  [key: string]: IConfigComponentGroup[];
}
export interface IConfigComponentGroup {
  groupType: string;
  title: string;
  list: Array<IConfigItem>;
}
export interface IAppendSymbol {
  svg_url: string;
  id: string;
  width: string;
  height: string;
}