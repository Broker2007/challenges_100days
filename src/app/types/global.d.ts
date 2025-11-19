declare module '*.scss' {
    interface IClassNames {
        [className: string]: string
    }
    const classNames: IClassNames;
    export = classNames;
}

declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.ttf';
declare module '*.woff';
declare module '*.woff2';
declare module '*.eot';
declare module '*.otf';
declare const __IS_DEV__: boolean;
