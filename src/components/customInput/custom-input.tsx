
import "./custom-imput.css"


interface CustomImput {
    value: string;
    label:string;
    children:React.ReactNode;
    placeholder:string;
    onchangeFunction: (e:any)=>void;
    type?: string;
}

const CustomInput = ({label,children,placeholder,type="text",value,onchangeFunction}:CustomImput) => {

  return (
    <div className="custom-input">
        <label >{label}</label>
        <div className="input-container">
            {children}
            <input type={type} id="email" placeholder={placeholder} value={value} onChange={onchangeFunction}  />
        </div>
    </div>
  )
}

export default CustomInput