export function FormInput({ id, value, label, type, onChange }) {

    const outerDivClasses = "form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-red-500 focus:outline-none"

    return <input className={outerDivClasses} value={value} onChange={onChange} id={id} type={type} placeholder={label}/>;
}