


export type Props<P, H> = P & React.HTMLProps<H>;


type BaseProps = {red: string};


type P = Props<BaseProps, HTMLButtonElement>;

const p: P = {
    red: 'stadfas',
    style: {

    }
}