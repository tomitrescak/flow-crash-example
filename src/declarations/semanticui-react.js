// /* eslint-disable */
// import React from 'react';

// declare module "semanticui-react" {
//   declare function init(component: string): void;
//   declare var config: {
//     linkElement: any,
//     i18n: (key: string) => string
//   };

//   declare interface IProps {
//     classes?: string;
//     children?: any;
//     divider: string;
//   }

//   // declare class Input extends React.Component<IProps, {}> { }


//   declare interface IEntity {
//     id: string;
//   }

//   declare interface IComponent {
//     classes?: string;
//   }

//   declare interface ILocalComponent extends IComponent {
//     mid: string;
//     text: string;
//   }

//   // COLLECTIONS

//   // breadcrumbs

//   declare interface IBreadcrumbsProps {
//     classes?: string;
//     children?: any;
//     divider?: string;
//     dividerIcon?: string; 
//   }

//   declare class Breadcrumbs extends React.Component<IBreadcrumbsProps, {}> { }

//   declare interface IBreadcrumbProps {
//     text?: string | { key: string, parameters: Object };
//     link?: any;
//     active?: boolean;
//   }

//   declare class Breadcrumb extends React.Component<IBreadcrumbProps, {}> { }

//   // form

//   declare interface IFormProps {
//     classes?: string;
//     children?: any;
//   }

//   declare class Form extends React.Component<IFormProps, {}> { }

//   // grid

//   declare interface IGridProps {
//     classes?: string;
//     columns?: number;
//     children?: any;
//     stackable?: boolean;
//     page?: boolean;
//     divided?: boolean;
//     align?: "center" | "left" | "right"
//   }

//   declare class Grid extends React.Component<IGridProps, {}> { }

//   // menu

//   declare interface IMenuProps extends IColors {
//     classes?: string;
//     children?: any;
//     pagination?: boolean;
//     vertical?: boolean;
//     inverted?: boolean;
//     position?: string;
//   }

//   declare class Menu extends React.Component<IMenuProps, {}> { }

//   declare interface IMenuDropdown {
//     icon?: string;
//     text?: string | { key: string, parameters: Object };
//     children?: any;
//     id: string;
//   }

//   declare class MenuDropdown extends React.Component<IMenuDropdown, {}> { }

//   declare interface IMenuItem {
//     classes?: string;
//     icon?: string;
//     text?: string | { key: string, parameters: Object };
//     children?: any;
//     link?: string;
//     onClick?: Function;
//   }

//   declare class MenuItem extends React.Component<IMenuItem, {}> { }

//   ///////////////////////////////////////////////////////
//   // components

//   declare interface IColors {
//     color?: "default" | "primary" | "secondary" | "success" | "failure" | "blue" | "red" | "olive" | "orange" | "yellow" | "green" | "teal" | "blue" | "violet" | "pink" | "purple" | "brown" | "grey" | "black";
//   }

//   declare interface ISizes {
//     size?: "mini" | "tiny" | "small" | "medium" | "large" | "huge" | "massive";
//   }

//   declare interface IButton extends IColors, ISizes {
//     classes?: string;
//     text?: string | { key: string, parameters: Object };
//     basic?: boolean;
//     inverted?: boolean;
//     compact?: boolean;
//     icon?: string;
//     floated?: "left" | "right";
//     labeled?: "left" | "right";
//     loading?: boolean;
//     circular?: boolean;
//     toggle?: "active" | "inactive";
//     fluid?: boolean;
//     disabled?: boolean;
//     attached?: "left" | "right";
//     active?: boolean;
//     onClick?: Function;
//     url?: string;
//     target?: string;
//     style?: any;
//   }

//   declare class Button extends React.Component<IButton, {}> { }

//   // buttons

//   declare interface IButtons extends IColors, ISizes {
//     classes?: string;
//     children?: any;
//     vertical?: boolean;
//     labeled?: boolean;
//     icon?: boolean;
//   }

