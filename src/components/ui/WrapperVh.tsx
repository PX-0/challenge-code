interface  props {className:string|null, children:React.ReactNode}

const WrapperVh:React.FC<props>=(props:props)=>{
    return <div className={`h-screen bg-dark ${props.className} w-screen`}>
        {props.children}
    </div>
};

export default WrapperVh;