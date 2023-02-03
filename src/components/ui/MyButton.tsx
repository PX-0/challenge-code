interface props {onClick:undefined|(()=>void),classname:string,children:React.ReactNode}

export default function MyButton(props:props){
    return <button onClick={props.onClick} type="submit" className={props.classname}>{props.children}</button>
}