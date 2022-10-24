import React from "react";

type SelectProps = {
  id: string,
  name: string,
  values: string[],
  placeholder: string,
  icon: boolean,
  styles: string
}

const Select = ({id, name, values, placeholder, icon, styles}: SelectProps) => {
  return (
    <div>
      {icon === true ?
        <div className="relative">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-[40px] h-[40px] absolute top-[5px] left-[10px] cursor-pointer">
            <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM6.262 6.072a8.25 8.25 0 1010.562-.766 4.5 4.5 0 01-1.318 1.357L14.25 7.5l.165.33a.809.809 0 01-1.086 1.085l-.604-.302a1.125 1.125 0 00-1.298.21l-.132.131c-.439.44-.439 1.152 0 1.591l.296.296c.256.257.622.374.98.314l1.17-.195c.323-.054.654.036.905.245l1.33 1.108c.32.267.46.694.358 1.1a8.7 8.7 0 01-2.288 4.04l-.723.724a1.125 1.125 0 01-1.298.21l-.153-.076a1.125 1.125 0 01-.622-1.006v-1.089c0-.298-.119-.585-.33-.796l-1.347-1.347a1.125 1.125 0 01-.21-1.298L9.75 12l-1.64-1.64a6 6 0 01-1.676-3.257l-.172-1.03z" clipRule="evenodd" />
          </svg>
          <select id={id} name={name} className={styles}>
            {values.map(value => <option key={id} value={value} className="border-2">{value}</option>)}
          </select>
        </div> :
        <div className="flex flex-wrap justify-start flex-col text-left">
          <label htmlFor={id} className="text-sm underline decoration-1 decoration-green mb-[5px] ml-[20px]">{placeholder}</label>
          <select id={id} name={name} className={styles}>
            {values.map(value => <option key={id} value={value}>{value}</option>)}
          </select>
        </div>
      }
    </div>
  )
}

export default Select;