//   declare class Buttons extends React.Component<IButton, {}> { }

//   // column

//   declare interface IColumn {
//     classes?: string;
//     width?: number;
//     children?: any;
//   }

//   declare class Column extends React.Component<IColumn, {}> { }

//   // divider

//   declare interface IDivider {
//     classes?: string;
//     children?: any;
//     icon?: string;
//     inverted?: boolean;
//     orientation?: "vertical" | "horizontal";
//     isHeader?: boolean;
//   }

//   declare class Divider extends React.Component<IDivider, {}> { }

//   // fields

//   declare interface IFieldsProps {
//     children?: any;
//     type?: "inline" | "grouped";
//   }

//   declare class Fields extends React.Component<IFieldsProps, {}> { }

//   declare interface IFieldProps {
//     children?: any;
//     type?: "inline" | "grouped";
//     label?: string;
//     text?: string | { key: string, parameters: Object };
//     width?: number;
//     style?: any;
//   }

//   declare class Field extends React.Component<IFieldProps, {}> { }

//   // header

//   declare interface IHeader extends IColors {
//     classes?: string;
//     children?: any;
//     icon?: string;
//     sub?: string;
//     circular?: boolean;
//     alignment?: "center" | "left" | "right";
//     image?: string;
//     dividing?: boolean;
//     attached?: "top" | "middle" | "bottom";
//     iconOnTop?: boolean;
//     block?: boolean;
//     inverted?: boolean;
//     text?: string | { key: string, parameters: Object };
//   }

//   declare class Header1 extends React.Component<IHeader, {}> { }
//   declare class Header2 extends React.Component<IHeader, {}> { }
//   declare class Header3 extends React.Component<IHeader, {}> { }
//   declare class Header4 extends React.Component<IHeader, {}> { }
//   declare class Header5 extends React.Component<IHeader, {}> { }

//   // icon

//   declare interface IIcon {
//     classes?: string;
//     children?: any;
//     icon: string;
//   }

//   declare class Icon extends React.Component<IIcon, {}> { }

//   // image

//   declare interface IImage extends ISizes {
//     classes?: string;
//     children?: any;
//     src?: string;
//     avatar?: boolean;
//     bordered?: boolean;
//     fluid?: boolean;
//     rounded?: boolean;
//     circular?: boolean;
//     align?: "top" | "middle" | "bottom";
//     centered?: boolean;
//     spaced?: boolean;
//     float?: "left" | "right";
//   }

//   declare class Image extends React.Component<IImage, {}> { }

//   // input

//   declare interface IInput {
//     classes?: string;
//     placeholder?: string;
//     label?: string;
//     icon?: string;
//     search?: boolean;
//     iconPosition?: string;
//     onChange?: Function;
//     children?: any;
//     inputClasses?: string;
//     type?: string;
//     value?: any;
//     defaultValue?: any;
//     leftLabel?: string;
//     rightLabel?: string;
//     inline?: boolean;
//     step?: string;
//     readOnly?: boolean;
//     disabled?: boolean; 
//   }

//   declare class Input extends React.Component<IInput, {}> {
//     value: any;
//   }

//   // label

//   declare interface ILabel extends ISizes, IColors {
//     classes?: string;
//     children?: any;
//     icon?: string;
//     rightIcon?: string;
//     image?: string;
//     detail?: string;
//     pointing?: "left" | "right" | "above" | "below";
//     basic?: boolean;
//     corner?: "left" | "right";
//     tag?: boolean;
//     ribbon?: boolean;
//     attached?: "top" | "bottom" | "top right" | "top left" | "bottom left" | "bottom right";
//     horizontal?: boolean;
//     floating?: boolean;
//     circular?: boolean;
//     text?: string | { key: string, parameters: Object };
//     link?: string;
//     onClick?: Function;
//     style?: any;
//   }

//   declare class Label extends React.Component<ILabel, {}> { }

//   // list

