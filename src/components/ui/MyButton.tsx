interface props {onClick:undefined|(()=>void),classname:string,disabled:boolean,children:React.ReactNode}

export default function MyButton(props:props){
    return <button onClick={props.onClick} type="submit" disabled={props.disabled} className={props.classname}>{props.children}</button>
}