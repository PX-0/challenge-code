import CompanyIcon from "../ui/icons/CompanyIcon";
import PhoneIcon from "../ui/icons/PhoneIcon";
import RevenueIcon from "../ui/icons/RevenueIcon";

interface props {name:string;
    address:string;
    phone:string;
    revenue:string;}

export default function CompanyItem(props:props) {
    
  return (
    <div className="flex justify-center">
      <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm text-center">
        <p className="text-cyan-800 font-jp text-2xl font-semibold leading-tight  mb-2  py-3 px-8 border-b border-black">
          {props.name}
        </p>
        <div className="flex items-center gap-2 py-3 px-8">
          <PhoneIcon className="stroke-cyan-800 w-6 h-6"/>
          <p className="text-gray-700 text-lg ">{props.phone}</p>
        </div>
        <div className="flex items-center gap-2 py-3 px-8">
        <CompanyIcon className="stroke-cyan-800 w-6 h-6"/>
          <p className="text-gray-700 text-lg ">{props.address}</p>
        </div>
        <div className="flex items-center gap-2 py-3 px-8">
          <RevenueIcon className="stroke-cyan-800 w-6 h-6"/>
          <p className="text-gray-700 text-lg ">€{props.revenue}</p>
        </div>
      </div>
    </div>
  );
}