//   declare interface IList extends ISizes {
//     classes?: string;
//     children?: any;
//     divided?: boolean;
//     bulleted?: boolean;
//     ordered?: boolean;
//     celled?: boolean;
//     relaxed?: boolean;
//     selection?: boolean;
//     animated?: boolean;
//     inverted?: boolean;
//     link?: boolean;
//     align?: "middle" | "top" | "bottom";
//   }

//   declare class List extends React.Component<IList, {}> { }

//   declare interface IListItemProps {
//     classes?: string;
//     children?: any;
//     icon?: string;
//     image?: string;
//     float?: "right" | "left";
//     bullet?: string;
//     link?: string;
//     onClick?: Function;
//     text?: string | { key: string, parameters: Object };
//   }

//   declare class ListItem extends React.Component<IListItemProps, {}> { }

//   // loader

//   declare interface ILoader {
//     classes?: string;
//     inline?: boolean;
//     size?: "small" | "large";
//     active?: boolean;
//   }

//   declare class Loader extends React.Component<ILoader, {}> { }

//   // segment

//   declare interface ISegment extends IColors {
//     classes?: string;
//     children?: any;
//     attached?: "top" | "bottom" | "middle";
//     loading?: boolean;
//     inverted?: boolean;
//     compact?: boolean;
//     circular?: boolean;
//     alignment?: "left" | "center" | "right";
//     float?: "left" | "right";
//     style?: any;
//   }

//   declare class Segment extends React.Component<ISegment, {}> { }

//   declare interface ISegments {
//     classes?: string;
//     children?: any;
//   }

//   declare class Segments extends React.Component<ISegments, {}> { }

//   // site

//   declare interface ISite {
//     classes?: string;
//     children?: any;
//   }

//   declare class Site extends React.Component<ISite, {}> { }

//   // steps

//   declare interface ISteps {
//     classes?: string;
//     children?: any;
//     ordered?: boolean;
//     vertical?: boolean;
//     fluid?: boolean;
//     stackable?: boolean;
//     attached?: "top" | "bottom";
//   }

//   declare class Steps extends React.Component<ISteps, {}> { }

//   declare interface IStep {
//     active?: boolean;
//     icon?: string;
//     title: string;
//     disabled?: boolean;
//     completed?: boolean;
//     children?: any;
//   }

//   declare class Step extends React.Component<IStep, {}> { }

//   ////////////////////////////////////////
//   // MODULES

//   // accordion

//   declare interface IAcordion {
//     styled?: boolean;
//     classes?: string;
//     exclusive?: boolean;
//     children?: any;
//     id: string;
//     menu?: boolean;
//   }

//   declare class Accordion extends React.Component<IAcordion, {}> { }

//   declare interface IAccordionItem {
//     children?: any;
//     title: string;
//     active?: boolean;
//   }

//   declare class AccordionItem extends React.Component<IAccordionItem, {}> { }

//   // checkbox

//   declare interface IRadio {
//     classes?: string;
//     id?: string;
//     name?: string;
//     children?: any;
//     text?: string | { key: string, parameters: Object };
//     checked?: boolean;
//     disabled?: boolean;
//     fitted?: boolean;
//     onChange?: Function;
//   }

//   declare class Radio extends React.Component<IRadio, {}> { }

//   declare interface ICheckbox extends IRadio {
//     variation?: "slider" | "toggle";
//   }

//   declare class Checkbox extends React.Component<ICheckbox, {}> { }

//   // dropdowns

//   declare interface IDropdown extends IColors {
//     id: string;
//     classes?: string;
//     defaultText?: string | { key: string, parameters: Object };
//     text?: string | { key: string, parameters: Object };
//     selection?: boolean;
//     fluid?: boolean;
//     search?: boolean;
//     multiple?: boolean;
//     children?: any;
//     activation: "hover" | "click";
//     label?: string;
//     onChange?: (value: string, text: string) => void;
//     onInit?: (elem: any) => void;
//     value?: any;
//     defaultValue?: any;
//   }

//   declare class Dropdown extends React.Component<IDropdown, {}> { }

//   declare interface IDropdownItem {
//     value?: string;
//     image?: string;
//     icon?: string;
//     text?: string | { key: string, parameters: Object };
//     children?: any;
//   }

//   declare class DropdownItem extends React.Component<IDropdownItem, {}> { }

//   declare interface IDropdownButton {
//     id: string;
//     classes?: string;
//     icon?: string;
//     children?: any;
//     activation: "hover" | "click";
//     pointing?: string;
//     labeled?: boolean;
//     color: IColors;
//     compact: boolean;
//   }

//   declare class DropdownButton extends React.Component<IDropdownButton, {}> { }

//   // modal

//   declare interface IModal {
//     id: string;
//     classes?: string;
//     header?: string;
//     children?: any;
//     image?: boolean;
//     small?: boolean;
//     icon?: string;
//     approveAction?: Function;
//     neutralAction?: Function;
//     cancelAction?: Function;
//     approveText?: string | { key: string, parameters: Object };
//     neutralText?: string | { key: string, parameters: Object };
//     cancelText?: string | { key: string, parameters: Object };
//   }

//   declare class Modal extends React.Component<IModal, {}> { }

//   // progress

//   declare interface IProgress extends IColors {
//     id: string;
//     classes?: string;
//     value: number;
//     total: number;
//     indicating?: boolean;
//     text?: string | { key: string, parameters: Object };
//     showProgress?: boolean;
//     successText?: string | { key: string, parameters: Object };
//     progressText?: string | { key: string, parameters: Object };
//   }

//   declare class Progress extends React.Component<IProgress, {}> { }

//   // rating

//   declare interface IRating {
//     id: string;
//     classes?: string;
//     size?: "mini" | "tiny" | "small" | "medium" | "large" | "huge" | "massive";
//     type: "star" | "heart";
//     rating: number;
//     maxRating: number;
//   }

//   declare class Rating extends React.Component<IRating, {}> { }

//   // search

//   declare interface ISearch {
//     classes?: string;
//     id: string;
//     text: string;
//     loading?: boolean;
//     fluid?: boolean;
//     category?: boolean;
//     values?: { title: string }[];
//     setup?: Function;
//   }

//   declare class Search extends React.Component<ISearch, {}> { }

//   // sidebar

//   declare interface ISidebar {
//     classes?: string;
//     id: string;
//     children?: any;
//     position?: "top" | "left" | "bottom" | "right";
//     inverted?: boolean;
//     visible?: boolean;
//   }

//   declare class Sidebar extends React.Component<ISidebar, {}> { }

//   // tabs

//   declare interface ITab {
//     title?: string; // non-internationalised
//     text?: string | { key: string, parameters: Object };
//     children?: any;
//     url?: string;
//     name?: string;
//     style?: any;
//     icon?: string;
//   }

//   declare interface ITabs {
//     classes?: string;
//     containerClass?: string;
//     id: string;
//     children?: any;
//     activeTab?: string;
//     type?: "tabs" | "buttons" | "lines";
//     linkBased?: boolean;
//     selected?: (name: string) => void;
//   }

//   declare class Tabs extends React.Component<ITabs, {}> { }

//   declare class Tab extends React.Component<ITab, {}> { }

//   ///////////////////////////////////////////////
//   // VIEWS

//   // comments

//   declare interface IComments {
//     classes?: string;
//     children?: any;
//     header?: string;
//     commentPlaceholder?: string;
//     addButtonText: string;
//     previewButtonText?: string | { key: string, parameters: Object };
//     addComment: (e?: React.SyntheticEvent, comment?: string) => void;
//     previewComment?: (comment: string) => void;
//   }

//   declare class Comments extends React.Component<IComments, {}> { }

//   declare interface IAction {
//     name: string;
//     handler: Function;
//   }

//   declare interface IComment {
//     image?: string;
//     date: string;
//     children?: any;
//     author: string;
//     actions?: IAction[];
//     text?: string | { key: string, parameters: Object };
//   }

//   declare class Comment extends React.Component<IComment, {}> { }

//   // feed

//   declare interface IFeed extends ISizes {
//     classes?: string;
//     children?: any;
//   }

//   declare class Feed extends React.Component<IFeed, {}> { }

//   declare interface ILinkImage {
//     src: string;
//     link: string;
//   }

//   declare interface IFeedItem {
//     image?: string;
//     date?: string;
//     children?: any;
//     likes?: string;
//     extraImages?: ILinkImage[];
//     text?: string | { key: string, parameters: Object };
//   }

//   declare class FeedItem extends React.Component<IFeedItem, {}> { }

//   // items

//   declare interface IItems {
//     classes?: string;
//     children?: any;
//     loading?: boolean;
//     divided?: boolean;
//     link?: boolean;
//   }

//   declare class Items extends React.Component<IItems, {}> { }

//   declare interface IMeta {
//     name: string;
//     description?: string;
//   }

//   declare interface IITemBase {
//     state?: any;
//     classes?: string;
//   }

//   declare interface IITemImage extends IITemBase {
//     state?: any;
//     classes?: string;
//     size?: ISizes;
//     src?: string;
//   }

//   declare interface IItem {
//     image?: string | any;
//     icon?: string;
//     header?: string | any;
//     link?: string;
//     children?: any;
//     imageSize?: "tiny" | "small";
//     meta?: any;
//     alignment?: "middle aligned" | "top aligned" | "middle aligned";
//     description?: any;
//     extra?: any;
//   }
 
//   declare class Item_Main extends React.Component<IItem, {}> { }
//   declare class Item_Image extends React.Component<IITemImage, {}> { }
//   declare class Item_Content extends React.Component<IITemBase, {}> { }
//   declare class Item_Header extends React.Component<IITemBase, {}> { }
//   declare class Item_Extra extends React.Component<IITemBase, {}> { }
//   declare class Item_Meta extends React.Component<IITemBase, {}> { }
//   declare class Item_Description extends React.Component<IITemBase, {}> { }

//   declare interface Item {
//     Main: typeof Item_Main,
//     Image: typeof Item_Image,
//     Content: typeof Item_Content,
//     Header: typeof Item_Header,
//     Extra: typeof Item_Extra,
//     Description: typeof Item_Description
//   }



//   declare interface SUIComponent {
//     style?: any;
//   }

//   declare interface IJumbo extends SUIComponent {
//     classes?: string;
//     children?: any;
//     inverted?: boolean;
//   }

//   declare class Jumbo extends React.Component<IJumbo, {}> { }

//   declare interface IText {
//     classes?: string;
//     style?: Object;
//     text: string;
//   }

//   declare class Text extends React.Component<IText, {}> { }

//   declare interface ILink {
//     classes?: string;
//     style?: Object;
//     text?: string | { key: string, parameters: Object };
//     link: string;
//     icon?: string;
//     onClick?: Function;
//   }

//   declare class Link extends React.Component<ILink, {}> { }

//   declare interface IMessage extends IColors {
//     size?: "mini" | "tiny" | "small" | "medium" | "large" | "huge" | "massive";
//     classes?: string;
//     children?: any;
//     header?: string;
//     icon?: string;
//     attached?: boolean;
//     compact?: boolean;
//     fluid?: boolean;
//   }

//   declare class Message extends React.Component<IMessage, {}> { }

//   declare interface ITextArea {
//     classes?: string;
//     placeholder?: string;
//     label?: string;
//     onChange?: Function;
//     value?: any;
//     defaultValue?: any;
//     rows?: number;
//     cols?: number;
//     inline?: boolean;
//     previewMarkdown?: boolean;
//   }

//   declare class TextArea extends React.Component<ITextArea, {}> { }
// }

